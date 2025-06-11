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
var UfrController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UfrController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const ufr_service_1 = require("./ufr.service");
const create_ufr_dto_1 = require("./dto/create-ufr.dto");
let UfrController = UfrController_1 = class UfrController {
    ufrService;
    logger = new common_1.Logger(UfrController_1.name);
    constructor(ufrService) {
        this.ufrService = ufrService;
    }
    async create(createUfrDto) {
        try {
            this.logger.log('Création d\'une nouvelle UFR');
            const result = await this.ufrService.create(createUfrDto);
            return {
                success: true,
                data: result,
                message: 'UFR créée avec succès',
            };
        }
        catch (error) {
            this.logger.error('Erreur lors de la création de l\'UFR', error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors de la création de l\'UFR',
            };
        }
    }
    async findAll(query) {
        try {
            this.logger.log('Récupération de toutes les UFR');
            const page = Math.floor((query.skip || 0) / (query.take || 10)) + 1;
            const limit = query.take || 10;
            const result = await this.ufrService.findAll(page, limit);
            return {
                success: true,
                data: result.data,
                meta: {
                    total: result.total,
                    skip: query.skip || 0,
                    take: query.take || 10,
                },
                message: 'UFR récupérées avec succès',
            };
        }
        catch (error) {
            this.logger.error('Erreur lors de la récupération des UFR', error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors de la récupération des UFR',
            };
        }
    }
    async findOne(payload) {
        try {
            this.logger.log(`Récupération de l'UFR avec l'ID: ${payload.id}`);
            const result = await this.ufrService.findOne(payload.id);
            return {
                success: true,
                data: result,
                message: 'UFR récupérée avec succès',
            };
        }
        catch (error) {
            this.logger.error(`Erreur lors de la récupération de l'UFR ${payload.id}`, error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors de la récupération de l\'UFR',
            };
        }
    }
    async findByUniversite(payload) {
        try {
            this.logger.log(`Récupération des UFR de l'université: ${payload.universiteId}`);
            const result = await this.ufrService.findByUniversite(payload.universiteId);
            return {
                success: true,
                data: result,
                message: 'UFR de l\'université récupérées avec succès',
            };
        }
        catch (error) {
            this.logger.error(`Erreur lors de la récupération des UFR de l'université ${payload.universiteId}`, error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors de la récupération des UFR de l\'université',
            };
        }
    }
    async update(payload) {
        try {
            this.logger.log(`Mise à jour de l'UFR avec l'ID: ${payload.id}`);
            const result = await this.ufrService.update(payload.id, payload.updateUfrDto);
            return {
                success: true,
                data: result,
                message: 'UFR mise à jour avec succès',
            };
        }
        catch (error) {
            this.logger.error(`Erreur lors de la mise à jour de l'UFR ${payload.id}`, error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors de la mise à jour de l\'UFR',
            };
        }
    }
    async remove(payload) {
        try {
            this.logger.log(`Suppression de l'UFR avec l'ID: ${payload.id}`);
            const result = await this.ufrService.remove(payload.id);
            return {
                success: true,
                data: result,
                message: 'UFR supprimée avec succès',
            };
        }
        catch (error) {
            this.logger.error(`Erreur lors de la suppression de l'UFR ${payload.id}`, error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors de la suppression de l\'UFR',
            };
        }
    }
    async search(payload) {
        try {
            this.logger.log(`Recherche d'UFR avec le terme: ${payload.searchTerm}`);
            const result = await this.ufrService.search(payload.searchTerm);
            return {
                success: true,
                data: result,
                message: 'Recherche effectuée avec succès',
            };
        }
        catch (error) {
            this.logger.error('Erreur lors de la recherche d\'UFR', error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors de la recherche d\'UFR',
            };
        }
    }
    async count() {
        try {
            this.logger.log('Comptage des UFR');
            const stats = await this.ufrService.getStats();
            return {
                success: true,
                data: { count: stats.totalUfr },
                message: 'Comptage effectué avec succès',
            };
        }
        catch (error) {
            this.logger.error('Erreur lors du comptage des UFR', error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors du comptage des UFR',
            };
        }
    }
};
exports.UfrController = UfrController;
__decorate([
    (0, microservices_1.MessagePattern)('ufr.create'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ufr_dto_1.CreateUfrDto]),
    __metadata("design:returntype", Promise)
], UfrController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('ufr.findAll'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UfrController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('ufr.findOne'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UfrController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)('ufr.findByUniversite'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UfrController.prototype, "findByUniversite", null);
__decorate([
    (0, microservices_1.MessagePattern)('ufr.update'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UfrController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)('ufr.remove'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UfrController.prototype, "remove", null);
__decorate([
    (0, microservices_1.MessagePattern)('ufr.search'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UfrController.prototype, "search", null);
__decorate([
    (0, microservices_1.MessagePattern)('ufr.count'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UfrController.prototype, "count", null);
exports.UfrController = UfrController = UfrController_1 = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [ufr_service_1.UfrService])
], UfrController);
//# sourceMappingURL=ufr.controller.js.map