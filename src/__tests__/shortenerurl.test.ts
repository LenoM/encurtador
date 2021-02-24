import connection from '../config/connection';
import ShortenerService from '../services/ShortenerService';
import ShortenerUrl from '../models/entities/ShortenerUrl';

beforeAll(async () => {
  const conn = await connection.create('default');
})

describe('Testando Encurtador', () => {
  test('Criando uma url curta sem dados validos', async () => {
    const obj = await ShortenerService.create(undefined);
    expect(obj.error).toBe('Os parametros não foram preenchidos corretamente. Por favor, informe uma URL.');
  });

  test('Criando uma url curta sem informar a url', async () => {
    let shortener = new ShortenerUrl();
    const obj = await ShortenerService.create(shortener);
    expect(obj.error).toBe('Por favor, informe uma URL.');
  });

  test('Criando uma url curta sem uma url valida', async () => {
    let shortener = new ShortenerUrl();
    shortener.url = 'teste';

    const obj = await ShortenerService.create(shortener);
    expect(obj.error).toBe('A url informada não é valida. Por favor, verifique e tente novamente.');
  });

  test('Criando uma url curta a partir de uma url valida', async () => {
    let shortener = new ShortenerUrl();
    shortener.url = 'http://www.google.com';

    const obj = await ShortenerService.create(shortener);
    expect(obj.error).toBe(undefined);
    expect(obj.newUrl).toMatch(`${process.env.BASE_URL}:${process.env.PORT}/`);
  });

  test('Recuperando uma url com uma url curta null', async () => {
    const obj = await ShortenerService.get(null);
    expect(obj.error).toBe('Informe a URL.');
  });

  test('Recuperando uma url com uma url curta indefinida', async () => {
    const obj = await ShortenerService.get(undefined);
    expect(obj.error).toBe('Informe a URL.');
  });

  test('Recuperando uma url com uma url curta desconhecida', async () => {
    const obj = await ShortenerService.get('teste-teste');
    
    expect(obj.error).toBe('URL não foi encontrada.');
  });

  test('Recuperando uma url com uma url curta valida', async () => {
    let shortener = new ShortenerUrl();
    shortener.url = 'http://www.google.com';
    const short = await ShortenerService.create(shortener);
    const shortUrl = short.newUrl.replace(`${process.env.BASE_URL}:${process.env.PORT}/`, '');    
    const obj = await ShortenerService.get(shortUrl);

    expect(obj.body).toBe('http://www.google.com');
    expect(obj.error).toBe(undefined);
  });
});
