"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
const typeorm_1 = require("typeorm");
const ShortenerUrl_1 = __importDefault(require("../models/entities/ShortenerUrl"));
class ShortenerService {
    get(shortUrls) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = typeorm_1.getRepository(ShortenerUrl_1.default);
            if (shortUrls) {
                const shortner = yield repository.findOne({
                    shortUrl: shortUrls,
                    expirationDate: typeorm_1.LessThan(new Date()),
                });
                if (shortner.url !== undefined) {
                    return { body: shortner.url };
                }
                return { error: 'URL não foi encontrada.' };
            }
            return { error: 'Informe a URL.' };
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (data) {
                if (data.url) {
                    const { url } = data;
                    if (validator_1.default.isURL(url)) {
                        const obj = new ShortenerUrl_1.default();
                        const date = new Date();
                        obj.url = url;
                        obj.shortUrl = yield ShortenerService.generateShortUrl();
                        obj.expirationDate = new Date(date.getFullYear() + 1, date.getMonth(), 1);
                        const repository = typeorm_1.getRepository(ShortenerUrl_1.default);
                        const shortner = yield repository.save(obj);
                        return { newUrl: `${process.env.BASE_URL}:${process.env.PORT}/${shortner.shortUrl}` };
                    }
                    return { error: 'A url informada não é valida. Por favor, verifique e tente novamente.' };
                }
                return { error: 'Por favor, informe uma URL.' };
            }
            return { error: 'Os parametros não foram preenchidos corretamente. Por favor, informe uma URL.' };
        });
    }
    static generateShortUrl() {
        return __awaiter(this, void 0, void 0, function* () {
            let shortUrl = '';
            const urlLength = Math.floor(Math.random() * (10 - 5)) + 5;
            const allowedCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';
            while (shortUrl.length < urlLength) {
                shortUrl += allowedCharacters[Math.floor(Math.random() * (35 - 0)) + 0];
            }
            return shortUrl;
        });
    }
}
exports.default = new ShortenerService();
//# sourceMappingURL=ShortenerService.js.map