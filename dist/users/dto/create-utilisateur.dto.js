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
exports.LoginDataDto = exports.CreateUtilisateurDto = void 0;
const class_validator_1 = require("class-validator");
const prisma_1 = require("../../../generated/prisma");
const swagger_1 = require("@nestjs/swagger");
class CreateUtilisateurDto {
    email;
    motDePasse;
    nom;
    prenom;
    image;
    role;
}
exports.CreateUtilisateurDto = CreateUtilisateurDto;
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateUtilisateurDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUtilisateurDto.prototype, "motDePasse", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUtilisateurDto.prototype, "nom", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUtilisateurDto.prototype, "prenom", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUtilisateurDto.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(prisma_1.RoleUser),
    __metadata("design:type", String)
], CreateUtilisateurDto.prototype, "role", void 0);
class LoginDataDto {
    email;
    motDePasse;
    universite;
}
exports.LoginDataDto = LoginDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Email de l'utilisateur",
        example: 'utilisateur@universite.edu',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], LoginDataDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Mot de passe de l'utilisateur",
        example: 'MotDePasse123',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginDataDto.prototype, "motDePasse", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Code de l'université",
        example: 'UCAD',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginDataDto.prototype, "universite", void 0);
//# sourceMappingURL=create-utilisateur.dto.js.map