"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministrateurModule = void 0;
const common_1 = require("@nestjs/common");
const administrateur_service_1 = require("./administrateur.service");
const administrateur_controller_1 = require("./administrateur.controller");
const prisma_service_1 = require("../prisma/prisma.service");
const utilisateurs_service_1 = require("../users/utilisateurs.service");
const jwt_1 = require("@nestjs/jwt");
const email_service_1 = require("../meservices/mail/email.service");
const sms_service_1 = require("../meservices/sms/sms.service");
let AdministrateurModule = class AdministrateurModule {
};
exports.AdministrateurModule = AdministrateurModule;
exports.AdministrateurModule = AdministrateurModule = __decorate([
    (0, common_1.Module)({
        controllers: [administrateur_controller_1.AdministrateurController],
        providers: [administrateur_service_1.AdministrateurService, prisma_service_1.PrismaService, utilisateurs_service_1.UtilisateursService, jwt_1.JwtService, email_service_1.EmailService, sms_service_1.SmsService],
    })
], AdministrateurModule);
//# sourceMappingURL=administrateur.module.js.map