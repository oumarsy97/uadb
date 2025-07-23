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
const jwt_1 = require("@nestjs/jwt");
let RessourcesController = class RessourcesController {
    ressourcesService;
    jwtService;
    constructor(ressourcesService, jwtService) {
        this.ressourcesService = ressourcesService;
        this.jwtService = jwtService;
    }
    extractUserIdFromToken(token) {
        try {
            const cleanToken = token.replace(/^Bearer\s+/, '');
            const payload = this.jwtService.decode(cleanToken);
            if (!payload || !payload.sub && !payload.id && !payload.userId) {
                throw new Error('Token invalide: ID utilisateur non trouvé');
            }
            return payload.sub || payload.id || payload.userId;
        }
        catch (error) {
            throw new Error(`Erreur lors de l'extraction de l'ID utilisateur: ${error.message}`);
        }
    }
    async create(data) {
        try {
            const { createRessourceDto, token } = data;
            const userId = this.extractUserIdFromToken(token);
            console.log('ID Utilisateur:', userId);
            console.log('Données ressource:', createRessourceDto);
            const enrichedDto = {
                ...createRessourceDto,
                auteurId: userId,
            };
            return await this.ressourcesService.create(enrichedDto);
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async findAll(data) {
        try {
            const { options = {}, token } = data;
            if (token) {
                const userId = this.extractUserIdFromToken(token);
                console.log('Recherche effectuée par utilisateur:', userId);
            }
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
    async findOne(data) {
        try {
            const { id, token } = data;
            if (token) {
                const userId = this.extractUserIdFromToken(token);
                console.log('Consultation par utilisateur:', userId);
            }
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
            const { id, updateData, token } = data;
            const userId = this.extractUserIdFromToken(token);
            console.log('Modification par utilisateur:', userId);
            return await this.ressourcesService.update(id, updateData);
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async remove(data) {
        try {
            const { id, token } = data;
            const userId = this.extractUserIdFromToken(token);
            console.log('Suppression par utilisateur:', userId);
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
            const { auteurId, options, token } = data;
            if (token) {
                const userId = this.extractUserIdFromToken(token);
                console.log('Recherche par auteur effectuée par:', userId);
            }
            return await this.ressourcesService.findByAuteur(auteurId, options);
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
            const { universiteId, options, token } = data;
            if (token) {
                const userId = this.extractUserIdFromToken(token);
                console.log('Recherche par université effectuée par:', userId);
            }
            return await this.ressourcesService.findByUniversite(universiteId, options);
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async toggleArchivage(data) {
        try {
            const { id, token } = data;
            const userId = this.extractUserIdFromToken(token);
            console.log('Toggle archivage par utilisateur:', userId);
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
    async findTopRatedRessources(options) {
        return await this.ressourcesService.findTopRated(options);
    }
    async findTopAccessedRessources(options) {
        return await this.ressourcesService.findTopAccessed(options);
    }
    async incrementRessourceViews(data) {
        try {
            const { id, token } = data;
            if (token) {
                const userId = this.extractUserIdFromToken(token);
                console.log('Incrémentation de vues par utilisateur:', userId);
            }
            return await this.ressourcesService.incrementVue(id);
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async incrementRessourceDownloads(data) {
        try {
            const { id, token } = data;
            if (token) {
                const userId = this.extractUserIdFromToken(token);
            }
            return await this.ressourcesService.incrementTelechargement(id);
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
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RessourcesController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('findAllRessources'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RessourcesController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('findRessourceById'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
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
    __metadata("design:paramtypes", [Object]),
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
    (0, microservices_1.MessagePattern)('toggleArchivageRessource'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RessourcesController.prototype, "toggleArchivage", null);
__decorate([
    (0, microservices_1.MessagePattern)('findTopRatedRessources'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ressource_dto_1.SearchRessourceDto]),
    __metadata("design:returntype", Promise)
], RessourcesController.prototype, "findTopRatedRessources", null);
__decorate([
    (0, microservices_1.MessagePattern)('findTopAccessedRessources'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ressource_dto_1.SearchRessourceDto]),
    __metadata("design:returntype", Promise)
], RessourcesController.prototype, "findTopAccessedRessources", null);
__decorate([
    (0, microservices_1.MessagePattern)('incrementRessourceViews'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RessourcesController.prototype, "incrementRessourceViews", null);
__decorate([
    (0, microservices_1.MessagePattern)('incrementRessourceDownloads'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RessourcesController.prototype, "incrementRessourceDownloads", null);
exports.RessourcesController = RessourcesController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [ressources_service_1.RessourcesService,
        jwt_1.JwtService])
], RessourcesController);
//# sourceMappingURL=ressources.controller.js.map