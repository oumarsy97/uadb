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
var FiliereController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiliereController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const filiere_service_1 = require("./filiere.service");
const create_filiere_dto_1 = require("./dto/create-filiere.dto");
let FiliereController = FiliereController_1 = class FiliereController {
    filiereService;
    logger = new common_1.Logger(FiliereController_1.name);
    constructor(filiereService) {
        this.filiereService = filiereService;
    }
    async create(createFiliereDto) {
        try {
            this.logger.log('Création d\'une nouvelle filière');
            const result = await this.filiereService.create(createFiliereDto);
            return {
                success: true,
                data: result,
                message: 'Filière créée avec succès',
            };
        }
        catch (error) {
            this.logger.error('Erreur lors de la création de la filière', error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors de la création de la filière',
            };
        }
    }
    async findAll(query) {
        try {
            this.logger.log('Récupération de toutes les filières');
            const result = await this.filiereService.findAll(query.departementId, query.skip, query.take);
            const total = await this.filiereService.count(query.departementId);
            return {
                success: true,
                data: result,
                meta: {
                    total,
                    skip: query.skip || 0,
                    take: query.take || 10,
                    departementId: query.departementId,
                },
                message: 'Filières récupérées avec succès',
            };
        }
        catch (error) {
            this.logger.error('Erreur lors de la récupération des filières', error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors de la récupération des filières',
            };
        }
    }
    async findOne(payload) {
        try {
            this.logger.log(`Récupération de la filière avec l'ID: ${payload.id}`);
            const result = await this.filiereService.findOne(payload.id);
            return {
                success: true,
                data: result,
                message: 'Filière récupérée avec succès',
            };
        }
        catch (error) {
            this.logger.error(`Erreur lors de la récupération de la filière ${payload.id}`, error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors de la récupération de la filière',
            };
        }
    }
    async findByDepartement(payload) {
        try {
            this.logger.log(`Récupération des filières du département: ${payload.departementId}`);
            const result = await this.filiereService.findByDepartement(payload.departementId);
            return {
                success: true,
                data: result,
                message: 'Filières récupérées avec succès',
            };
        }
        catch (error) {
            this.logger.error(`Erreur lors de la récupération des filières du département ${payload.departementId}`, error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors de la récupération des filières',
            };
        }
    }
    async findByNom(payload) {
        try {
            this.logger.log(`Récupération de la filière avec le nom: ${payload.nom}`);
            const result = await this.filiereService.findByNom(payload.nom);
            return {
                success: true,
                data: result,
                message: 'Filière récupérée avec succès',
            };
        }
        catch (error) {
            this.logger.error(`Erreur lors de la récupération de la filière ${payload.nom}`, error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors de la récupération de la filière',
            };
        }
    }
    async update(payload) {
        try {
            this.logger.log(`Mise à jour de la filière avec l'ID: ${payload.id}`);
            const result = await this.filiereService.update(payload.id, payload.updateFiliereDto);
            return {
                success: true,
                data: result,
                message: 'Filière mise à jour avec succès',
            };
        }
        catch (error) {
            this.logger.error(`Erreur lors de la mise à jour de la filière ${payload.id}`, error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors de la mise à jour de la filière',
            };
        }
    }
    async remove(payload) {
        try {
            this.logger.log(`Suppression de la filière avec l'ID: ${payload.id}`);
            const result = await this.filiereService.remove(payload.id);
            return {
                success: true,
                data: result,
                message: 'Filière supprimée avec succès',
            };
        }
        catch (error) {
            this.logger.error(`Erreur lors de la suppression de la filière ${payload.id}`, error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors de la suppression de la filière',
            };
        }
    }
    async search(payload) {
        try {
            this.logger.log(`Recherche de filières avec le terme: ${payload.searchTerm}`);
            const result = await this.filiereService.search(payload.searchTerm);
            return {
                success: true,
                data: result,
                message: 'Recherche effectuée avec succès',
            };
        }
        catch (error) {
            this.logger.error('Erreur lors de la recherche de filières', error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors de la recherche de filières',
            };
        }
    }
    async count(payload) {
        try {
            this.logger.log('Comptage des filières');
            const result = await this.filiereService.count(payload?.departementId);
            return {
                success: true,
                data: { count: result },
                message: 'Comptage effectué avec succès',
            };
        }
        catch (error) {
            this.logger.error('Erreur lors du comptage des filières', error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors du comptage des filières',
            };
        }
    }
};
exports.FiliereController = FiliereController;
__decorate([
    (0, microservices_1.MessagePattern)('filiere.create'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_filiere_dto_1.CreateFiliereDto]),
    __metadata("design:returntype", Promise)
], FiliereController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('filiere.findAll'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FiliereController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('filiere.findOne'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FiliereController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)('filiere.findByDepartement'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FiliereController.prototype, "findByDepartement", null);
__decorate([
    (0, microservices_1.MessagePattern)('filiere.findByNom'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FiliereController.prototype, "findByNom", null);
__decorate([
    (0, microservices_1.MessagePattern)('filiere.update'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FiliereController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)('filiere.remove'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FiliereController.prototype, "remove", null);
__decorate([
    (0, microservices_1.MessagePattern)('filiere.search'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FiliereController.prototype, "search", null);
__decorate([
    (0, microservices_1.MessagePattern)('filiere.count'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FiliereController.prototype, "count", null);
exports.FiliereController = FiliereController = FiliereController_1 = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [filiere_service_1.FiliereService])
], FiliereController);
//# sourceMappingURL=filiere.controller.js.map