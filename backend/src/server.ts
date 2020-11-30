import express from 'express';
import './database/connection';
import router from './routes';

const app = express();

app.use(express.json());
app.use(router);

app.listen('3333', () => {
  console.log('⚙️  Server is running on port 3333');
});
