"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BibliothecaireModule = void 0;
const common_1 = require("@nestjs/common");
const bibliothecaire_service_1 = require("./bibliothecaire.service");
const bibliothecaire_controller_1 = require("./bibliothecaire.controller");
const jwt_1 = require("@nestjs/jwt");
const email_service_1 = require("../meservices/mail/email.service");
const sms_service_1 = require("../meservices/sms/sms.service");
const utilisateurs_service_1 = require("../users/utilisateurs.service");
let BibliothecaireModule = class BibliothecaireModule {
};
exports.BibliothecaireModule = BibliothecaireModule;
exports.BibliothecaireModule = BibliothecaireModule = __decorate([
    (0, common_1.Module)({
        controllers: [bibliothecaire_controller_1.BibliothecaireController],
        providers: [bibliothecaire_service_1.BibliothecaireService, utilisateurs_service_1.UtilisateursService, jwt_1.JwtService, email_service_1.EmailService, sms_service_1.SmsService],
    })
], BibliothecaireModule);
//# sourceMappingURL=bibliothecaire.module.js.map