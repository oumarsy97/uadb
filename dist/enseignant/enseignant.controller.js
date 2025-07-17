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
exports.EnseignantController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const enseignant_service_1 = require("./enseignant.service");
const create_enseignant_dto_1 = require("./dto/create-enseignant.dto");
const update_enseignant_dto_1 = require("./dto/update-enseignant.dto");
let EnseignantController = class EnseignantController {
    enseignantService;
    constructor(enseignantService) {
        this.enseignantService = enseignantService;
    }
    create(createEnseignantDto) {
        return this.enseignantService.create(createEnseignantDto);
    }
    findAll(options) {
        return this.enseignantService.findAll(options);
    }
    findOne(id) {
        return this.enseignantService.findOne(id);
    }
    update(updateEnseignantDto) {
        return this.enseignantService.update(updateEnseignantDto.id, updateEnseignantDto);
    }
    remove(id) {
        return this.enseignantService.remove(id);
    }
};
exports.EnseignantController = EnseignantController;
__decorate([
    (0, microservices_1.MessagePattern)('createEnseignant'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_enseignant_dto_1.CreateEnseignantDto]),
    __metadata("design:returntype", void 0)
], EnseignantController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('findAllEnseignant'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EnseignantController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('findOneEnseignant'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EnseignantController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)('updateEnseignant'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_enseignant_dto_1.UpdateEnseignantDto]),
    __metadata("design:returntype", void 0)
], EnseignantController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)('removeEnseignant'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EnseignantController.prototype, "remove", null);
exports.EnseignantController = EnseignantController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [enseignant_service_1.EnseignantService])
], EnseignantController);
//# sourceMappingURL=enseignant.controller.js.map