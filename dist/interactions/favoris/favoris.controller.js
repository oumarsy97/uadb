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
exports.FavorisController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const favoris_service_1 = require("./favoris.service");
const JwtHelper_service_1 = require("../../JwtHelper.service");
let FavorisController = class FavorisController {
    favorisService;
    jwtHelperService;
    constructor(favorisService, jwtHelperService) {
        this.favorisService = favorisService;
        this.jwtHelperService = jwtHelperService;
    }
    create(data) {
        const { createFavorisDto, token } = data;
        const userId = this.jwtHelperService.extractUserIdFromToken(token);
        const favorisData = {
            ...createFavorisDto,
            userId,
        };
        return this.favorisService.create(favorisData);
    }
    findAll() {
        return this.favorisService.findAll();
    }
    findOne(id) {
        return this.favorisService.findOne(id);
    }
    update(data) {
        const { updateFavorisDto, token } = data;
        const userId = this.jwtHelperService.extractUserIdFromToken(token);
        return this.favorisService.update(updateFavorisDto.id, updateFavorisDto);
    }
    remove(data) {
        const { id, token } = data;
        const userId = this.jwtHelperService.extractUserIdFromToken(token);
        return this.favorisService.remove(id);
    }
    async mesFavoris(data) {
        const { token } = data;
        const userId = this.jwtHelperService.extractUserIdFromToken(token);
        return this.favorisService.findAllByUser(userId);
    }
    async isFavorite(data) {
        const { ressourceId, token } = data;
        const userId = this.jwtHelperService.extractUserIdFromToken(token);
        return this.favorisService.isFavorite(userId, ressourceId);
    }
    async removeAllMyFavoris(data) {
        const { token } = data;
        const userId = this.jwtHelperService.extractUserIdFromToken(token);
        return this.favorisService.removeAllByUser(userId);
    }
};
exports.FavorisController = FavorisController;
__decorate([
    (0, microservices_1.MessagePattern)('createFavoris'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FavorisController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('findAllFavoris'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FavorisController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('findOneFavoris'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FavorisController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)('updateFavoris'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FavorisController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)('removeFavoris'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FavorisController.prototype, "remove", null);
__decorate([
    (0, microservices_1.MessagePattern)('mesFavoris'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FavorisController.prototype, "mesFavoris", null);
__decorate([
    (0, microservices_1.MessagePattern)('isFavorite'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FavorisController.prototype, "isFavorite", null);
__decorate([
    (0, microservices_1.MessagePattern)('removeAllMyFavoris'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FavorisController.prototype, "removeAllMyFavoris", null);
exports.FavorisController = FavorisController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [favoris_service_1.FavorisService,
        JwtHelper_service_1.JwtHelperService])
], FavorisController);
//# sourceMappingURL=favoris.controller.js.map