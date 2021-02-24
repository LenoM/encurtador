import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../__docs__/shortener';
import ShortenerController from '../controllers/ShortenerController';


export default function route(app: any) {
  const options = { explorer: true };
  app.use('/docs', swaggerUi.serve);
  app.get('/docs', swaggerUi.setup(swaggerDocument, options));
  app.get('/:short_url', ShortenerController.get);
  app.post('/encurtador', ShortenerController.add);
};