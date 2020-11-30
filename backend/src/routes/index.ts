import {Router} from 'express';
import orphanagesRouter from './orphanages';

const router = Router();

router.use('/orphanages', orphanagesRouter);

export default router;
