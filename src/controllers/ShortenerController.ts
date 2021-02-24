import { Request, Response } from 'express';
import ShortenerService from '../services/ShortenerService';

class ShortenerController {
  static async add(req: Request, res: Response) {
    if (req.body) {
      const result = await ShortenerService.create(req.body);
      res.send(result);
    } else {
      res.status(404).send('params required');
    }
  }

  static async get(req: Request, res: Response) {
    const result: any = await ShortenerService.get(req.params.short_url);

    if (result.body) {
      res.redirect(result.body);
    } else {
      res
        .status(404)
        .send(result.error);
    }
  }
}

export default ShortenerController;
