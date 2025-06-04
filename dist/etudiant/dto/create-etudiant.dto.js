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
exports.EtudiantQueryDto = exports.UpdateEtudiantDto = exports.CreateEtudiantDto = void 0;
const class_validator_1 = require("class-validator");
const prisma_1 = require("../../../generated/prisma/index.js");
class CreateEtudiantDto {
    email;
    motDePasse;
    nom;
    prenom;
    telephone;
    image;
    role;
    dateNaissance;
    departement;
    faculte;
    specialite;
    niveauEtudes;
    universiteId;
}
exports.CreateEtudiantDto = CreateEtudiantDto;
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateEtudiantDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEtudiantDto.prototype, "motDePasse", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEtudiantDto.prototype, "nom", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEtudiantDto.prototype, "prenom", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateEtudiantDto.prototype, "telephone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEtudiantDto.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(prisma_1.RoleUser),
    __metadata("design:type", String)
], CreateEtudiantDto.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'La date de naissance doit être une date valide' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'La date de naissance est requise' }),
    __metadata("design:type", String)
], CreateEtudiantDto.prototype, "dateNaissance", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Le département doit être une chaîne de caractères' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateEtudiantDto.prototype, "departement", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'La faculté doit être une chaîne de caractères' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateEtudiantDto.prototype, "faculte", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'La spécialité doit être une chaîne de caractères' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateEtudiantDto.prototype, "specialite", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(prisma_1.NiveauEtudes, { message: 'Le niveau d\'études doit être valide (LICENCE, MASTER, DOCTORAT, POSTDOCTORAT)' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateEtudiantDto.prototype, "niveauEtudes", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'L\'ID de l\'université doit être une chaîne de caractères' }),
    __metadata("design:type", String)
], CreateEtudiantDto.prototype, "universiteId", void 0);
class UpdateEtudiantDto {
    dateNaissance;
    departement;
    faculte;
    specialite;
    universiteId;
    niveauEtudes;
    userData;
}
exports.UpdateEtudiantDto = UpdateEtudiantDto;
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'La date de naissance doit être une date valide' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateEtudiantDto.prototype, "dateNaissance", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Le département doit être une chaîne de caractères' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateEtudiantDto.prototype, "departement", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'La faculté doit être une chaîne de caractères' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateEtudiantDto.prototype, "faculte", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'La spécialité doit être une chaîne de caractères' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateEtudiantDto.prototype, "specialite", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'L\'ID de l\'université doit être une chaîne de caractères' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateEtudiantDto.prototype, "universiteId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(prisma_1.NiveauEtudes, { message: 'Le niveau d\'études doit être valide (LICENCE, MASTER, DOCTORAT, POSTDOCTORAT)' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateEtudiantDto.prototype, "niveauEtudes", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], UpdateEtudiantDto.prototype, "userData", void 0);
class EtudiantQueryDto {
    page;
    limit;
    search;
    departement;
    faculte;
    niveauEtudes;
    universiteId;
}
exports.EtudiantQueryDto = EtudiantQueryDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EtudiantQueryDto.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EtudiantQueryDto.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EtudiantQueryDto.prototype, "search", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EtudiantQueryDto.prototype, "departement", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EtudiantQueryDto.prototype, "faculte", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(prisma_1.NiveauEtudes),
    __metadata("design:type", String)
], EtudiantQueryDto.prototype, "niveauEtudes", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EtudiantQueryDto.prototype, "universiteId", void 0);
//# sourceMappingURL=create-etudiant.dto.js.map