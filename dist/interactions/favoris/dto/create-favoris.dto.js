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
exports.IsFavoriteResponseDto = exports.MesFavorisResponseDto = exports.FavorisResponseDto = exports.FavorisQueryDto = exports.UpdateFavorisDto = exports.CreateFavorisDto = void 0;
const class_validator_1 = require("class-validator");
class CreateFavorisDto {
    userId;
    ressourceId;
    universiteRess;
    universiteUser;
}
exports.CreateFavorisDto = CreateFavorisDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFavorisDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFavorisDto.prototype, "ressourceId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFavorisDto.prototype, "universiteRess", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFavorisDto.prototype, "universiteUser", void 0);
class UpdateFavorisDto {
    universiteRess;
    universiteUser;
    id;
}
exports.UpdateFavorisDto = UpdateFavorisDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateFavorisDto.prototype, "universiteRess", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateFavorisDto.prototype, "universiteUser", void 0);
class FavorisQueryDto {
    userId;
    ressourceId;
    universiteRess;
    universiteUser;
}
exports.FavorisQueryDto = FavorisQueryDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FavorisQueryDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FavorisQueryDto.prototype, "ressourceId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FavorisQueryDto.prototype, "universiteRess", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FavorisQueryDto.prototype, "universiteUser", void 0);
class FavorisResponseDto {
    id;
    userId;
    ressourceId;
    universiteRess;
    universiteUser;
    isRessourceExternal;
    isUserExternal;
    ressourceInfo;
    userInfo;
    createdAt;
    updatedAt;
}
exports.FavorisResponseDto = FavorisResponseDto;
class MesFavorisResponseDto {
    favorisLocaux;
    favorisExternes;
    total;
}
exports.MesFavorisResponseDto = MesFavorisResponseDto;
class IsFavoriteResponseDto {
    isFavorite;
    ressourceId;
    userId;
}
exports.IsFavoriteResponseDto = IsFavoriteResponseDto;
//# sourceMappingURL=create-favoris.dto.js.map