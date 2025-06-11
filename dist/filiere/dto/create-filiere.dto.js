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
exports.CreateFiliereDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateFiliereDto {
    nom;
    description;
    departementId;
}
exports.CreateFiliereDto = CreateFiliereDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nom de la filière',
        example: 'Informatique',
        maxLength: 255,
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Le nom de la filière est obligatoire' }),
    (0, class_validator_1.IsString)({ message: 'Le nom doit être une chaîne de caractères' }),
    (0, class_validator_1.MaxLength)(255, { message: 'Le nom ne peut pas dépasser 255 caractères' }),
    __metadata("design:type", String)
], CreateFiliereDto.prototype, "nom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Description de la filière',
        example: 'Filière spécialisée dans les sciences informatiques et technologies de l\'information',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'La description doit être une chaîne de caractères' }),
    __metadata("design:type", String)
], CreateFiliereDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID du département auquel appartient la filière',
        example: '123e4567-e89b-12d3-a456-426614174000',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'L\'ID du département est obligatoire' }),
    (0, class_validator_1.IsUUID)('4', { message: 'L\'ID du département doit être un UUID valide' }),
    __metadata("design:type", String)
], CreateFiliereDto.prototype, "departementId", void 0);
//# sourceMappingURL=create-filiere.dto.js.map