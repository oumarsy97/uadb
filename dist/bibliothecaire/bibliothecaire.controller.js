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
exports.BibliothecaireController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const bibliothecaire_service_1 = require("./bibliothecaire.service");
const create_bibliothecaire_dto_1 = require("./dto/create-bibliothecaire.dto");
const update_bibliothecaire_dto_1 = require("./dto/update-bibliothecaire.dto");
let BibliothecaireController = class BibliothecaireController {
    bibliothecaireService;
    constructor(bibliothecaireService) {
        this.bibliothecaireService = bibliothecaireService;
    }
    create(createBibliothecaireDto) {
        return this.bibliothecaireService.create(createBibliothecaireDto);
    }
    findAll(options = {}) {
        return this.bibliothecaireService.findAll(options);
    }
    findOne(id) {
        return this.bibliothecaireService.findOne(id);
    }
    update(updateBibliothecaireDto) {
        return this.bibliothecaireService.update(updateBibliothecaireDto.id, updateBibliothecaireDto);
    }
    remove(id) {
        return this.bibliothecaireService.remove(id);
    }
};
exports.BibliothecaireController = BibliothecaireController;
__decorate([
    (0, microservices_1.MessagePattern)('createBibliothecaire'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bibliothecaire_dto_1.CreateBibliothecaireDto]),
    __metadata("design:returntype", void 0)
], BibliothecaireController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('findAllBibliothecaire'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BibliothecaireController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('findOneBibliothecaire'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BibliothecaireController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)('updateBibliothecaire'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_bibliothecaire_dto_1.UpdateBibliothecaireDto]),
    __metadata("design:returntype", void 0)
], BibliothecaireController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)('removeBibliothecaire'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BibliothecaireController.prototype, "remove", null);
exports.BibliothecaireController = BibliothecaireController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [bibliothecaire_service_1.BibliothecaireService])
], BibliothecaireController);
//# sourceMappingURL=bibliothecaire.controller.js.map