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
exports.PolitiqueBibliothequeController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const politique_bibliotheque_service_1 = require("./politique-bibliotheque.service");
const create_politique_bibliotheque_dto_1 = require("./dto/create-politique-bibliotheque.dto");
let PolitiqueBibliothequeController = class PolitiqueBibliothequeController {
    politiqueBibliothequeService;
    constructor(politiqueBibliothequeService) {
        this.politiqueBibliothequeService = politiqueBibliothequeService;
    }
    async create(createPolitiqueBibliothequeDto) {
        return this.politiqueBibliothequeService.create(createPolitiqueBibliothequeDto);
    }
    async findAll(query) {
        return this.politiqueBibliothequeService.findAll();
    }
    async findOne(id) {
        return this.politiqueBibliothequeService.findOne(id);
    }
    async findByUniversiteId(universiteId) {
        return this.politiqueBibliothequeService.findByUniversiteId(universiteId);
    }
    async findAllByUniversiteId(universiteId) {
        return this.politiqueBibliothequeService.findAllByUniversiteId(universiteId);
    }
    async update(data) {
        const { id, updateData } = data;
        return this.politiqueBibliothequeService.update(id, updateData);
    }
    async remove(id) {
        return this.politiqueBibliothequeService.remove(id);
    }
    async findActivePolitiques() {
        const allPolitiques = await this.politiqueBibliothequeService.findAll();
        return allPolitiques.filter(politique => politique.estActive);
    }
    async findInactivePolitiques() {
        const allPolitiques = await this.politiqueBibliothequeService.findAll();
        return allPolitiques.filter(politique => !politique.estActive);
    }
    async activatePolitique(id) {
        return this.politiqueBibliothequeService.update(id, { estActive: true });
    }
    async deactivatePolitique(id) {
        return this.politiqueBibliothequeService.deactivate(id);
    }
    async toggleStatus(id) {
        const politique = await this.politiqueBibliothequeService.findOne(id);
        if (!politique) {
            throw new Error('Politique de bibliothèque non trouvée');
        }
        if (politique.estActive) {
            return this.politiqueBibliothequeService.deactivate(id);
        }
        else {
            return this.politiqueBibliothequeService.update(id, { estActive: true });
        }
    }
    async getPolitiqueByFirstUniversiteId() {
        const allPolitiques = await this.politiqueBibliothequeService.findAll();
        if (allPolitiques.length === 0) {
            throw new Error('Aucune politique de bibliothèque trouvée');
        }
        return allPolitiques[0];
    }
    async validatePolitique(id) {
        const politique = await this.politiqueBibliothequeService.findOne(id);
        return {
            exists: !!politique,
            isActive: politique?.estActive || false,
            politique: politique
        };
    }
};
exports.PolitiqueBibliothequeController = PolitiqueBibliothequeController;
__decorate([
    (0, microservices_1.MessagePattern)('createPolitiqueBibliotheque'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_politique_bibliotheque_dto_1.CreatePolitiqueBibliothequeDto]),
    __metadata("design:returntype", Promise)
], PolitiqueBibliothequeController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('findAllPolitiquesBibliotheque'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PolitiqueBibliothequeController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('findPolitiqueBibliothequeById'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PolitiqueBibliothequeController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)('findPolitiqueBibliothequeByUniversiteId'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PolitiqueBibliothequeController.prototype, "findByUniversiteId", null);
__decorate([
    (0, microservices_1.MessagePattern)('findAllPolitiquesBibliothequeByUniversiteId'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PolitiqueBibliothequeController.prototype, "findAllByUniversiteId", null);
__decorate([
    (0, microservices_1.MessagePattern)('updatePolitiqueBibliotheque'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PolitiqueBibliothequeController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)('removePolitiqueBibliotheque'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PolitiqueBibliothequeController.prototype, "remove", null);
__decorate([
    (0, microservices_1.MessagePattern)('findActivePolitiquesBibliotheque'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PolitiqueBibliothequeController.prototype, "findActivePolitiques", null);
__decorate([
    (0, microservices_1.MessagePattern)('findInactivePolitiquesBibliotheque'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PolitiqueBibliothequeController.prototype, "findInactivePolitiques", null);
__decorate([
    (0, microservices_1.MessagePattern)('activatePolitiqueBibliotheque'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PolitiqueBibliothequeController.prototype, "activatePolitique", null);
__decorate([
    (0, microservices_1.MessagePattern)('deactivatePolitiqueBibliotheque'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PolitiqueBibliothequeController.prototype, "deactivatePolitique", null);
__decorate([
    (0, microservices_1.MessagePattern)('togglePolitiqueBibliothequeStatus'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PolitiqueBibliothequeController.prototype, "toggleStatus", null);
__decorate([
    (0, microservices_1.MessagePattern)('getPolitiqueBibliothequeByFirstUniversiteId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PolitiqueBibliothequeController.prototype, "getPolitiqueByFirstUniversiteId", null);
__decorate([
    (0, microservices_1.MessagePattern)('validatePolitiqueBibliotheque'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PolitiqueBibliothequeController.prototype, "validatePolitique", null);
exports.PolitiqueBibliothequeController = PolitiqueBibliothequeController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [politique_bibliotheque_service_1.PolitiqueBibliothequeService])
], PolitiqueBibliothequeController);
//# sourceMappingURL=politique-bibliotheque.controller.js.map