"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./routes/route"));
const connection_1 = __importDefault(require("./config/connection"));
connection_1.default.create('default').then(() => {
    const app = express_1.default();
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use(express_1.default.json());
    app.use(cors_1.default());
    route_1.default(app);
    app.listen(process.env.PORT || 3000, () => {
        console.info(`Listening on port: ${process.env.PORT}`);
    });
});
//# sourceMappingURL=app.js.map