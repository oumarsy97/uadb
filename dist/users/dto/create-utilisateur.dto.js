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
exports.CreateUtilisateurDto = void 0;
const class_validator_1 = require("class-validator");
const prisma_1 = require("../../../generated/prisma/index.js");
class CreateUtilisateurDto {
    email;
    motDePasse;
    nom;
    prenom;
    role;
    departement;
    faculte;
    specialite;
    niveauEtudes;
}
exports.CreateUtilisateurDto = CreateUtilisateurDto;
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Format email invalide' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email obligatoire' }),
    __metadata("design:type", String)
], CreateUtilisateurDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(8, 32, {
        message: 'Le mot de passe doit contenir entre 8 et 32 caractères',
    }),
    (0, class_validator_1.Matches)(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
        message: 'Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule et un chiffre',
    }),
    __metadata("design:type", String)
], CreateUtilisateurDto.prototype, "motDePasse", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Nom obligatoire' }),
    __metadata("design:type", String)
], CreateUtilisateurDto.prototype, "nom", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Prénom obligatoire' }),
    __metadata("design:type", String)
], CreateUtilisateurDto.prototype, "prenom", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(prisma_1.RoleUser, { message: 'Rôle utilisateur invalide' }),
    __metadata("design:type", String)
], CreateUtilisateurDto.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Département obligatoire' }),
    __metadata("design:type", String)
], CreateUtilisateurDto.prototype, "departement", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Faculté obligatoire' }),
    __metadata("design:type", String)
], CreateUtilisateurDto.prototype, "faculte", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUtilisateurDto.prototype, "specialite", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUtilisateurDto.prototype, "niveauEtudes", void 0);
//# sourceMappingURL=create-utilisateur.dto.js.map