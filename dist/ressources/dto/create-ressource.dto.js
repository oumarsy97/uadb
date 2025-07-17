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
exports.SearchRessourceDto = exports.UpdateRessourceDto = exports.CreateRessourceDto = exports.TypeValidation = void 0;
const class_validator_1 = require("class-validator");
const prisma_1 = require("../../../generated/prisma/index.js");
var TypeValidation;
(function (TypeValidation) {
    TypeValidation["EN_ATTENTE"] = "EN_ATTENTE";
    TypeValidation["VALIDE"] = "VALIDE";
    TypeValidation["REJETE"] = "REJETE";
})(TypeValidation || (exports.TypeValidation = TypeValidation = {}));
class CreateRessourceDto {
    titre;
    description;
    langue = 'fr';
    urlFichier;
    urlFichierLocal;
    format;
    image;
    niveauAcces = prisma_1.NiveauAcces.PUBLIC;
    datePublication;
    motsCles;
    nomAuteur;
    auteurId;
    categorieId;
    estArchive = false;
}
exports.CreateRessourceDto = CreateRessourceDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateRessourceDto.prototype, "titre", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateRessourceDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateRessourceDto.prototype, "langue", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateRessourceDto.prototype, "urlFichier", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateRessourceDto.prototype, "urlFichierLocal", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateRessourceDto.prototype, "format", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateRessourceDto.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(prisma_1.NiveauAcces),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateRessourceDto.prototype, "niveauAcces", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreateRessourceDto.prototype, "datePublication", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateRessourceDto.prototype, "motsCles", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateRessourceDto.prototype, "nomAuteur", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateRessourceDto.prototype, "auteurId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateRessourceDto.prototype, "categorieId", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateRessourceDto.prototype, "estArchive", void 0);
class UpdateRessourceDto {
    titre;
    description;
    langue;
    urlFichier;
    urlFichierLocal;
    format;
    image;
    niveauAcces;
    datePublication;
    motsCles;
    auteurId;
    universiteId;
    categorieId;
    estArchive;
    validation;
}
exports.UpdateRessourceDto = UpdateRessourceDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateRessourceDto.prototype, "titre", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateRessourceDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateRessourceDto.prototype, "langue", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateRessourceDto.prototype, "urlFichier", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateRessourceDto.prototype, "urlFichierLocal", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateRessourceDto.prototype, "format", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateRessourceDto.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(prisma_1.NiveauAcces),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateRessourceDto.prototype, "niveauAcces", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], UpdateRessourceDto.prototype, "datePublication", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateRessourceDto.prototype, "motsCles", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateRessourceDto.prototype, "auteurId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateRessourceDto.prototype, "universiteId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateRessourceDto.prototype, "categorieId", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateRessourceDto.prototype, "estArchive", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(TypeValidation),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateRessourceDto.prototype, "validation", void 0);
class SearchRessourceDto {
    page = 1;
    limit = 10;
    search;
    langue;
    niveauAcces;
    estArchive;
    auteurId;
    categorieId;
    orderBy = 'datePublication';
    orderDirection = 'desc';
}
exports.SearchRessourceDto = SearchRessourceDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], SearchRessourceDto.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], SearchRessourceDto.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SearchRessourceDto.prototype, "search", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SearchRessourceDto.prototype, "langue", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(prisma_1.NiveauAcces),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SearchRessourceDto.prototype, "niveauAcces", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], SearchRessourceDto.prototype, "estArchive", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SearchRessourceDto.prototype, "auteurId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SearchRessourceDto.prototype, "categorieId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SearchRessourceDto.prototype, "orderBy", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SearchRessourceDto.prototype, "orderDirection", void 0);
//# sourceMappingURL=create-ressource.dto.js.map