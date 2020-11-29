import express from 'express';

import './database/connection';

const app = express();

app.get('/', (request, response) => {
  response.json({
    message: 'Hello, World!',
  });
});

app.listen('3333', () => {
  console.log('⚙️  Server is running on port 3333');
});
