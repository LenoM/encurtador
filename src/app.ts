import cors from 'cors';
import express from 'express';
import route from './routes/route'; 
import connection from './config/connection';


connection.create('default').then(() => {
  const app = express();
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(cors());
  route(app);
  app.listen(process.env.PORT || 3000, () => {
    console.info(`Listening on port: ${process.env.PORT}`);
  });
});
