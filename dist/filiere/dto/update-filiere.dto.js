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
exports.FiliereWithDetailsDto = exports.FiliereResponseDto = exports.DepartementSummaryDto = exports.UpdateFiliereDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_filiere_dto_1 = require("./create-filiere.dto");
class UpdateFiliereDto extends (0, swagger_1.PartialType)(create_filiere_dto_1.CreateFiliereDto) {
}
exports.UpdateFiliereDto = UpdateFiliereDto;
const swagger_2 = require("@nestjs/swagger");
class DepartementSummaryDto {
    id;
    nom;
}
exports.DepartementSummaryDto = DepartementSummaryDto;
__decorate([
    (0, swagger_2.ApiProperty)({
        description: 'ID du département',
        example: '123e4567-e89b-12d3-a456-426614174000',
    }),
    __metadata("design:type", String)
], DepartementSummaryDto.prototype, "id", void 0);
__decorate([
    (0, swagger_2.ApiProperty)({
        description: 'Nom du département',
        example: 'Département d\'Informatique',
    }),
    __metadata("design:type", String)
], DepartementSummaryDto.prototype, "nom", void 0);
class FiliereResponseDto {
    id;
    nom;
    description;
    departementId;
}
exports.FiliereResponseDto = FiliereResponseDto;
__decorate([
    (0, swagger_2.ApiProperty)({
        description: 'ID unique de la filière',
        example: '123e4567-e89b-12d3-a456-426614174000',
    }),
    __metadata("design:type", String)
], FiliereResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_2.ApiProperty)({
        description: 'Nom de la filière',
        example: 'Informatique',
    }),
    __metadata("design:type", String)
], FiliereResponseDto.prototype, "nom", void 0);
__decorate([
    (0, swagger_2.ApiProperty)({
        description: 'Description de la filière',
        example: 'Filière spécialisée dans les sciences informatiques',
        nullable: true,
    }),
    __metadata("design:type", Object)
], FiliereResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_2.ApiProperty)({
        description: 'ID du département',
        example: '123e4567-e89b-12d3-a456-426614174000',
    }),
    __metadata("design:type", String)
], FiliereResponseDto.prototype, "departementId", void 0);
class FiliereWithDetailsDto extends FiliereResponseDto {
    departement;
}
exports.FiliereWithDetailsDto = FiliereWithDetailsDto;
__decorate([
    (0, swagger_2.ApiProperty)({
        description: 'Informations du département',
        type: DepartementSummaryDto,
    }),
    __metadata("design:type", DepartementSummaryDto)
], FiliereWithDetailsDto.prototype, "departement", void 0);
//# sourceMappingURL=update-filiere.dto.js.map