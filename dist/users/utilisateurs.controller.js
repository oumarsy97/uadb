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
exports.UtilisateursController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const utilisateurs_service_1 = require("./utilisateurs.service");
const create_utilisateur_dto_1 = require("./dto/create-utilisateur.dto");
let UtilisateursController = class UtilisateursController {
    utilisateursService;
    constructor(utilisateursService) {
        this.utilisateursService = utilisateursService;
    }
    async create(createUtilisateurDto) {
        return this.utilisateursService.create(createUtilisateurDto);
    }
    async findAll() {
        return this.utilisateursService.findAll();
    }
    async findOne(id) {
        return this.utilisateursService.findOne(id);
    }
    async findByEmail(email) {
        return this.utilisateursService.findByEmail(email);
    }
    async update(data) {
        return this.utilisateursService.update(data.id, data.updateData);
    }
    async remove(id) {
        return this.utilisateursService.remove(id);
    }
    async updateDerniereConnexion(data) {
        return this.utilisateursService.update(data.id, {
            derniereConnexion: new Date()
        });
    }
};
exports.UtilisateursController = UtilisateursController;
__decorate([
    (0, microservices_1.MessagePattern)('createUtilisateur'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_utilisateur_dto_1.CreateUtilisateurDto]),
    __metadata("design:returntype", Promise)
], UtilisateursController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('findAllUtilisateurs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UtilisateursController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('findUtilisateurById'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UtilisateursController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)('findUtilisateurByEmail'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UtilisateursController.prototype, "findByEmail", null);
__decorate([
    (0, microservices_1.MessagePattern)('updateUtilisateur'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UtilisateursController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)('removeUtilisateur'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UtilisateursController.prototype, "remove", null);
__decorate([
    (0, microservices_1.MessagePattern)('updateDerniereConnexion'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UtilisateursController.prototype, "updateDerniereConnexion", null);
exports.UtilisateursController = UtilisateursController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [utilisateurs_service_1.UtilisateursService])
], UtilisateursController);
//# sourceMappingURL=utilisateurs.controller.js.map