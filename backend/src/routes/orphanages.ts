import {Router} from 'express';
import OrphanagesController from '../controllers/OrphanagesController';

const orphanagesRouter = Router();

orphanagesRouter.get('/', OrphanagesController.getAllOrphanages);
orphanagesRouter.get('/:id', OrphanagesController.getOrphanageById);
orphanagesRouter.post('/', OrphanagesController.createOrphanage);

export default orphanagesRouter;
