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
exports.RessourcesController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const ressources_service_1 = require("./ressources.service");
const create_ressource_dto_1 = require("./dto/create-ressource.dto");
let RessourcesController = class RessourcesController {
    ressourcesService;
    constructor(ressourcesService) {
        this.ressourcesService = ressourcesService;
    }
    async create(createRessourceDto) {
        try {
            console.log('ressource', createRessourceDto);
            return await this.ressourcesService.create(createRessourceDto);
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async findAll(options = {}) {
        try {
            return await this.ressourcesService.findAll(options);
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async findOne(id) {
        try {
            return await this.ressourcesService.findOne(id);
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async update(data) {
        try {
            return await this.ressourcesService.update(data.id, data.updateData);
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async remove(id) {
        try {
            return await this.ressourcesService.remove(id);
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async findByAuteur(data) {
        try {
            return await this.ressourcesService.findByAuteur(data.auteurId, data.options);
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async findByUniversite(data) {
        try {
            return await this.ressourcesService.findByUniversite(data.universiteId, data.options);
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async toggleValidation(id) {
        try {
            return await this.ressourcesService.toggleValidation(id);
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async toggleArchivage(id) {
        try {
            return await this.ressourcesService.toggleArchivage(id);
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async enregistrerAcces(data) {
        try {
            return await this.ressourcesService.enregistrerAcces(data);
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
};
exports.RessourcesController = RessourcesController;
__decorate([
    (0, microservices_1.MessagePattern)('createRessource'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ressource_dto_1.CreateRessourceDto]),
    __metadata("design:returntype", Promise)
], RessourcesController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('findAllRessources'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ressource_dto_1.SearchRessourceDto]),
    __metadata("design:returntype", Promise)
], RessourcesController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('findRessourceById'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RessourcesController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)('updateRessource'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RessourcesController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)('removeRessource'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RessourcesController.prototype, "remove", null);
__decorate([
    (0, microservices_1.MessagePattern)('findRessourcesByAuteur'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RessourcesController.prototype, "findByAuteur", null);
__decorate([
    (0, microservices_1.MessagePattern)('findRessourcesByUniversite'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RessourcesController.prototype, "findByUniversite", null);
__decorate([
    (0, microservices_1.MessagePattern)('toggleValidationRessource'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RessourcesController.prototype, "toggleValidation", null);
__decorate([
    (0, microservices_1.MessagePattern)('toggleArchivageRessource'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RessourcesController.prototype, "toggleArchivage", null);
__decorate([
    (0, microservices_1.MessagePattern)('enregistrerAccesRessource'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RessourcesController.prototype, "enregistrerAcces", null);
exports.RessourcesController = RessourcesController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [ressources_service_1.RessourcesService])
], RessourcesController);
//# sourceMappingURL=ressources.controller.js.map