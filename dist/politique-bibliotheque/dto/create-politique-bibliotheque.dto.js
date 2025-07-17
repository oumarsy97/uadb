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
exports.PolitiqueBibliothequeResponseDto = exports.UpdatePolitiqueBibliothequeDto = exports.CreatePolitiqueBibliothequeDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreatePolitiqueBibliothequeDto {
    universiteId;
    politiqueRetour;
    politiquePerte;
    penaliteRetard;
    estActive;
}
exports.CreatePolitiqueBibliothequeDto = CreatePolitiqueBibliothequeDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID de l\'université' }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePolitiqueBibliothequeDto.prototype, "universiteId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Description des lieux de retour' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePolitiqueBibliothequeDto.prototype, "politiqueRetour", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Politique en cas de perte' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePolitiqueBibliothequeDto.prototype, "politiquePerte", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Description de la pénalité de retard' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePolitiqueBibliothequeDto.prototype, "penaliteRetard", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Statut actif', default: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreatePolitiqueBibliothequeDto.prototype, "estActive", void 0);
class UpdatePolitiqueBibliothequeDto {
    politiqueRetour;
    politiquePerte;
    penaliteRetard;
    estActive;
}
exports.UpdatePolitiqueBibliothequeDto = UpdatePolitiqueBibliothequeDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Description des lieux de retour' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdatePolitiqueBibliothequeDto.prototype, "politiqueRetour", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Politique en cas de perte' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdatePolitiqueBibliothequeDto.prototype, "politiquePerte", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Description de la pénalité de retard' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdatePolitiqueBibliothequeDto.prototype, "penaliteRetard", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Statut actif' }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdatePolitiqueBibliothequeDto.prototype, "estActive", void 0);
class PolitiqueBibliothequeResponseDto {
    id;
    universiteId;
    politiqueRetour;
    politiquePerte;
    penaliteRetard;
    estActive;
    dateMiseAJour;
    createdAt;
    updatedAt;
    universite;
}
exports.PolitiqueBibliothequeResponseDto = PolitiqueBibliothequeResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PolitiqueBibliothequeResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PolitiqueBibliothequeResponseDto.prototype, "universiteId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PolitiqueBibliothequeResponseDto.prototype, "politiqueRetour", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PolitiqueBibliothequeResponseDto.prototype, "politiquePerte", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PolitiqueBibliothequeResponseDto.prototype, "penaliteRetard", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], PolitiqueBibliothequeResponseDto.prototype, "estActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], PolitiqueBibliothequeResponseDto.prototype, "dateMiseAJour", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], PolitiqueBibliothequeResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], PolitiqueBibliothequeResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Informations de l\'université' }),
    __metadata("design:type", Object)
], PolitiqueBibliothequeResponseDto.prototype, "universite", void 0);
//# sourceMappingURL=create-politique-bibliotheque.dto.js.map