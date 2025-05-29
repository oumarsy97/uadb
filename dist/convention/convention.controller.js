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
exports.ConventionController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const convention_service_1 = require("./convention.service");
const create_convention_dto_1 = require("./dto/create-convention.dto");
let ConventionController = class ConventionController {
    conventionService;
    constructor(conventionService) {
        this.conventionService = conventionService;
    }
    async create(createConventionDto) {
        return this.conventionService.create(createConventionDto);
    }
    async findAll(query) {
        return this.conventionService.findAll(query?.page, query?.limit, query?.search);
    }
    async findOne(id) {
        return this.conventionService.findOne(id);
    }
    async update(data) {
        const { id, updateData } = data;
        return this.conventionService.update(id, updateData);
    }
    async remove(id) {
        return this.conventionService.remove(id);
    }
    async findActiveConventions() {
        return this.conventionService.findActiveConventions();
    }
    async findInactiveConventions() {
        return this.conventionService.findInactiveConventions();
    }
    async activateConvention(id) {
        return this.conventionService.activateConvention(id);
    }
    async deactivateConvention(id) {
        return this.conventionService.deactivateConvention(id);
    }
    async findConventionsByUniversite(universiteId) {
        return this.conventionService.findConventionsByUniversite(universiteId);
    }
    async toggleStatus(id) {
        const convention = await this.conventionService.findOne(id);
        if (!convention) {
            throw new Error('Convention non trouvée');
        }
        if (convention.estActive) {
            return this.conventionService.deactivateConvention(id);
        }
        else {
            return this.conventionService.activateConvention(id);
        }
    }
};
exports.ConventionController = ConventionController;
__decorate([
    (0, microservices_1.MessagePattern)('createConvention'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_convention_dto_1.CreateConventionDto]),
    __metadata("design:returntype", Promise)
], ConventionController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('findAllConventions'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConventionController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('findConventionById'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConventionController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)('updateConvention'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConventionController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)('removeConvention'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConventionController.prototype, "remove", null);
__decorate([
    (0, microservices_1.MessagePattern)('findActiveConventions'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConventionController.prototype, "findActiveConventions", null);
__decorate([
    (0, microservices_1.MessagePattern)('findInactiveConventions'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConventionController.prototype, "findInactiveConventions", null);
__decorate([
    (0, microservices_1.MessagePattern)('activateConvention'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConventionController.prototype, "activateConvention", null);
__decorate([
    (0, microservices_1.MessagePattern)('deactivateConvention'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConventionController.prototype, "deactivateConvention", null);
__decorate([
    (0, microservices_1.MessagePattern)('findConventionsByUniversite'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConventionController.prototype, "findConventionsByUniversite", null);
__decorate([
    (0, microservices_1.MessagePattern)('toggleConventionStatus'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConventionController.prototype, "toggleStatus", null);
exports.ConventionController = ConventionController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [convention_service_1.ConventionService])
], ConventionController);
//# sourceMappingURL=convention.controller.js.map