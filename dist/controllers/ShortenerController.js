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
const ShortenerService_1 = __importDefault(require("../services/ShortenerService"));
class ShortenerController {
    static add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body) {
                const result = yield ShortenerService_1.default.create(req.body);
                res.send(result);
            }
            else {
                res.status(404).send('params required');
            }
        });
    }
    static get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield ShortenerService_1.default.get(req.params.short_url);
            if (result.body) {
                res.redirect(result.body);
            }
            else {
                res
                    .status(404)
                    .send(result.error);
            }
        });
    }
}
exports.default = ShortenerController;
//# sourceMappingURL=ShortenerController.js.map