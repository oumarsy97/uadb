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
var DepartementController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartementController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const departement_service_1 = require("./departement.service");
const create_departement_dto_1 = require("./dto/create-departement.dto");
let DepartementController = DepartementController_1 = class DepartementController {
    departementService;
    logger = new common_1.Logger(DepartementController_1.name);
    constructor(departementService) {
        this.departementService = departementService;
    }
    async create(createDepartementDto) {
        try {
            this.logger.log('Création d\'un nouveau département');
            const result = await this.departementService.create(createDepartementDto);
            return {
                success: true,
                data: result,
                message: 'Département créé avec succès',
            };
        }
        catch (error) {
            this.logger.error('Erreur lors de la création du département', error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors de la création du département',
            };
        }
    }
    async findAll(query) {
        try {
            this.logger.log('Récupération de tous les départements');
            const result = await this.departementService.findAll(query.ufrId);
            const total = await this.departementService.count(query.ufrId);
            return {
                success: true,
                data: result,
                meta: {
                    total,
                    skip: query.skip || 0,
                    take: query.take || 10,
                    ufrId: query.ufrId,
                },
                message: 'Départements récupérés avec succès',
            };
        }
        catch (error) {
            this.logger.error('Erreur lors de la récupération des départements', error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors de la récupération des départements',
            };
        }
    }
    async findOne(payload) {
        try {
            this.logger.log(`Récupération du département avec l'ID: ${payload.id}`);
            const result = await this.departementService.findOne(payload.id);
            return {
                success: true,
                data: result,
                message: 'Département récupéré avec succès',
            };
        }
        catch (error) {
            this.logger.error(`Erreur lors de la récupération du département ${payload.id}`, error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors de la récupération du département',
            };
        }
    }
    async findByUfr(payload) {
        try {
            this.logger.log(`Récupération des départements de l'UFR: ${payload.ufrId}`);
            const result = await this.departementService.findByUfr(payload.ufrId);
            return {
                success: true,
                data: result,
                message: 'Départements récupérés avec succès',
            };
        }
        catch (error) {
            this.logger.error(`Erreur lors de la récupération des départements de l'UFR ${payload.ufrId}`, error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors de la récupération des départements',
            };
        }
    }
    async findByNom(payload) {
        try {
            this.logger.log(`Récupération du département avec le nom: ${payload.nom}`);
            const result = await this.departementService.findByNom(payload.nom);
            return {
                success: true,
                data: result,
                message: 'Département récupéré avec succès',
            };
        }
        catch (error) {
            this.logger.error(`Erreur lors de la récupération du département ${payload.nom}`, error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors de la récupération du département',
            };
        }
    }
    async update(payload) {
        try {
            this.logger.log(`Mise à jour du département avec l'ID: ${payload.id}`);
            const result = await this.departementService.update(payload.id, payload.updateDepartementDto);
            return {
                success: true,
                data: result,
                message: 'Département mis à jour avec succès',
            };
        }
        catch (error) {
            this.logger.error(`Erreur lors de la mise à jour du département ${payload.id}`, error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors de la mise à jour du département',
            };
        }
    }
    async remove(payload) {
        try {
            this.logger.log(`Suppression du département avec l'ID: ${payload.id}`);
            const result = await this.departementService.remove(payload.id);
            return {
                success: true,
                data: result,
                message: 'Département supprimé avec succès',
            };
        }
        catch (error) {
            this.logger.error(`Erreur lors de la suppression du département ${payload.id}`, error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors de la suppression du département',
            };
        }
    }
    async search(payload) {
        try {
            this.logger.log(`Recherche de départements avec le terme: ${payload.searchTerm}`);
            const result = await this.departementService.search(payload.searchTerm);
            return {
                success: true,
                data: result,
                message: 'Recherche effectuée avec succès',
            };
        }
        catch (error) {
            this.logger.error('Erreur lors de la recherche de départements', error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors de la recherche de départements',
            };
        }
    }
    async count(payload) {
        try {
            this.logger.log('Comptage des départements');
            const result = await this.departementService.count(payload?.ufrId);
            return {
                success: true,
                data: { count: result },
                message: 'Comptage effectué avec succès',
            };
        }
        catch (error) {
            this.logger.error('Erreur lors du comptage des départements', error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors du comptage des départements',
            };
        }
    }
};
exports.DepartementController = DepartementController;
__decorate([
    (0, microservices_1.MessagePattern)('departement.create'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_departement_dto_1.CreateDepartementDto]),
    __metadata("design:returntype", Promise)
], DepartementController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('departement.findAll'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DepartementController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('departement.findOne'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DepartementController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)('departement.findByUfr'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DepartementController.prototype, "findByUfr", null);
__decorate([
    (0, microservices_1.MessagePattern)('departement.findByNom'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DepartementController.prototype, "findByNom", null);
__decorate([
    (0, microservices_1.MessagePattern)('departement.update'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DepartementController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)('departement.remove'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DepartementController.prototype, "remove", null);
__decorate([
    (0, microservices_1.MessagePattern)('departement.search'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DepartementController.prototype, "search", null);
__decorate([
    (0, microservices_1.MessagePattern)('departement.count'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DepartementController.prototype, "count", null);
exports.DepartementController = DepartementController = DepartementController_1 = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [departement_service_1.DepartementService])
], DepartementController);
//# sourceMappingURL=departement.controller.js.map