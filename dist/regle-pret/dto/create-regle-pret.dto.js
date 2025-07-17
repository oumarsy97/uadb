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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReglePretResponseDto = exports.UpdateReglePretDto = exports.CreateReglePretDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const prisma_1 = require("../../../generated/prisma/index.js");
class CreateReglePretDto {
    roleUtilisateur;
    nombreMaxOuvrages;
    dureeEmpruntJours;
    nbRenouvellements;
    penaliteRetardJours;
    estActif;
}
exports.CreateReglePretDto = CreateReglePretDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rôle de l\'utilisateur', enum: prisma_1.RoleUser }),
    (0, class_validator_1.IsEnum)(prisma_1.RoleUser),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateReglePretDto.prototype, "roleUtilisateur", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nombre maximum d\'ouvrages', default: 2 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateReglePretDto.prototype, "nombreMaxOuvrages", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Durée d\'emprunt en jours', default: 15 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateReglePretDto.prototype, "dureeEmpruntJours", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nombre de renouvellements', default: 1 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateReglePretDto.prototype, "nbRenouvellements", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Pénalité de retard par jour', default: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateReglePretDto.prototype, "penaliteRetardJours", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Statut actif', default: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateReglePretDto.prototype, "estActif", void 0);
class UpdateReglePretDto {
    roleUtilisateur;
    nombreMaxOuvrages;
    dureeEmpruntJours;
    nbRenouvellements;
    penaliteRetardJours;
    estActif;
}
exports.UpdateReglePretDto = UpdateReglePretDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Rôle de l\'utilisateur', enum: prisma_1.RoleUser }),
    (0, class_validator_1.IsEnum)(prisma_1.RoleUser),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateReglePretDto.prototype, "roleUtilisateur", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nombre maximum d\'ouvrages' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateReglePretDto.prototype, "nombreMaxOuvrages", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Durée d\'emprunt en jours' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateReglePretDto.prototype, "dureeEmpruntJours", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nombre de renouvellements' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateReglePretDto.prototype, "nbRenouvellements", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Pénalité de retard par jour' }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateReglePretDto.prototype, "penaliteRetardJours", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Statut actif' }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateReglePretDto.prototype, "estActif", void 0);
class ReglePretResponseDto {
    id;
    universiteId;
    roleUtilisateur;
    nombreMaxOuvrages;
    dureeEmpruntJours;
    nbRenouvellements;
    penaliteRetardJours;
    estActif;
    createdAt;
    updatedAt;
    universite;
}
exports.ReglePretResponseDto = ReglePretResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReglePretResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReglePretResponseDto.prototype, "universiteId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: prisma_1.RoleUser }),
    __metadata("design:type", String)
], ReglePretResponseDto.prototype, "roleUtilisateur", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ReglePretResponseDto.prototype, "nombreMaxOuvrages", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ReglePretResponseDto.prototype, "dureeEmpruntJours", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ReglePretResponseDto.prototype, "nbRenouvellements", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], ReglePretResponseDto.prototype, "penaliteRetardJours", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], ReglePretResponseDto.prototype, "estActif", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ReglePretResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ReglePretResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Informations de l\'université' }),
    __metadata("design:type", Object)
], ReglePretResponseDto.prototype, "universite", void 0);
//# sourceMappingURL=create-regle-pret.dto.js.map