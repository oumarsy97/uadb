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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var EmprunteController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmprunteController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const create_emprunte_dto_1 = require("./dto/create-emprunte.dto");
const emprunte_service_1 = require("./emprunte.service");
const prisma_1 = require("../../generated/prisma/index.js");
const jwt_1 = require("@nestjs/jwt");
let EmprunteController = EmprunteController_1 = class EmprunteController {
    empruntService;
    jwtService;
    logger = new common_1.Logger(EmprunteController_1.name);
    constructor(empruntService, jwtService) {
        this.empruntService = empruntService;
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
    async getCurrentUserHistory(data) {
        this.logger.log('Getting history for current user');
        try {
            const userId = this.extractUserIdFromToken(data.token);
            this.logger.log(`Getting history for authenticated user: ${userId}`);
            const result = await this.empruntService.getUserEmpruntHistory(userId, data.page, data.limit);
            return {
                success: true,
                data: result.data,
                meta: result.meta,
                userId: userId
            };
        }
        catch (error) {
            this.logger.error(`Error getting current user history: ${error.message}`, error.stack);
            return {
                success: false,
                error: error.message,
                code: error.constructor.name
            };
        }
    }
    async getCurrentUserActiveEmprunts(data) {
        this.logger.log('Getting active emprunts for current user');
        try {
            const userId = this.extractUserIdFromToken(data.token);
            this.logger.log(`Getting active emprunts for authenticated user: ${userId}`);
            const result = await this.empruntService.getEmprunts({
                userId: userId,
                statut: prisma_1.StatutEmprunt.EN_COURS,
                page: data.page,
                limit: data.limit
            });
            return {
                success: true,
                data: result.data,
                meta: result.meta,
                userId: userId
            };
        }
        catch (error) {
            this.logger.error(`Error getting current user active emprunts: ${error.message}`, error.stack);
            return {
                success: false,
                error: error.message,
                code: error.constructor.name
            };
        }
    }
    async createEmprunt(data) {
        console.log(`Received createEmprunt request: ${JSON.stringify(data)}`);
        this.logger.log(`Creating emprunt for user: ${data.empreunteurId} with exemplaires: ${data.exemplaireIds.join(', ')}`);
        try {
            const emprunt = await this.empruntService.createEmprunt(data);
            this.logger.log(`Emprunt created: ${emprunt.id}`);
            return {
                success: true,
                data: emprunt,
                message: 'Emprunt créé avec succès'
            };
        }
        catch (error) {
            this.logger.error(`Error creating emprunt: ${error.message}`, error.stack);
            return {
                success: false,
                error: error.message,
                code: error.constructor.name
            };
        }
    }
    async getEmprunt(data) {
        this.logger.log(`Getting emprunt: ${data.id}`);
        try {
            const emprunt = await this.empruntService.getEmpruntById(data.id);
            return {
                success: true,
                data: emprunt
            };
        }
        catch (error) {
            this.logger.error(`Error getting emprunt: ${error.message}`, error.stack);
            return {
                success: false,
                error: error.message,
                code: error.constructor.name
            };
        }
    }
    async getEmprunts(data) {
        try {
            const result = await this.empruntService.getEmprunts(data);
            return {
                success: true,
                data: result.data,
                meta: result.meta
            };
        }
        catch (error) {
            this.logger.error(`Error listing emprunts: ${error.message}`, error.stack);
            return {
                success: false,
                error: error.message,
                code: error.constructor.name
            };
        }
    }
    async returnExemplaires(data) {
        this.logger.log(`Returning exemplaires for emprunt: ${data.empruntId}`);
        try {
            const emprunt = await this.empruntService.returnExemplaires(data);
            this.logger.log(`Exemplaires returned for emprunt: ${emprunt.id}`);
            return {
                success: true,
                data: emprunt,
                message: 'Exemplaires retournés avec succès'
            };
        }
        catch (error) {
            this.logger.error(`Error returning exemplaires: ${error.message}`, error.stack);
            return {
                success: false,
                error: error.message,
                code: error.constructor.name
            };
        }
    }
    async extendEmprunt(data, context) {
        this.logger.log(`Extending emprunt: ${data.empruntId}`);
        try {
            const emprunt = await this.empruntService.extendEmprunt(data);
            this.logger.log(`Emprunt extended: ${emprunt.id}`);
            const channel = context.getChannelRef();
            const originalMsg = context.getMessage();
            channel.ack(originalMsg);
            return {
                success: true,
                data: emprunt,
                message: 'Emprunt prolongé avec succès'
            };
        }
        catch (error) {
            this.logger.error(`Error extending emprunt: ${error.message}`, error.stack);
            const channel = context.getChannelRef();
            const originalMsg = context.getMessage();
            channel.ack(originalMsg);
            return {
                success: false,
                error: error.message,
                code: error.constructor.name
            };
        }
    }
    async getEmpruntsEnRetard(data, context) {
        this.logger.log('Getting emprunts en retard');
        try {
            const emprunts = await this.empruntService.getEmpruntsEnRetard();
            const channel = context.getChannelRef();
            const originalMsg = context.getMessage();
            channel.ack(originalMsg);
            return {
                success: true,
                data: emprunts,
                count: emprunts.length
            };
        }
        catch (error) {
            this.logger.error(`Error getting emprunts en retard: ${error.message}`, error.stack);
            const channel = context.getChannelRef();
            const originalMsg = context.getMessage();
            channel.ack(originalMsg);
            return {
                success: false,
                error: error.message,
                code: error.constructor.name
            };
        }
    }
    async getUserEmprunts(data) {
        this.logger.log(`Getting emprunts for user: ${data.userId}`);
        try {
            const result = await this.empruntService.getEmprunts({
                userId: data.userId,
                statut: data.statut,
                page: data.page,
                limit: data.limit
            });
            return {
                success: true,
                data: result.data,
                meta: result.meta
            };
        }
        catch (error) {
            this.logger.error(`Error getting user emprunts: ${error.message}`, error.stack);
            return {
                success: false,
                error: error.message,
                code: error.constructor.name
            };
        }
    }
    async getUserHistory(data, context) {
        this.logger.log(`Getting history for user: ${data.userId}`);
        try {
            const result = await this.empruntService.getUserEmpruntHistory(data.userId, data.page, data.limit);
            const channel = context.getChannelRef();
            const originalMsg = context.getMessage();
            channel.ack(originalMsg);
            return {
                success: true,
                data: result.data,
                meta: result.meta
            };
        }
        catch (error) {
            this.logger.error(`Error getting user history: ${error.message}`, error.stack);
            const channel = context.getChannelRef();
            const originalMsg = context.getMessage();
            channel.ack(originalMsg);
            return {
                success: false,
                error: error.message,
                code: error.constructor.name
            };
        }
    }
    async getEmpruntStats(data, context) {
        this.logger.log('Getting emprunt statistics');
        try {
            const stats = await this.empruntService.getEmpruntStats();
            const channel = context.getChannelRef();
            const originalMsg = context.getMessage();
            channel.ack(originalMsg);
            return {
                success: true,
                data: stats
            };
        }
        catch (error) {
            this.logger.error(`Error getting emprunt stats: ${error.message}`, error.stack);
            const channel = context.getChannelRef();
            const originalMsg = context.getMessage();
            channel.ack(originalMsg);
            return {
                success: false,
                error: error.message,
                code: error.constructor.name
            };
        }
    }
    async markEmpruntsEnRetard(data, context) {
        this.logger.log('Marking emprunts en retard');
        try {
            const result = await this.empruntService.markEmpruntsEnRetard();
            const channel = context.getChannelRef();
            const originalMsg = context.getMessage();
            channel.ack(originalMsg);
            return {
                success: true,
                data: { count: result.count },
                message: `${result.count} emprunts marqués en retard`
            };
        }
        catch (error) {
            this.logger.error(`Error marking emprunts en retard: ${error.message}`, error.stack);
            const channel = context.getChannelRef();
            const originalMsg = context.getMessage();
            channel.ack(originalMsg);
            return {
                success: false,
                error: error.message,
                code: error.constructor.name
            };
        }
    }
    async checkExemplaireAvailability(data, context) {
        this.logger.log(`Checking availability for exemplaires: ${data.exemplaireIds.join(', ')}`);
        try {
            const exemplaires = await this.empruntService['prisma'].exemplairePhysique.findMany({
                where: {
                    id: { in: data.exemplaireIds }
                },
                select: {
                    id: true,
                    etat: true,
                }
            });
            const availability = exemplaires.map(ex => ({
                id: ex.id,
                etat: ex.etat,
                peutEtreEmprunte: ex.etat !== 'PERDU'
            }));
            const channel = context.getChannelRef();
            const originalMsg = context.getMessage();
            channel.ack(originalMsg);
            return {
                success: true,
                data: availability
            };
        }
        catch (error) {
            this.logger.error(`Error checking availability: ${error.message}`, error.stack);
            const channel = context.getChannelRef();
            const originalMsg = context.getMessage();
            channel.ack(originalMsg);
            return {
                success: false,
                error: error.message,
                code: error.constructor.name
            };
        }
    }
    async handleUserSuspended(data) {
        this.logger.log(`User suspended: ${data.userId}, reason: ${data.reason}`);
        try {
            this.logger.log(`Handled user suspension for: ${data.userId}`);
        }
        catch (error) {
            this.logger.error(`Error handling user suspension: ${error.message}`, error.stack);
        }
    }
    async handleExemplaireDamaged(data) {
        this.logger.log(`Exemplaire damaged: ${data.exemplaireId}`);
        try {
            this.logger.log(`Handled exemplaire damage for: ${data.exemplaireId}`);
        }
        catch (error) {
            this.logger.error(`Error handling exemplaire damage: ${error.message}`, error.stack);
        }
    }
    async handleExemplaireLost(data) {
        this.logger.log(`Exemplaire lost: ${data.exemplaireId}`);
        try {
            this.logger.log(`Handled exemplaire loss for: ${data.exemplaireId}`);
        }
        catch (error) {
            this.logger.error(`Error handling exemplaire loss: ${error.message}`, error.stack);
        }
    }
    async handleDailycheckRetards(data) {
        this.logger.log('Running daily check for retards');
        try {
            const result = await this.empruntService.markEmpruntsEnRetard();
            if (result.count > 0) {
                this.logger.log(`Found ${result.count} new retards`);
                const empruntsEnRetard = await this.empruntService.getEmpruntsEnRetard();
            }
            this.logger.log('Daily retard check completed');
        }
        catch (error) {
            this.logger.error(`Error in daily retard check: ${error.message}`, error.stack);
        }
    }
};
exports.EmprunteController = EmprunteController;
__decorate([
    (0, microservices_1.MessagePattern)('emprunt.user.current.history'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmprunteController.prototype, "getCurrentUserHistory", null);
__decorate([
    (0, microservices_1.MessagePattern)('emprunt.user.current.active'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmprunteController.prototype, "getCurrentUserActiveEmprunts", null);
__decorate([
    (0, microservices_1.MessagePattern)('emprunt.create'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_emprunte_dto_1.CreateEmpruntDto]),
    __metadata("design:returntype", Promise)
], EmprunteController.prototype, "createEmprunt", null);
__decorate([
    (0, microservices_1.MessagePattern)('emprunt.get'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmprunteController.prototype, "getEmprunt", null);
__decorate([
    (0, microservices_1.MessagePattern)('emprunt.list'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmprunteController.prototype, "getEmprunts", null);
__decorate([
    (0, microservices_1.MessagePattern)('emprunt.return'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_emprunte_dto_1.ReturnEmpruntDto]),
    __metadata("design:returntype", Promise)
], EmprunteController.prototype, "returnExemplaires", null);
__decorate([
    (0, microservices_1.MessagePattern)('emprunt.extend'),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_emprunte_dto_1.ExtendEmpruntDto, microservices_1.RmqContext]),
    __metadata("design:returntype", Promise)
], EmprunteController.prototype, "extendEmprunt", null);
__decorate([
    (0, microservices_1.MessagePattern)('emprunt.retards'),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, microservices_1.RmqContext]),
    __metadata("design:returntype", Promise)
], EmprunteController.prototype, "getEmpruntsEnRetard", null);
__decorate([
    (0, microservices_1.MessagePattern)('emprunt.user.list'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmprunteController.prototype, "getUserEmprunts", null);
__decorate([
    (0, microservices_1.MessagePattern)('emprunt.user.history'),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, microservices_1.RmqContext]),
    __metadata("design:returntype", Promise)
], EmprunteController.prototype, "getUserHistory", null);
__decorate([
    (0, microservices_1.MessagePattern)('emprunt.stats'),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, microservices_1.RmqContext]),
    __metadata("design:returntype", Promise)
], EmprunteController.prototype, "getEmpruntStats", null);
__decorate([
    (0, microservices_1.MessagePattern)('emprunt.mark.retard'),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, microservices_1.RmqContext]),
    __metadata("design:returntype", Promise)
], EmprunteController.prototype, "markEmpruntsEnRetard", null);
__decorate([
    (0, microservices_1.MessagePattern)('emprunt.check.availability'),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, microservices_1.RmqContext]),
    __metadata("design:returntype", Promise)
], EmprunteController.prototype, "checkExemplaireAvailability", null);
__decorate([
    (0, microservices_1.EventPattern)('user.suspended'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmprunteController.prototype, "handleUserSuspended", null);
__decorate([
    (0, microservices_1.EventPattern)('exemplaire.damaged'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmprunteController.prototype, "handleExemplaireDamaged", null);
__decorate([
    (0, microservices_1.EventPattern)('exemplaire.lost'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmprunteController.prototype, "handleExemplaireLost", null);
__decorate([
    (0, microservices_1.EventPattern)('cron.daily.check.retards'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmprunteController.prototype, "handleDailycheckRetards", null);
exports.EmprunteController = EmprunteController = EmprunteController_1 = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [emprunte_service_1.EmprunteService,
        jwt_1.JwtService])
], EmprunteController);
//# sourceMappingURL=emprunte.controller.js.map