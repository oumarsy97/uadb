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
exports.CreateExemplairePhysiqueDto = void 0;
const class_validator_1 = require("class-validator");
const prisma_1 = require("../../../generated/prisma/index.js");
class CreateExemplairePhysiqueDto {
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
    categorieId;
    auteurId;
    ressourceId;
    cote;
    etat;
    disponible;
    localisation;
    dateAcquisition;
    dureeMaxEmpruntExterne;
    nbMaxExemplairesExterne;
}
exports.CreateExemplairePhysiqueDto = CreateExemplairePhysiqueDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateExemplairePhysiqueDto.prototype, "titre", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateExemplairePhysiqueDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateExemplairePhysiqueDto.prototype, "langue", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateExemplairePhysiqueDto.prototype, "urlFichier", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateExemplairePhysiqueDto.prototype, "urlFichierLocal", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateExemplairePhysiqueDto.prototype, "format", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateExemplairePhysiqueDto.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(prisma_1.NiveauAcces),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateExemplairePhysiqueDto.prototype, "niveauAcces", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreateExemplairePhysiqueDto.prototype, "datePublication", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateExemplairePhysiqueDto.prototype, "motsCles", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateExemplairePhysiqueDto.prototype, "categorieId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateExemplairePhysiqueDto.prototype, "auteurId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateExemplairePhysiqueDto.prototype, "ressourceId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateExemplairePhysiqueDto.prototype, "cote", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(prisma_1.EtatExemplaire),
    __metadata("design:type", String)
], CreateExemplairePhysiqueDto.prototype, "etat", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateExemplairePhysiqueDto.prototype, "disponible", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateExemplairePhysiqueDto.prototype, "localisation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreateExemplairePhysiqueDto.prototype, "dateAcquisition", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(365),
    __metadata("design:type", Number)
], CreateExemplairePhysiqueDto.prototype, "dureeMaxEmpruntExterne", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(10),
    __metadata("design:type", Number)
], CreateExemplairePhysiqueDto.prototype, "nbMaxExemplairesExterne", void 0);
//# sourceMappingURL=create-exemplaire-physique.dto.js.map