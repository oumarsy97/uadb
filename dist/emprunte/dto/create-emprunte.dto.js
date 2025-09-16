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
exports.PenaliteDto = exports.CommunicationExterneDto = exports.EmpruntExterneStats = exports.ValidateEmpruntExterneDto = exports.GetEmpruntsExternesDto = exports.EmpruntStats = exports.ExtendEmpruntDto = exports.ReturnEmpruntDto = exports.CreateEmpruntExterneDto = exports.CreateEmpruntDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const prisma_1 = require("../../../generated/prisma/index.js");
class CreateEmpruntDto {
    exemplaireIds;
    empreunteurId;
    dureeEmprunt;
    universiteEmprunteur;
    commentaire;
}
exports.CreateEmpruntDto = CreateEmpruntDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsUUID)('4', { each: true }),
    __metadata("design:type", Array)
], CreateEmpruntDto.prototype, "exemplaireIds", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEmpruntDto.prototype, "empreunteurId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(30),
    __metadata("design:type", Number)
], CreateEmpruntDto.prototype, "dureeEmprunt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEmpruntDto.prototype, "universiteEmprunteur", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEmpruntDto.prototype, "commentaire", void 0);
class CreateEmpruntExterneDto {
    exemplaireIds;
    externUserId;
    universiteEmprunteur;
    dureeEmprunt;
    commentaire;
    nomEmprunteur;
    prenomEmprunteur;
    emailEmprunteur;
    telephoneEmprunteur;
}
exports.CreateEmpruntExterneDto = CreateEmpruntExterneDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsUUID)('4', { each: true }),
    __metadata("design:type", Array)
], CreateEmpruntExterneDto.prototype, "exemplaireIds", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEmpruntExterneDto.prototype, "externUserId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEmpruntExterneDto.prototype, "universiteEmprunteur", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(14),
    __metadata("design:type", Number)
], CreateEmpruntExterneDto.prototype, "dureeEmprunt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEmpruntExterneDto.prototype, "commentaire", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEmpruntExterneDto.prototype, "nomEmprunteur", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEmpruntExterneDto.prototype, "prenomEmprunteur", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEmpruntExterneDto.prototype, "emailEmprunteur", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEmpruntExterneDto.prototype, "telephoneEmprunteur", void 0);
class ReturnEmpruntDto {
    empruntId;
    exemplaireIds;
    nouvelEtat;
    commentaire;
    responsableRetour;
    modeRetour;
}
exports.ReturnEmpruntDto = ReturnEmpruntDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ReturnEmpruntDto.prototype, "empruntId", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsUUID)('4', { each: true }),
    __metadata("design:type", Array)
], ReturnEmpruntDto.prototype, "exemplaireIds", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(prisma_1.EtatExemplaire),
    __metadata("design:type", String)
], ReturnEmpruntDto.prototype, "nouvelEtat", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReturnEmpruntDto.prototype, "commentaire", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReturnEmpruntDto.prototype, "responsableRetour", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReturnEmpruntDto.prototype, "modeRetour", void 0);
class ExtendEmpruntDto {
    empruntId;
    nouvelleDuree;
    motifProlongation;
}
exports.ExtendEmpruntDto = ExtendEmpruntDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ExtendEmpruntDto.prototype, "empruntId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(14),
    __metadata("design:type", Number)
], ExtendEmpruntDto.prototype, "nouvelleDuree", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ExtendEmpruntDto.prototype, "motifProlongation", void 0);
class EmpruntStats {
    totalEmprunts;
    empruntsEnCours;
    empruntsEnRetard;
    empruntsRetournes;
    empruntsExternes;
    empruntsLocaux;
}
exports.EmpruntStats = EmpruntStats;
class GetEmpruntsExternesDto {
    universiteEmprunteur;
    statut;
    page = 1;
    limit = 10;
    search;
}
exports.GetEmpruntsExternesDto = GetEmpruntsExternesDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetEmpruntsExternesDto.prototype, "universiteEmprunteur", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(prisma_1.StatutEmprunt),
    __metadata("design:type", String)
], GetEmpruntsExternesDto.prototype, "statut", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], GetEmpruntsExternesDto.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], GetEmpruntsExternesDto.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetEmpruntsExternesDto.prototype, "search", void 0);
class ValidateEmpruntExterneDto {
    externUserId;
    universiteEmprunteur;
    email;
}
exports.ValidateEmpruntExterneDto = ValidateEmpruntExterneDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ValidateEmpruntExterneDto.prototype, "externUserId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ValidateEmpruntExterneDto.prototype, "universiteEmprunteur", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ValidateEmpruntExterneDto.prototype, "email", void 0);
class EmpruntExterneStats {
    totalEmpruntsExternes;
    empruntsExternesEnCours;
    empruntsExternesEnRetard;
    empruntsExternesRetournes;
    universitesPartenaires;
    repartitionParUniversite;
    tauxRetourEnTemps;
}
exports.EmpruntExterneStats = EmpruntExterneStats;
class CommunicationExterneDto {
    empruntId;
    typeCommunication;
    message;
    reponse;
    responsable;
}
exports.CommunicationExterneDto = CommunicationExterneDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CommunicationExterneDto.prototype, "empruntId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(['EMAIL', 'COURRIER', 'TELEPHONE', 'AUTRE']),
    __metadata("design:type", String)
], CommunicationExterneDto.prototype, "typeCommunication", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CommunicationExterneDto.prototype, "message", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CommunicationExterneDto.prototype, "reponse", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CommunicationExterneDto.prototype, "responsable", void 0);
class PenaliteDto {
    empruntId;
    montant;
    motif;
    description;
    statut = 'IMPAYEE';
}
exports.PenaliteDto = PenaliteDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], PenaliteDto.prototype, "empruntId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], PenaliteDto.prototype, "montant", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(['RETARD', 'DETERIORATION', 'PERTE', 'AUTRE']),
    __metadata("design:type", String)
], PenaliteDto.prototype, "motif", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PenaliteDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(['IMPAYEE', 'PAYEE', 'ANNULEE']),
    __metadata("design:type", String)
], PenaliteDto.prototype, "statut", void 0);
//# sourceMappingURL=create-emprunte.dto.js.map