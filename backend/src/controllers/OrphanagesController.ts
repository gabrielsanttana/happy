import {getRepository} from 'typeorm';
import {Request, Response} from 'express';
import Orphanage from '../models/Orphanage';

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

    const newOrphanage = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images,
    });

    await orphanagesRepository.save(newOrphanage);

    return response
      .status(201)
      .json({message: 'Successfully created the orphanage!'});
  },

  async getAllOrphanages(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphanage);

    const orphanagesList = await orphanagesRepository.find({
      relations: ['images'],
    });

    return response.status(200).json(orphanagesList);
  },

  async getOrphanageById(request: Request, response: Response) {
    const {id} = request.params;

    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = await orphanagesRepository.findOneOrFail(id, {
      relations: ['images'],
    });

    return response.status(200).json(orphanage);
  },
};
