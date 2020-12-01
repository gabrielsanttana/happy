import {getRepository} from 'typeorm';
import {Request, Response} from 'express';
import * as Yup from 'yup';
import Orphanage from '../models/Orphanage';
import orphanagesView from '../views/orphanagesView';

export default {
  async createOrphanage(request: Request, response: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;

    const files = request.files as Express.Multer.File[];

    const images = files.map((image) => ({
      path: image.filename,
    }));

    const orphanagesRepository = getRepository(Orphanage);

    const orphanageData = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        }),
      ),
    });

    await schema.validate(orphanageData, {
      abortEarly: false,
    });

    const newOrphanage = orphanagesRepository.create(orphanageData);

    await orphanagesRepository.save(newOrphanage);

    return response
      .status(201)
      .json({message: 'Orphanage successfully created!'});
  },

  async getAllOrphanages(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphanage);

    const orphanagesList = await orphanagesRepository.find({
      relations: ['images'],
    });

    return response.status(200).json(orphanagesView.renderMany(orphanagesList));
  },

  async getOrphanageById(request: Request, response: Response) {
    const {id} = request.params;

    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = await orphanagesRepository.findOneOrFail(id, {
      relations: ['images'],
    });

    return response.status(200).json(orphanagesView.render(orphanage));
  },
};
