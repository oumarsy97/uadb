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
var NotationsController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotationsController = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const microservices_1 = require("@nestjs/microservices");
const notations_service_1 = require("./notations.service");
let NotationsController = NotationsController_1 = class NotationsController {
    notationService;
    jwtService;
    logger = new common_1.Logger(NotationsController_1.name);
    constructor(notationService, jwtService) {
        this.notationService = notationService;
        this.jwtService = jwtService;
    }
    extractUserIdFromToken(token) {
        try {
            if (!token) {
                throw new Error('Token requis');
            }
            const cleanToken = token.replace(/^Bearer\s+/, '');
            const payload = this.jwtService.decode(cleanToken);
            if (!payload || (!payload.sub && !payload.id && !payload.userId)) {
                throw new Error('Token invalide: ID utilisateur non trouvé');
            }
            return payload.sub || payload.id || payload.userId;
        }
        catch (error) {
            this.logger.error(`Erreur lors de l'extraction de l'ID utilisateur: ${error.message}`);
            throw new common_1.BadRequestException(`Token invalide: ${error.message}`);
        }
    }
    async createNotation(data) {
        this.logger.log(`Création d'une notation pour la ressource ${data.ressourceId}`);
        console.log(`Données de notation reçues: ${JSON.stringify(data)}`);
        try {
            if (data.token) {
                const userId = this.extractUserIdFromToken(data.token);
                const result = await this.notationService.createNotation({
                    userId,
                    ressourceId: data.ressourceId,
                    note: data.note,
                    universite: data.universite,
                    universiteUser: data.universiteUser,
                });
                return result;
            }
            if (data.externUserId && data.universiteUser) {
                const result = await this.notationService.createNotation({
                    externUserId: data.externUserId,
                    universiteUser: data.universiteUser,
                    ressourceId: data.ressourceId,
                    note: data.note,
                    universite: data.universite
                });
                return result;
            }
            throw new common_1.BadRequestException('Token ou informations utilisateur externe requis');
        }
        catch (error) {
            this.logger.error(`Erreur lors de la création de la notation: ${error.message}`);
            throw error;
        }
    }
    async getNotationsByRessourceId(data) {
        this.logger.log(`Récupération des notations pour la ressource ${data.ressourceId}`);
        try {
            const result = await this.notationService.getNotationsByRessourceId(data.ressourceId, {
                page: data.page,
                limit: data.limit
            });
            return result;
        }
        catch (error) {
            this.logger.error(`Erreur lors de la récupération des notations: ${error.message}`);
            throw error;
        }
    }
    async getUserNotations(data) {
        this.logger.log(`Récupération des notations de l'utilisateur`);
        try {
            const userId = this.extractUserIdFromToken(data.token);
            const result = await this.notationService.getUserNotations(userId, {
                page: data.page || 1,
                limit: data.limit || 10
            });
            return result;
        }
        catch (error) {
            this.logger.error(`Erreur lors de la récupération des notations utilisateur: ${error.message}`);
            throw error;
        }
    }
    async findOneNotation(data) {
        this.logger.log(`Récupération de la notation ${data.id}`);
        try {
            const result = await this.notationService.findOneNotation(data.id);
            return result;
        }
        catch (error) {
            this.logger.error(`Erreur lors de la récupération de la notation: ${error.message}`);
            throw error;
        }
    }
    async updateNotation(data) {
        this.logger.log(`Mise à jour de la notation ${data.id}`);
        try {
            const userId = this.extractUserIdFromToken(data.token);
            const result = await this.notationService.updateNotation(data.id, {
                note: data.note,
                userId
            });
            return result;
        }
        catch (error) {
            this.logger.error(`Erreur lors de la mise à jour de la notation: ${error.message}`);
            throw error;
        }
    }
    async deleteNotation(data) {
        this.logger.log(`Suppression de la notation ${data.id}`);
        try {
            const userId = this.extractUserIdFromToken(data.token);
            const result = await this.notationService.deleteNotation(data.id, userId);
            return result;
        }
        catch (error) {
            this.logger.error(`Erreur lors de la suppression de la notation: ${error.message}`);
            throw error;
        }
    }
    async getNotationStats(data) {
        this.logger.log(`Récupération des statistiques pour la ressource ${data.ressourceId}`);
        try {
            const result = await this.notationService.getNotationStats(data.ressourceId);
            return result;
        }
        catch (error) {
            this.logger.error(`Erreur lors de la récupération des statistiques: ${error.message}`);
            throw error;
        }
    }
    async createExternalNotation(data) {
        this.logger.log(`Création d'une notation externe pour la ressource ${data.ressourceId}`);
        try {
            const result = await this.notationService.createNotation({
                externUserId: data.externUserId,
                universiteUser: data.universiteUser,
                ressourceId: data.ressourceId,
                note: data.note,
                universite: data.universite
            });
            return result;
        }
        catch (error) {
            this.logger.error(`Erreur lors de la création de la notation externe: ${error.message}`);
            throw error;
        }
    }
    async getNotationsByRessourcePaginated(data) {
        this.logger.log(`Récupération paginée des notations pour la ressource ${data.ressourceId} - Page ${data.page}`);
        try {
            const result = await this.notationService.getNotationsByRessourceId(data.ressourceId, {
                page: data.page,
                limit: data.limit
            });
            return result;
        }
        catch (error) {
            this.logger.error(`Erreur lors de la récupération paginée: ${error.message}`);
            throw error;
        }
    }
    validateNotationData(data) {
        if (!data.ressourceId) {
            throw new common_1.BadRequestException('ID de ressource requis');
        }
        if (!data.note || data.note < 1 || data.note > 5) {
            throw new common_1.BadRequestException('La note doit être comprise entre 1 et 5');
        }
    }
};
exports.NotationsController = NotationsController;
__decorate([
    (0, microservices_1.MessagePattern)('notation.create'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotationsController.prototype, "createNotation", null);
__decorate([
    (0, microservices_1.MessagePattern)('notation.getByRessourceId'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotationsController.prototype, "getNotationsByRessourceId", null);
__decorate([
    (0, microservices_1.MessagePattern)('notation.getUserNotations'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotationsController.prototype, "getUserNotations", null);
__decorate([
    (0, microservices_1.MessagePattern)('notation.findOne'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotationsController.prototype, "findOneNotation", null);
__decorate([
    (0, microservices_1.MessagePattern)('notation.update'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotationsController.prototype, "updateNotation", null);
__decorate([
    (0, microservices_1.MessagePattern)('notation.delete'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotationsController.prototype, "deleteNotation", null);
__decorate([
    (0, microservices_1.MessagePattern)('notation.getStats'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotationsController.prototype, "getNotationStats", null);
__decorate([
    (0, microservices_1.MessagePattern)('notation.createExternal'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotationsController.prototype, "createExternalNotation", null);
__decorate([
    (0, microservices_1.MessagePattern)('notation.getByRessource.paginated'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotationsController.prototype, "getNotationsByRessourcePaginated", null);
exports.NotationsController = NotationsController = NotationsController_1 = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [notations_service_1.NotationsService,
        jwt_1.JwtService])
], NotationsController);
//# sourceMappingURL=notations.controller.js.map