import {Router} from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';
import OrphanagesController from '../controllers/OrphanagesController';

const orphanagesRouter = Router();
const upload = multer(uploadConfig);

orphanagesRouter.get('/', OrphanagesController.getAllOrphanages);
orphanagesRouter.get('/:id', OrphanagesController.getOrphanageById);
orphanagesRouter.post(
  '/',
  upload.array('images'),
  OrphanagesController.createOrphanage,
);

export default orphanagesRouter;
