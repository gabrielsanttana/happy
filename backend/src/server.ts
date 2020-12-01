import express from 'express';
import cors from 'cors';
import path from 'path';
import 'express-async-errors';
import './database/connection';
import errorHandler from './errors/handler';
import router from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen('3333', () => {
  console.log('⚙️  Server is running on port 3333');
});
