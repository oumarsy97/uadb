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
exports.HistoriqueAccesController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const historique_acces_service_1 = require("./historique-acces.service");
const jwt_1 = require("@nestjs/jwt");
let HistoriqueAccesController = class HistoriqueAccesController {
    historiqueAccesService;
    jwtService;
    constructor(historiqueAccesService, jwtService) {
        this.historiqueAccesService = historiqueAccesService;
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
    async enregistrerAcces(data) {
        try {
            const { enregistrerAccesDto, token } = data;
            const userId = this.extractUserIdFromToken(token);
            console.log('Enregistrement d\'accès par utilisateur:', userId);
            console.log('Données d\'accès:', enregistrerAccesDto);
            const finalUserId = enregistrerAccesDto.userId || userId;
            return await this.historiqueAccesService.enregistrerAcces(finalUserId, enregistrerAccesDto.ressourceId, enregistrerAccesDto.typeacces, enregistrerAccesDto.universiteRess);
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async getHistoriqueUtilisateur(data) {
        try {
            const { historiqueDto, token } = data;
            const userId = this.extractUserIdFromToken(token);
            console.log('Consultation historique par utilisateur:', userId);
            const finalUserId = historiqueDto.userId || userId;
            const limit = historiqueDto.limit || 50;
            return await this.historiqueAccesService.getHistoriqueUtilisateur(finalUserId, limit);
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async getHistoriqueRessource(data) {
        try {
            const { historiqueRessourceDto, token } = data;
            if (token) {
                const userId = this.extractUserIdFromToken(token);
                console.log('Consultation historique ressource par utilisateur:', userId);
            }
            const { ressourceId, isExternal = false, limit = 50 } = historiqueRessourceDto;
            return await this.historiqueAccesService.getHistoriqueRessource(ressourceId, isExternal, limit);
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async compterAcces(data) {
        try {
            const { compterAccesDto, token } = data;
            if (token) {
                const userId = this.extractUserIdFromToken(token);
                console.log('Comptage accès par utilisateur:', userId);
            }
            const { ressourceId, isExternal = false, typeAcces } = compterAccesDto;
            return await this.historiqueAccesService.compterAcces(ressourceId, isExternal, typeAcces);
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async getStatistiquesUtilisateur(data) {
        try {
            const { userId, token } = data;
            const tokenUserId = this.extractUserIdFromToken(token);
            console.log('Consultation statistiques par utilisateur:', tokenUserId);
            const finalUserId = userId || tokenUserId;
            const historique = await this.historiqueAccesService.getHistoriqueUtilisateur(finalUserId, 1000);
            const stats = {
                totalAcces: historique.length,
                ressourcesInternes: historique.filter(h => h.ressourceId).length,
                ressourcesExternes: historique.filter(h => h.externRessourceId).length,
                typesAcces: historique.reduce((acc, h) => {
                    acc[h.typeAcces] = (acc[h.typeAcces] || 0) + 1;
                    return acc;
                }, {}),
                universites: historique.reduce((acc, h) => {
                    acc[h.universiteRess] = (acc[h.universiteRess] || 0) + 1;
                    return acc;
                }, {})
            };
            return stats;
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
exports.HistoriqueAccesController = HistoriqueAccesController;
__decorate([
    (0, microservices_1.MessagePattern)('enregistrerAcces'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HistoriqueAccesController.prototype, "enregistrerAcces", null);
__decorate([
    (0, microservices_1.MessagePattern)('getHistoriqueUtilisateur'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HistoriqueAccesController.prototype, "getHistoriqueUtilisateur", null);
__decorate([
    (0, microservices_1.MessagePattern)('getHistoriqueRessource'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HistoriqueAccesController.prototype, "getHistoriqueRessource", null);
__decorate([
    (0, microservices_1.MessagePattern)('compterAcces'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HistoriqueAccesController.prototype, "compterAcces", null);
__decorate([
    (0, microservices_1.MessagePattern)('getStatistiquesUtilisateur'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HistoriqueAccesController.prototype, "getStatistiquesUtilisateur", null);
exports.HistoriqueAccesController = HistoriqueAccesController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [historique_acces_service_1.HistoriqueAccesService,
        jwt_1.JwtService])
], HistoriqueAccesController);
//# sourceMappingURL=historique-acces.controller.js.map