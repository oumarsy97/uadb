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
exports.JwtHelperService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let JwtHelperService = class JwtHelperService {
    jwtService;
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    extractUserIdFromToken(token) {
        try {
            const cleanToken = token.replace(/^Bearer\s+/, '');
            const payload = this.jwtService.decode(cleanToken);
            if (!payload || (!payload.sub && !payload.id && !payload.userId)) {
                throw new Error('Token invalide: ID utilisateur non trouvé');
            }
            return payload.sub || payload.id || payload.userId;
        }
        catch (error) {
            throw new Error(`Erreur lors de l'extraction de l'ID utilisateur: ${error.message}`);
        }
    }
    extractUserDataFromToken(token) {
        try {
            const cleanToken = token.replace(/^Bearer\s+/, '');
            const payload = this.jwtService.decode(cleanToken);
            if (!payload) {
                throw new Error('Token invalide');
            }
            return payload;
        }
        catch (error) {
            throw new Error(`Erreur lors de l'extraction des données utilisateur: ${error.message}`);
        }
    }
    isTokenValid(token) {
        try {
            const cleanToken = token.replace(/^Bearer\s+/, '');
            const payload = this.jwtService.decode(cleanToken);
            return !!payload;
        }
        catch (error) {
            return false;
        }
    }
    extractUserRoleFromToken(token) {
        try {
            const payload = this.extractUserDataFromToken(token);
            return payload.role || payload.roles || null;
        }
        catch (error) {
            return null;
        }
    }
};
exports.JwtHelperService = JwtHelperService;
exports.JwtHelperService = JwtHelperService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], JwtHelperService);
//# sourceMappingURL=JwtHelper.service.js.map