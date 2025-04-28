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
exports.LoginUtilisateurDto = exports.UpdateUtilisateurDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_utilisateur_dto_1 = require("./create-utilisateur.dto");
const class_validator_1 = require("class-validator");
class UpdateUtilisateurDto extends (0, mapped_types_1.PartialType)(create_utilisateur_dto_1.CreateUtilisateurDto) {
    derniereConnexion;
    estActif;
}
exports.UpdateUtilisateurDto = UpdateUtilisateurDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], UpdateUtilisateurDto.prototype, "derniereConnexion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateUtilisateurDto.prototype, "estActif", void 0);
const class_validator_2 = require("class-validator");
class LoginUtilisateurDto {
    email;
    motDePasse;
    derniereConnexion;
}
exports.LoginUtilisateurDto = LoginUtilisateurDto;
__decorate([
    (0, class_validator_2.IsEmail)({}, { message: 'Format email invalide' }),
    (0, class_validator_2.IsNotEmpty)({ message: 'Email obligatoire' }),
    __metadata("design:type", String)
], LoginUtilisateurDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_2.IsString)(),
    (0, class_validator_2.IsNotEmpty)({ message: 'Mot de passe obligatoire' }),
    __metadata("design:type", String)
], LoginUtilisateurDto.prototype, "motDePasse", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], LoginUtilisateurDto.prototype, "derniereConnexion", void 0);
//# sourceMappingURL=update-utilisateur.dto.js.map