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
var CategorieController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorieController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const categorie_service_1 = require("./categorie.service");
const create_categorie_dto_1 = require("./dto/create-categorie.dto");
let CategorieController = CategorieController_1 = class CategorieController {
    categorieService;
    logger = new common_1.Logger(CategorieController_1.name);
    constructor(categorieService) {
        this.categorieService = categorieService;
    }
    async create(createCategorieDto) {
        try {
            this.logger.log('Création d\'une nouvelle catégorie');
            const result = await this.categorieService.create(createCategorieDto);
            return {
                success: true,
                data: result,
                message: 'Catégorie créée avec succès',
            };
        }
        catch (error) {
            this.logger.error('Erreur lors de la création de la catégorie', error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors de la création de la catégorie',
            };
        }
    }
    async findAll(query) {
        try {
            this.logger.log('Récupération de toutes les catégories');
            const result = await this.categorieService.findAll(query.skip, query.take);
            const total = await this.categorieService.count();
            return {
                success: true,
                data: result,
                meta: {
                    total,
                    skip: query.skip || 0,
                    take: query.take || 10,
                },
                message: 'Catégories récupérées avec succès',
            };
        }
        catch (error) {
            this.logger.error('Erreur lors de la récupération des catégories', error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors de la récupération des catégories',
            };
        }
    }
    async findOne(payload) {
        try {
            this.logger.log(`Récupération de la catégorie avec l'ID: ${payload.id}`);
            const result = await this.categorieService.findOne(payload.id);
            return {
                success: true,
                data: result,
                message: 'Catégorie récupérée avec succès',
            };
        }
        catch (error) {
            this.logger.error(`Erreur lors de la récupération de la catégorie ${payload.id}`, error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors de la récupération de la catégorie',
            };
        }
    }
    async findByLibelle(payload) {
        try {
            this.logger.log(`Récupération de la catégorie avec le libellé: ${payload.libelle}`);
            const result = await this.categorieService.findByLibelle(payload.libelle);
            return {
                success: true,
                data: result,
                message: 'Catégorie récupérée avec succès',
            };
        }
        catch (error) {
            this.logger.error(`Erreur lors de la récupération de la catégorie ${payload.libelle}`, error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors de la récupération de la catégorie',
            };
        }
    }
    async update(payload) {
        try {
            this.logger.log(`Mise à jour de la catégorie avec l'ID: ${payload.id}`);
            const result = await this.categorieService.update(payload.id, payload.updateCategorieDto);
            return {
                success: true,
                data: result,
                message: 'Catégorie mise à jour avec succès',
            };
        }
        catch (error) {
            this.logger.error(`Erreur lors de la mise à jour de la catégorie ${payload.id}`, error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors de la mise à jour de la catégorie',
            };
        }
    }
    async remove(payload) {
        try {
            this.logger.log(`Suppression de la catégorie avec l'ID: ${payload.id}`);
            const result = await this.categorieService.remove(payload.id);
            return {
                success: true,
                data: result,
                message: 'Catégorie supprimée avec succès',
            };
        }
        catch (error) {
            this.logger.error(`Erreur lors de la suppression de la catégorie ${payload.id}`, error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors de la suppression de la catégorie',
            };
        }
    }
    async search(payload) {
        try {
            this.logger.log(`Recherche de catégories avec le terme: ${payload.searchTerm}`);
            const result = await this.categorieService.search(payload.searchTerm);
            return {
                success: true,
                data: result,
                message: 'Recherche effectuée avec succès',
            };
        }
        catch (error) {
            this.logger.error('Erreur lors de la recherche de catégories', error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors de la recherche de catégories',
            };
        }
    }
    async count() {
        try {
            this.logger.log('Comptage des catégories');
            const result = await this.categorieService.count();
            return {
                success: true,
                data: { count: result },
                message: 'Comptage effectué avec succès',
            };
        }
        catch (error) {
            this.logger.error('Erreur lors du comptage des catégories', error.stack);
            return {
                success: false,
                error: error.message,
                message: 'Erreur lors du comptage des catégories',
            };
        }
    }
};
exports.CategorieController = CategorieController;
__decorate([
    (0, microservices_1.MessagePattern)('categorie.create'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_categorie_dto_1.CreateCategorieDto]),
    __metadata("design:returntype", Promise)
], CategorieController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('categorie.findAll'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategorieController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('categorie.findOne'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategorieController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)('categorie.findByLibelle'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategorieController.prototype, "findByLibelle", null);
__decorate([
    (0, microservices_1.MessagePattern)('categorie.update'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategorieController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)('categorie.remove'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategorieController.prototype, "remove", null);
__decorate([
    (0, microservices_1.MessagePattern)('categorie.search'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategorieController.prototype, "search", null);
__decorate([
    (0, microservices_1.MessagePattern)('categorie.count'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategorieController.prototype, "count", null);
exports.CategorieController = CategorieController = CategorieController_1 = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [categorie_service_1.CategorieService])
], CategorieController);
//# sourceMappingURL=categorie.controller.js.map