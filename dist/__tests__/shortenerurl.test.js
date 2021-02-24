"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../config/connection"));
const ShortenerService_1 = __importDefault(require("../services/ShortenerService"));
const ShortenerUrl_1 = __importDefault(require("../models/entities/ShortenerUrl"));
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    const conn = yield connection_1.default.create('default');
}));
describe('Testando Encurtador', () => {
    test('Criando uma url curta sem dados validos', () => __awaiter(void 0, void 0, void 0, function* () {
        const obj = yield ShortenerService_1.default.create(undefined);
        expect(obj.error).toBe('Os parametros não foram preenchidos corretamente. Por favor, informe uma URL.');
    }));
    test('Criando uma url curta sem informar a url', () => __awaiter(void 0, void 0, void 0, function* () {
        let shortener = new ShortenerUrl_1.default();
        const obj = yield ShortenerService_1.default.create(shortener);
        expect(obj.error).toBe('Por favor, informe uma URL.');
    }));
    test('Criando uma url curta sem uma url valida', () => __awaiter(void 0, void 0, void 0, function* () {
        let shortener = new ShortenerUrl_1.default();
        shortener.url = 'teste';
        const obj = yield ShortenerService_1.default.create(shortener);
        expect(obj.error).toBe('A url informada não é valida. Por favor, verifique e tente novamente.');
    }));
    test('Criando uma url curta a partir de uma url valida', () => __awaiter(void 0, void 0, void 0, function* () {
        let shortener = new ShortenerUrl_1.default();
        shortener.url = 'http://www.google.com';
        const obj = yield ShortenerService_1.default.create(shortener);
        expect(obj.error).toBe(undefined);
        expect(obj.newUrl).toMatch(`${process.env.BASE_URL}:${process.env.PORT}/`);
    }));
    test('Recuperando uma url com uma url curta null', () => __awaiter(void 0, void 0, void 0, function* () {
        const obj = yield ShortenerService_1.default.get(null);
        expect(obj.error).toBe('Informe a URL.');
    }));
    test('Recuperando uma url com uma url curta indefinida', () => __awaiter(void 0, void 0, void 0, function* () {
        const obj = yield ShortenerService_1.default.get(undefined);
        expect(obj.error).toBe('Informe a URL.');
    }));
    test('Recuperando uma url com uma url curta desconhecida', () => __awaiter(void 0, void 0, void 0, function* () {
        const obj = yield ShortenerService_1.default.get('teste-teste');
        expect(obj.error).toBe('URL não foi encontrada.');
    }));
    test('Recuperando uma url com uma url curta valida', () => __awaiter(void 0, void 0, void 0, function* () {
        let shortener = new ShortenerUrl_1.default();
        shortener.url = 'http://www.google.com';
        const short = yield ShortenerService_1.default.create(shortener);
        const shortUrl = short.newUrl.replace(`${process.env.BASE_URL}:${process.env.PORT}/`, '');
        const obj = yield ShortenerService_1.default.get(shortUrl);
        expect(obj.body).toBe('http://www.google.com');
        expect(obj.error).toBe(undefined);
    }));
});
//# sourceMappingURL=shortenerurl.test.js.map