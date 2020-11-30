import {Router, Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Orphanage from '../models/Orphanage';

const orphanagesRouter = Router();

orphanagesRouter.get('/', async (request: Request, response: Response) => {
  return response.status(200).json({message: 'Hello, World!'});
});

orphanagesRouter.post('/', async (request: Request, response: Response) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  } = request.body;

  const orphanagesRepository = getRepository(Orphanage);

  const newOrphanage = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  });

  await orphanagesRepository.save(newOrphanage);

  return response
    .status(201)
    .json({message: 'Successfully created the orphanage!'});
});

export default orphanagesRouter;
