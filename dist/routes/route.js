"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const shortener_1 = __importDefault(require("../__docs__/shortener"));
const ShortenerController_1 = __importDefault(require("../controllers/ShortenerController"));
function route(app) {
    const options = { explorer: true };
    app.use('/docs', swagger_ui_express_1.default.serve);
    app.get('/docs', swagger_ui_express_1.default.setup(shortener_1.default, options));
    app.get('/:short_url', ShortenerController_1.default.get);
    app.post('/encurtador', ShortenerController_1.default.add);
}
exports.default = route;
;
//# sourceMappingURL=route.js.map