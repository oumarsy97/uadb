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
exports.UniversiteController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const universite_service_1 = require("./universite.service");
const universite_dto_1 = require("../universite/dto/universite.dto");
let UniversiteController = class UniversiteController {
    universiteService;
    constructor(universiteService) {
        this.universiteService = universiteService;
    }
    async create(createUniversiteDto) {
        return this.universiteService.create(createUniversiteDto);
    }
    async findAll(query) {
        const { page, limit, search } = query;
        return this.universiteService.findAll(page, limit, search);
    }
    async findOne(id) {
        return this.universiteService.findOne(id);
    }
    async update(data) {
        const { id, updateData } = data;
        return this.universiteService.update(id, updateData);
    }
    async remove(id) {
        return this.universiteService.remove(id);
    }
    async getStatistics(id) {
        return this.universiteService.getStatistics(id);
    }
    async toggleStatus(id) {
        return this.universiteService.toggleStatus(id);
    }
    async getTopUniversites(limit) {
        return this.universiteService.getTopUniversities(limit);
    }
};
exports.UniversiteController = UniversiteController;
__decorate([
    (0, microservices_1.MessagePattern)('createUniversite'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [universite_dto_1.CreateUniversiteDto]),
    __metadata("design:returntype", Promise)
], UniversiteController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('findAllUniversites'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UniversiteController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('findUniversiteById'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UniversiteController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)('updateUniversite'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UniversiteController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)('removeUniversite'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UniversiteController.prototype, "remove", null);
__decorate([
    (0, microservices_1.MessagePattern)('getUniversiteStatistics'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UniversiteController.prototype, "getStatistics", null);
__decorate([
    (0, microservices_1.MessagePattern)('toggleUniversiteStatus'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UniversiteController.prototype, "toggleStatus", null);
__decorate([
    (0, microservices_1.MessagePattern)('getTopUniversitesByResources'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UniversiteController.prototype, "getTopUniversites", null);
exports.UniversiteController = UniversiteController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [universite_service_1.UniversiteService])
], UniversiteController);
//# sourceMappingURL=universite.controller.js.map