"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExemplairePhysiqueModule = void 0;
const common_1 = require("@nestjs/common");
const exemplaire_physique_service_1 = require("./exemplaire-physique.service");
const exemplaire_physique_controller_1 = require("./exemplaire-physique.controller");
const prisma_service_1 = require("../prisma/prisma.service");
const ressources_service_1 = require("../ressources/ressources.service");
const JwtHelper_service_1 = require("../JwtHelper.service");
const jwt_1 = require("@nestjs/jwt");
let ExemplairePhysiqueModule = class ExemplairePhysiqueModule {
};
exports.ExemplairePhysiqueModule = ExemplairePhysiqueModule;
exports.ExemplairePhysiqueModule = ExemplairePhysiqueModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [exemplaire_physique_controller_1.ExemplairePhysiqueController],
        providers: [exemplaire_physique_service_1.ExemplairePhysiqueService, prisma_service_1.PrismaService, ressources_service_1.RessourcesService, JwtHelper_service_1.JwtHelperService, jwt_1.JwtService],
        exports: [exemplaire_physique_service_1.ExemplairePhysiqueService, JwtHelper_service_1.JwtHelperService],
    })
], ExemplairePhysiqueModule);
//# sourceMappingURL=exemplaire-physique.module.js.map