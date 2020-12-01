import express from 'express';
import path from 'path';
import './database/connection';
import router from './routes';

const app = express();

app.use(express.json());
app.use(router);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.listen('3333', () => {
  console.log('⚙️  Server is running on port 3333');
});
