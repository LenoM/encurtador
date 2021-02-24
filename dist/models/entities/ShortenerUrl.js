"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let ShortenerUrl = class ShortenerUrl {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn()
], ShortenerUrl.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', name: 'url', length: 60 })
], ShortenerUrl.prototype, "url", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', name: 'url_curta', length: 60 })
], ShortenerUrl.prototype, "shortUrl", void 0);
__decorate([
    typeorm_1.Column({ type: 'date', name: 'dt_validate' })
], ShortenerUrl.prototype, "expirationDate", void 0);
ShortenerUrl = __decorate([
    typeorm_1.Entity('url_encurtada')
], ShortenerUrl);
exports.default = ShortenerUrl;
//# sourceMappingURL=ShortenerUrl.js.map