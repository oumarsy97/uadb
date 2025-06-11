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
exports.UfrStatsDto = exports.PaginatedUfrResponseDto = exports.UfrResponseDto = exports.UpdateUfrDto = exports.CreateUfrDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateUfrDto {
    nom;
    description;
    universiteId;
}
exports.CreateUfrDto = CreateUfrDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nom de l\'UFR',
        example: 'UFR Sciences et Technologies',
        minLength: 2,
        maxLength: 100,
    }),
    (0, class_validator_1.IsString)({ message: 'Le nom doit être une chaîne de caractères' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Le nom est obligatoire' }),
    (0, class_validator_1.MinLength)(2, { message: 'Le nom doit contenir au moins 2 caractères' }),
    (0, class_validator_1.MaxLength)(100, { message: 'Le nom ne peut pas dépasser 100 caractères' }),
    __metadata("design:type", String)
], CreateUfrDto.prototype, "nom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Description de l\'UFR',
        example: 'UFR regroupant les disciplines scientifiques et technologiques de l\'université',
    }),
    (0, class_validator_1.IsString)({ message: 'La description doit être une chaîne de caractères' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(1000, { message: 'La description ne peut pas dépasser 1000 caractères' }),
    __metadata("design:type", String)
], CreateUfrDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID de l\'université à laquelle appartient l\'UFR',
        example: 'uuid-universite-example',
    }),
    (0, class_validator_1.IsString)({ message: 'L\'ID de l\'université doit être une chaîne de caractères' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'L\'ID de l\'université est obligatoire' }),
    (0, class_validator_1.IsUUID)(4, { message: 'L\'ID de l\'université doit être un UUID valide' }),
    __metadata("design:type", String)
], CreateUfrDto.prototype, "universiteId", void 0);
class UpdateUfrDto extends (0, swagger_1.PartialType)(CreateUfrDto) {
    nom;
    description;
    universiteId;
}
exports.UpdateUfrDto = UpdateUfrDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Nouveau nom de l\'UFR',
        example: 'UFR Sciences Appliquées et Technologies',
        minLength: 2,
        maxLength: 100,
    }),
    (0, class_validator_1.IsString)({ message: 'Le nom doit être une chaîne de caractères' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MinLength)(2, { message: 'Le nom doit contenir au moins 2 caractères' }),
    (0, class_validator_1.MaxLength)(100, { message: 'Le nom ne peut pas dépasser 100 caractères' }),
    __metadata("design:type", String)
], UpdateUfrDto.prototype, "nom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Nouvelle description de l\'UFR',
        example: 'UFR spécialisée dans les sciences appliquées et les nouvelles technologies',
    }),
    (0, class_validator_1.IsString)({ message: 'La description doit être une chaîne de caractères' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(1000, { message: 'La description ne peut pas dépasser 1000 caractères' }),
    __metadata("design:type", String)
], UpdateUfrDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Nouvel ID de l\'université',
        example: 'uuid-nouvelle-universite-example',
    }),
    (0, class_validator_1.IsString)({ message: 'L\'ID de l\'université doit être une chaîne de caractères' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(4, { message: 'L\'ID de l\'université doit être un UUID valide' }),
    __metadata("design:type", String)
], UpdateUfrDto.prototype, "universiteId", void 0);
class UfrResponseDto {
    id;
    nom;
    description;
    universiteId;
    universite;
    departements;
}
exports.UfrResponseDto = UfrResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID unique de l\'UFR',
        example: 'uuid-ufr-example',
    }),
    __metadata("design:type", String)
], UfrResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nom de l\'UFR',
        example: 'UFR Sciences et Technologies',
    }),
    __metadata("design:type", String)
], UfrResponseDto.prototype, "nom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Description de l\'UFR',
        example: 'UFR regroupant les disciplines scientifiques et technologiques',
    }),
    __metadata("design:type", String)
], UfrResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID de l\'université',
        example: 'uuid-universite-example',
    }),
    __metadata("design:type", String)
], UfrResponseDto.prototype, "universiteId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Informations sur l\'université',
        type: 'object',
        properties: {
            id: { type: 'string', example: 'uuid-universite-example' },
            nom: { type: 'string', example: 'Université Cheikh Anta Diop' },
        },
    }),
    __metadata("design:type", Object)
], UfrResponseDto.prototype, "universite", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Liste des départements de l\'UFR',
        type: 'array',
        items: {
            type: 'object',
            properties: {
                id: { type: 'string', example: 'uuid-dept-example' },
                nom: { type: 'string', example: 'Département Informatique' },
            },
        },
    }),
    __metadata("design:type", Array)
], UfrResponseDto.prototype, "departements", void 0);
class PaginatedUfrResponseDto {
    data;
    total;
    page;
    totalPages;
}
exports.PaginatedUfrResponseDto = PaginatedUfrResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Liste des UFR',
        type: [UfrResponseDto],
    }),
    __metadata("design:type", Array)
], PaginatedUfrResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre total d\'UFR',
        example: 25,
    }),
    __metadata("design:type", Number)
], PaginatedUfrResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Page actuelle',
        example: 1,
    }),
    __metadata("design:type", Number)
], PaginatedUfrResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre total de pages',
        example: 3,
    }),
    __metadata("design:type", Number)
], PaginatedUfrResponseDto.prototype, "totalPages", void 0);
class UfrStatsDto {
    totalUfr;
    ufrParUniversite;
}
exports.UfrStatsDto = UfrStatsDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre total d\'UFR',
        example: 15,
    }),
    __metadata("design:type", Number)
], UfrStatsDto.prototype, "totalUfr", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Répartition des UFR par université',
        type: 'array',
        items: {
            type: 'object',
            properties: {
                universite: { type: 'string', example: 'Université Cheikh Anta Diop' },
                count: { type: 'number', example: 8 },
            },
        },
    }),
    __metadata("design:type", Array)
], UfrStatsDto.prototype, "ufrParUniversite", void 0);
//# sourceMappingURL=create-ufr.dto.js.map