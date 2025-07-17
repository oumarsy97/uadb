"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolitiqueBibliothequeModule = void 0;
const common_1 = require("@nestjs/common");
const politique_bibliotheque_service_1 = require("./politique-bibliotheque.service");
const politique_bibliotheque_controller_1 = require("./politique-bibliotheque.controller");
const prisma_service_1 = require("../prisma/prisma.service");
let PolitiqueBibliothequeModule = class PolitiqueBibliothequeModule {
};
exports.PolitiqueBibliothequeModule = PolitiqueBibliothequeModule;
exports.PolitiqueBibliothequeModule = PolitiqueBibliothequeModule = __decorate([
    (0, common_1.Module)({
        controllers: [politique_bibliotheque_controller_1.PolitiqueBibliothequeController],
        providers: [politique_bibliotheque_service_1.PolitiqueBibliothequeService, prisma_service_1.PrismaService],
    })
], PolitiqueBibliothequeModule);
//# sourceMappingURL=politique-bibliotheque.module.js.map