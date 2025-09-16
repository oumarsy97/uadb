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
exports.ExemplairePhysiqueController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const exemplaire_physique_service_1 = require("./exemplaire-physique.service");
const JwtHelper_service_1 = require("../JwtHelper.service");
let ExemplairePhysiqueController = class ExemplairePhysiqueController {
    exemplairePhysiqueService;
    jwtHelperService;
    constructor(exemplairePhysiqueService, jwtHelperService) {
        this.exemplairePhysiqueService = exemplairePhysiqueService;
        this.jwtHelperService = jwtHelperService;
    }
    async create(data) {
        try {
            const { createExemplairePhysiqueDto, token } = data;
            const userId = this.jwtHelperService.extractUserIdFromToken(token);
            console.log('Création d\'exemplaire physique par utilisateur:', userId);
            console.log('Données exemplaire physique:', createExemplairePhysiqueDto);
            return await this.exemplairePhysiqueService.create(createExemplairePhysiqueDto, userId);
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async findDisponibles(data) {
        try {
            const { options = {}, token } = data;
            if (token) {
                const userId = this.jwtHelperService.extractUserIdFromToken(token);
                console.log('Recherche d\'exemplaires physiques disponibles effectuée par utilisateur:', userId);
            }
            return await this.exemplairePhysiqueService.findDisponibles();
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
                const userId = this.jwtHelperService.extractUserIdFromToken(token);
                console.log('Recherche d\'exemplaires physiques effectuée par utilisateur:', userId);
            }
            return await this.exemplairePhysiqueService.findAll(options);
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
                const userId = this.jwtHelperService.extractUserIdFromToken(token);
                console.log('Consultation d\'exemplaire physique par utilisateur:', userId);
            }
            return await this.exemplairePhysiqueService.findOne(id);
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
            const userId = this.jwtHelperService.extractUserIdFromToken(token);
            console.log('Modification d\'exemplaire physique par utilisateur:', userId);
            return await this.exemplairePhysiqueService.update(id, updateData);
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
            const userId = this.jwtHelperService.extractUserIdFromToken(token);
            console.log('Suppression d\'exemplaire physique par utilisateur:', userId);
            return await this.exemplairePhysiqueService.remove(id);
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async findByRessource(data) {
        try {
            const { ressourceId, options, token } = data;
            if (token) {
                const userId = this.jwtHelperService.extractUserIdFromToken(token);
                console.log('Recherche d\'exemplaires physiques par ressource effectuée par:', userId);
            }
            return await this.exemplairePhysiqueService.findByRessource(ressourceId, options);
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async findByQRCode(data) {
        try {
            const { qrCode, token } = data;
            if (token) {
                const userId = this.jwtHelperService.extractUserIdFromToken(token);
                console.log('Recherche d\'exemplaire physique par QR Code effectuée par:', userId);
            }
            return await this.exemplairePhysiqueService.findByQRCode(qrCode);
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async updateDisponibilite(data) {
        try {
            const { id, quantite, token } = data;
            const userId = this.jwtHelperService.extractUserIdFromToken(token);
            console.log('Mise à jour de la disponibilité d\'exemplaire physique par utilisateur:', userId);
            return await this.exemplairePhysiqueService.updateDisponibilite(id, quantite);
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async isDisponible(data) {
        try {
            const { id, quantiteDemandee = 1, token } = data;
            if (token) {
                const userId = this.jwtHelperService.extractUserIdFromToken(token);
                console.log('Vérification de disponibilité d\'exemplaire physique par utilisateur:', userId);
            }
            const disponible = await this.exemplairePhysiqueService.isDisponible(id, quantiteDemandee);
            return { disponible };
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async getStatistiques(data) {
        try {
            const { ressourceId, token } = data;
            if (token) {
                const userId = this.jwtHelperService.extractUserIdFromToken(token);
                console.log('Consultation des statistiques d\'exemplaires physiques par utilisateur:', userId);
            }
            return await this.exemplairePhysiqueService.getStatistiques(ressourceId);
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async ajusterStock(data) {
        try {
            const { id, nouveauNombre, token } = data;
            const userId = this.jwtHelperService.extractUserIdFromToken(token);
            console.log('Ajustement du stock d\'exemplaire physique par utilisateur:', userId);
            return await this.exemplairePhysiqueService.ajusterStock(id, nouveauNombre);
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async toggleDisponibilite(data) {
        try {
            const { id, token } = data;
            const userId = this.jwtHelperService.extractUserIdFromToken(token);
            console.log('Toggle disponibilité d\'exemplaire physique par utilisateur:', userId);
            return await this.exemplairePhysiqueService.toggleDisponibilite(id);
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async findByLocalisation(data) {
        try {
            const { localisation, token } = data;
            if (token) {
                const userId = this.jwtHelperService.extractUserIdFromToken(token);
                console.log('Recherche d\'exemplaires physiques par localisation effectuée par:', userId);
            }
            return await this.exemplairePhysiqueService.findByLocalisation(localisation);
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async findByEtat(data) {
        try {
            const { etat, token } = data;
            if (token) {
                const userId = this.jwtHelperService.extractUserIdFromToken(token);
                console.log('Recherche d\'exemplaires physiques par état effectuée par:', userId);
            }
            return await this.exemplairePhysiqueService.findByEtat(etat);
        }
        catch (error) {
            return {
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async findByRessourceAndEtat(data) {
        try {
            const { ressourceId, etat, token } = data;
            if (token) {
                const userId = this.jwtHelperService.extractUserIdFromToken(token);
                console.log('Recherche d\'exemplaires physiques par ressource et état effectuée par:', userId);
            }
            return await this.exemplairePhysiqueService.findByRessourceAndEtat(ressourceId, etat);
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
exports.ExemplairePhysiqueController = ExemplairePhysiqueController;
__decorate([
    (0, microservices_1.MessagePattern)('createExemplairePhysique'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExemplairePhysiqueController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('findExemplairesPhysiquesDisponilbles'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExemplairePhysiqueController.prototype, "findDisponibles", null);
__decorate([
    (0, microservices_1.MessagePattern)('findAllExemplairesPhysiques'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExemplairePhysiqueController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('findExemplairePhysiqueById'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExemplairePhysiqueController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)('updateExemplairePhysique'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExemplairePhysiqueController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)('removeExemplairePhysique'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExemplairePhysiqueController.prototype, "remove", null);
__decorate([
    (0, microservices_1.MessagePattern)('findExemplairesPhysiquesByRessource'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExemplairePhysiqueController.prototype, "findByRessource", null);
__decorate([
    (0, microservices_1.MessagePattern)('findExemplairePhysiqueByQRCode'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExemplairePhysiqueController.prototype, "findByQRCode", null);
__decorate([
    (0, microservices_1.MessagePattern)('updateDisponibiliteExemplairePhysique'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExemplairePhysiqueController.prototype, "updateDisponibilite", null);
__decorate([
    (0, microservices_1.MessagePattern)('checkDisponibiliteExemplairePhysique'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExemplairePhysiqueController.prototype, "isDisponible", null);
__decorate([
    (0, microservices_1.MessagePattern)('getStatistiquesExemplairesPhysiques'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExemplairePhysiqueController.prototype, "getStatistiques", null);
__decorate([
    (0, microservices_1.MessagePattern)('ajusterStockExemplairePhysique'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExemplairePhysiqueController.prototype, "ajusterStock", null);
__decorate([
    (0, microservices_1.MessagePattern)('toggleDisponibiliteExemplairePhysique'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExemplairePhysiqueController.prototype, "toggleDisponibilite", null);
__decorate([
    (0, microservices_1.MessagePattern)('findExemplairesPhysiquesByLocalisation'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExemplairePhysiqueController.prototype, "findByLocalisation", null);
__decorate([
    (0, microservices_1.MessagePattern)('findExemplairesPhysiquesByEtat'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExemplairePhysiqueController.prototype, "findByEtat", null);
__decorate([
    (0, microservices_1.MessagePattern)('findExemplairesPhysiquesByRessourceAndEtat'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExemplairePhysiqueController.prototype, "findByRessourceAndEtat", null);
exports.ExemplairePhysiqueController = ExemplairePhysiqueController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [exemplaire_physique_service_1.ExemplairePhysiqueService,
        JwtHelper_service_1.JwtHelperService])
], ExemplairePhysiqueController);
//# sourceMappingURL=exemplaire-physique.controller.js.map