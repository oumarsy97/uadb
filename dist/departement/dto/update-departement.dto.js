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
exports.DepartementResponseDto = exports.UpdateDepartementDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_departement_dto_1 = require("./create-departement.dto");
class UpdateDepartementDto extends (0, swagger_1.PartialType)(create_departement_dto_1.CreateDepartementDto) {
}
exports.UpdateDepartementDto = UpdateDepartementDto;
const swagger_2 = require("@nestjs/swagger");
class DepartementResponseDto {
    id;
    nom;
    description;
    ufrId;
    ufr;
    filieres;
}
exports.DepartementResponseDto = DepartementResponseDto;
__decorate([
    (0, swagger_2.ApiProperty)({
        description: 'ID unique du département',
        example: 'uuid-dept-123'
    }),
    __metadata("design:type", String)
], DepartementResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_2.ApiProperty)({
        description: 'Nom du département',
        example: 'Informatique'
    }),
    __metadata("design:type", String)
], DepartementResponseDto.prototype, "nom", void 0);
__decorate([
    (0, swagger_2.ApiPropertyOptional)({
        description: 'Description du département',
        example: 'Département spécialisé dans les sciences informatiques'
    }),
    __metadata("design:type", String)
], DepartementResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_2.ApiProperty)({
        description: 'ID de l\'UFR parent',
        example: 'uuid-ufr-123'
    }),
    __metadata("design:type", String)
], DepartementResponseDto.prototype, "ufrId", void 0);
__decorate([
    (0, swagger_2.ApiPropertyOptional)({
        description: 'Informations de l\'UFR parent'
    }),
    __metadata("design:type", Object)
], DepartementResponseDto.prototype, "ufr", void 0);
__decorate([
    (0, swagger_2.ApiPropertyOptional)({
        description: 'Liste des filières du département'
    }),
    __metadata("design:type", Array)
], DepartementResponseDto.prototype, "filieres", void 0);
//# sourceMappingURL=update-departement.dto.js.map