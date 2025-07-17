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
exports.ReglePretController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const regle_pret_service_1 = require("./regle-pret.service");
const create_regle_pret_dto_1 = require("./dto/create-regle-pret.dto");
const prisma_1 = require("../../generated/prisma/index.js");
let ReglePretController = class ReglePretController {
    reglePretService;
    constructor(reglePretService) {
        this.reglePretService = reglePretService;
    }
    async create(createReglePretDto) {
        return this.reglePretService.create(createReglePretDto);
    }
    async findAll(query) {
        return this.reglePretService.findAll(query?.page, query?.limit, query?.search);
    }
    async findOne(id) {
        return this.reglePretService.findOne(id);
    }
    async findByUniversiteId(universiteId) {
        return this.reglePretService.findByUniversiteId(universiteId);
    }
    async findByUniversiteAndRole(data) {
        const { universiteId, roleUtilisateur } = data;
        return this.reglePretService.findByUniversiteAndRole(universiteId, roleUtilisateur);
    }
    async update(data) {
        const { id, updateData } = data;
        return this.reglePretService.update(id, updateData);
    }
    async remove(id) {
        return this.reglePretService.remove(id);
    }
    async findActiveRegles() {
        return this.reglePretService.findActiveRegles();
    }
    async findInactiveRegles() {
        return this.reglePretService.findInactiveRegles();
    }
    async activateRegle(id) {
        return this.reglePretService.activate(id);
    }
    async deactivateRegle(id) {
        return this.reglePretService.deactivate(id);
    }
    async toggleStatus(id) {
        const regle = await this.reglePretService.findOne(id);
        if (!regle) {
            throw new Error('Règle de prêt non trouvée');
        }
        if (regle.estActif) {
            return this.reglePretService.deactivate(id);
        }
        else {
            return this.reglePretService.activate(id);
        }
    }
    async validateRegle(id) {
        const regle = await this.reglePretService.findOne(id);
        return {
            exists: !!regle,
            isActive: regle?.estActif || false,
            regle: regle
        };
    }
    async getRegleByRole(roleUtilisateur) {
        const activeRegles = await this.reglePretService.findActiveRegles();
        return activeRegles.filter(regle => regle.roleUtilisateur === roleUtilisateur);
    }
};
exports.ReglePretController = ReglePretController;
__decorate([
    (0, microservices_1.MessagePattern)('createReglePret'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_regle_pret_dto_1.CreateReglePretDto]),
    __metadata("design:returntype", Promise)
], ReglePretController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('findAllReglesPretet'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReglePretController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('findReglePretById'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReglePretController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)('findReglesPretetByUniversiteId'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReglePretController.prototype, "findByUniversiteId", null);
__decorate([
    (0, microservices_1.MessagePattern)('findReglePretByUniversiteAndRole'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReglePretController.prototype, "findByUniversiteAndRole", null);
__decorate([
    (0, microservices_1.MessagePattern)('updateReglePret'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReglePretController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)('removeReglePret'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReglePretController.prototype, "remove", null);
__decorate([
    (0, microservices_1.MessagePattern)('findActiveReglesPretet'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReglePretController.prototype, "findActiveRegles", null);
__decorate([
    (0, microservices_1.MessagePattern)('findInactiveReglesPretet'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReglePretController.prototype, "findInactiveRegles", null);
__decorate([
    (0, microservices_1.MessagePattern)('activateReglePret'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReglePretController.prototype, "activateRegle", null);
__decorate([
    (0, microservices_1.MessagePattern)('deactivateReglePret'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReglePretController.prototype, "deactivateRegle", null);
__decorate([
    (0, microservices_1.MessagePattern)('toggleReglePretStatus'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReglePretController.prototype, "toggleStatus", null);
__decorate([
    (0, microservices_1.MessagePattern)('validateReglePret'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReglePretController.prototype, "validateRegle", null);
__decorate([
    (0, microservices_1.MessagePattern)('getReglePretetByRole'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReglePretController.prototype, "getRegleByRole", null);
exports.ReglePretController = ReglePretController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [regle_pret_service_1.ReglePretService])
], ReglePretController);
//# sourceMappingURL=regle-pret.controller.js.map