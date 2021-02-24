import validator from 'validator';
import { getRepository, LessThan } from 'typeorm';
import ShortenerUrl from '../models/entities/ShortenerUrl';

class ShortenerService {
  async get(shortUrls: string) {
    const repository = getRepository(ShortenerUrl);

    if (shortUrls) {
      const shortner = await repository.findOne({
        shortUrl: shortUrls,
        expirationDate: LessThan(new Date()),
      });

      if (shortner.url !== undefined) {
        return { body: shortner.url };
      }
      return { error: 'URL não foi encontrada.' };
    }
    return { error: 'Informe a URL.' };
  }

  async create(data: ShortenerUrl) {
    if (data) {
      if (data.url) {
        const { url } = data;

        if (validator.isURL(url)) {
          const obj = new ShortenerUrl();
          const date = new Date();

          obj.url = url;
          obj.shortUrl = await ShortenerService.generateShortUrl();
          obj.expirationDate = new Date(date.getFullYear() + 1, date.getMonth(), 1);

          const repository = getRepository(ShortenerUrl);
          const shortner = await repository.save(obj);
          return { newUrl: `${process.env.BASE_URL}:${process.env.PORT}/${shortner.shortUrl}` };
        }
        return { error: 'A url informada não é valida. Por favor, verifique e tente novamente.' };
      }
      return { error: 'Por favor, informe uma URL.' };
    }
    return { error: 'Os parametros não foram preenchidos corretamente. Por favor, informe uma URL.' };
  }

  static async generateShortUrl() {
    let shortUrl = '';
    const urlLength = Math.floor(Math.random() * (10 - 5)) + 5;
    const allowedCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';

    while (shortUrl.length < urlLength) {
      shortUrl += allowedCharacters[Math.floor(Math.random() * (35 - 0)) + 0];
    }

    return shortUrl;
  }
}

export default new ShortenerService();
