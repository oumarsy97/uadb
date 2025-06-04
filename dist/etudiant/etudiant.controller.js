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
exports.EtudiantController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const etudiant_service_1 = require("./etudiant.service");
const create_etudiant_dto_1 = require("./dto/create-etudiant.dto");
let EtudiantController = class EtudiantController {
    etudiantService;
    constructor(etudiantService) {
        this.etudiantService = etudiantService;
    }
    async create(createEtudiantDto) {
        try {
            console.log('Received createEtudiant request:', createEtudiantDto);
            return await this.etudiantService.create(createEtudiantDto);
        }
        catch (error) {
            return {
                success: false,
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async findAll(options) {
        try {
            return await this.etudiantService.findAll(options);
        }
        catch (error) {
            return {
                success: false,
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async findOne(id) {
        try {
            return await this.etudiantService.findOne(id);
        }
        catch (error) {
            return {
                success: false,
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async findByNumeroEtudiant(numeroEtudiant) {
        try {
            return await this.etudiantService.findByNumeroEtudiant(numeroEtudiant);
        }
        catch (error) {
            return {
                success: false,
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async findByUserId(userId) {
        try {
            return await this.etudiantService.findByUserId(userId);
        }
        catch (error) {
            return {
                success: false,
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async update(data) {
        try {
            return await this.etudiantService.update(data.id, data.updateData);
        }
        catch (error) {
            return {
                success: false,
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async remove(id) {
        try {
            return await this.etudiantService.remove(id);
        }
        catch (error) {
            return {
                success: false,
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
    async getStatistics() {
        try {
            const statistics = await this.etudiantService.getStatistics();
            return {
                success: true,
                data: statistics,
            };
        }
        catch (error) {
            return {
                success: false,
                error: true,
                message: error.message,
                statusCode: error.status || 500
            };
        }
    }
};
exports.EtudiantController = EtudiantController;
__decorate([
    (0, microservices_1.MessagePattern)('createEtudiant'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_etudiant_dto_1.CreateEtudiantDto]),
    __metadata("design:returntype", Promise)
], EtudiantController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('findAllEtudiants'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EtudiantController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('findEtudiantById'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EtudiantController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)('findEtudiantByNumero'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EtudiantController.prototype, "findByNumeroEtudiant", null);
__decorate([
    (0, microservices_1.MessagePattern)('findEtudiantByUserId'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EtudiantController.prototype, "findByUserId", null);
__decorate([
    (0, microservices_1.MessagePattern)('updateEtudiant'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EtudiantController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)('removeEtudiant'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EtudiantController.prototype, "remove", null);
__decorate([
    (0, microservices_1.MessagePattern)('getEtudiantStatistics'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EtudiantController.prototype, "getStatistics", null);
exports.EtudiantController = EtudiantController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [etudiant_service_1.EtudiantService])
], EtudiantController);
//# sourceMappingURL=etudiant.controller.js.map