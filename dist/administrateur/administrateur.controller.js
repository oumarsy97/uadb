"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministrateurController = void 0;
const common_1 = require("@nestjs/common");
const administrateur_service_1 = require("./administrateur.service");
const create_utilisateur_dto_1 = require("../users/dto/create-utilisateur.dto");
const microservices_1 = require("@nestjs/microservices");
let AdministrateurController = class AdministrateurController {
    administrateurService;
    constructor(administrateurService) {
        this.administrateurService = administrateurService;
    }
    async createAdministrateur(createAdministrateurDto) {
        return this.administrateurService.create(createAdministrateurDto);
    }
    async findAll(options) {
        return this.administrateurService.findAll(options);
    }
    async findOne(id) {
        return this.administrateurService.findOne(id);
    }
    async update(data) {
        return this.administrateurService.update(data.id, data.updateData);
    }
    async remove(id) {
        return this.administrateurService.remove(id);
    }
};
exports.AdministrateurController = AdministrateurController;
__decorate([
    (0, microservices_1.MessagePattern)('createAdministrateur'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_utilisateur_dto_1.CreateUtilisateurDto]),
    __metadata("design:returntype", Promise)
], AdministrateurController.prototype, "createAdministrateur", null);
__decorate([
    (0, microservices_1.MessagePattern)('findAllAdministrateurs'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdministrateurController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('findAdministrateurById'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdministrateurController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)('updateAdministrateur'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdministrateurController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)('removeAdministrateur'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdministrateurController.prototype, "remove", null);
exports.AdministrateurController = AdministrateurController = __decorate([
    (0, common_1.Controller)('administrateur'),
    __metadata("design:paramtypes", [administrateur_service_1.AdministrateurService])
], AdministrateurController);
//# sourceMappingURL=administrateur.controller.js.map