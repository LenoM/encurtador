// import 'mocha';
// import { expect } from 'chai';
// import connection from '../config/connection';
// import ShortenerService from '../services/ShortenerService';

// describe('Encurtador', async () => {
//   await connection.create();

//   // it('Criando uma url curta sem dados validos', async () => {
//   // const obj = await ShortenerService.create();
//   // expect(obj.error).to.equal('Os parametros não foram preenchidos corretamente. Por favor, informe uma URL.');
//   // });

//   it('Criando uma url curta sem informar a url', async () => {
//     const obj = await ShortenerService.create({ });
//     expect(obj.error).to.equal('Por favor, informe uma URL.');
//   });

//   it('Criando uma url curta sem uma url valida', async () => {
//     const obj = await ShortenerService.create({ url: 'teste' });
//     expect(obj.error).to.equal('A url informada não é valida. Por favor, verifique e tente novamente.');
//   });

//   it('Criando uma url curta a partir de uma url valida', async () => {
//     const obj = await ShortenerService.create({ url: 'http://www.google.com' });
//     expect(obj.error).to.be.an('undefined');
//     expect(obj.newUrl).toMatch(`${process.env.BASE_URL}:${process.env.PORT}/`);
//   });

//   // it('Recuperando uma url sem uma url curta', async () => {
//   //  const obj = await ShortenerService.get();
//   //  expect(obj.error).to.equal('Informe a URL.');
//   // });

//   it('Recuperando uma url sem uma url curta valida', async () => {
//     const obj = await ShortenerService.get({});
//     expect(obj.error).to.equal('Informe a URL.');
//   });

//   it('Recuperando uma url com uma url curta desconhecida', async () => {
//     const obj = await ShortenerService.get('teste-teste');
//     expect(obj.error).to.equal('URL não foi encontrada.');
//   });

//   it('Recuperando uma url com uma url curta valida', async () => {
//     const shortUrl = await ShortenerService.create({ url: 'http://www.google.com' });
//     const obj = await ShortenerService.get(shortUrl);
//     expect(obj.error).to.be.an('undefined');
//     expect(obj.body).to.equal('http://www.google.com');
//   });
// });
