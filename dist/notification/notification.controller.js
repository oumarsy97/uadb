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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const swagger_1 = require("@nestjs/swagger");
const notification_service_1 = require("./notification.service");
const create_notification_dto_1 = require("./dto/create-notification.dto");
let NotificationController = class NotificationController {
    notificationService;
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    async createNotification(createNotificationDto) {
        return await this.notificationService.create(createNotificationDto);
    }
    async findAllNotifications() {
        return await this.notificationService.findAll();
    }
    async findNotificationsByUserId(userId) {
        return await this.notificationService.findByUserId(userId);
    }
    async findUnreadNotificationsByUserId(userId) {
        return await this.notificationService.findUnreadByUserId(userId);
    }
    async findOneNotification(id) {
        return await this.notificationService.findOne(id);
    }
    async updateNotification(payload) {
        return await this.notificationService.update(payload.id, payload.updateNotificationDto);
    }
    async markNotificationAsRead(id) {
        return await this.notificationService.markAsRead(id);
    }
    async markAllAsReadForUsers(userId) {
        return await this.notificationService.markAllAsReadForUser(userId);
    }
    async removeNotification(id) {
        return await this.notificationService.remove(id);
    }
    async getUnreadCountMessage(userId) {
        return await this.notificationService.getUnreadCount(userId);
    }
    async create(createNotificationDto) {
        return await this.notificationService.create(createNotificationDto);
    }
    async findAll() {
        return await this.notificationService.findAll();
    }
    async findByUserId(userId) {
        return await this.notificationService.findByUserId(userId);
    }
    async findUnreadByUserId(userId) {
        return await this.notificationService.findUnreadByUserId(userId);
    }
    async getUnreadCount(userId) {
        return await this.notificationService.getUnreadCount(userId);
    }
    async findOne(id) {
        return await this.notificationService.findOne(id);
    }
    async update(id, updateNotificationDto) {
        return await this.notificationService.update(id, updateNotificationDto);
    }
    async markAsRead(id) {
        return await this.notificationService.markAsRead(id);
    }
    async markAllAsReadForUser(userId) {
        return await this.notificationService.markAllAsReadForUser(userId);
    }
    async remove(id) {
        return await this.notificationService.remove(id);
    }
};
exports.NotificationController = NotificationController;
__decorate([
    (0, microservices_1.MessagePattern)('notification.create'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_notification_dto_1.CreateNotificationDto]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "createNotification", null);
__decorate([
    (0, microservices_1.MessagePattern)('notification.findAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "findAllNotifications", null);
__decorate([
    (0, microservices_1.MessagePattern)('notification.findByUserId'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "findNotificationsByUserId", null);
__decorate([
    (0, microservices_1.MessagePattern)('notification.findUnreadByUserId'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "findUnreadNotificationsByUserId", null);
__decorate([
    (0, microservices_1.MessagePattern)('notification.findOne'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "findOneNotification", null);
__decorate([
    (0, microservices_1.MessagePattern)('notification.update'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "updateNotification", null);
__decorate([
    (0, microservices_1.MessagePattern)('notification.markAsRead'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "markNotificationAsRead", null);
__decorate([
    (0, microservices_1.MessagePattern)('notification.markAllAsReadForUser'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "markAllAsReadForUsers", null);
__decorate([
    (0, microservices_1.MessagePattern)('notification.remove'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "removeNotification", null);
__decorate([
    (0, microservices_1.MessagePattern)('notification.getUnreadCount'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "getUnreadCountMessage", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Créer une nouvelle notification' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Notification créée avec succès.', type: create_notification_dto_1.NotificationResponseDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_notification_dto_1.CreateNotificationDto]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer toutes les notifications' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des notifications.', type: [create_notification_dto_1.NotificationResponseDto] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer les notifications d\'un utilisateur' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Notifications de l\'utilisateur.', type: [create_notification_dto_1.NotificationResponseDto] }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "findByUserId", null);
__decorate([
    (0, common_1.Get)('user/:userId/unread'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer les notifications non lues d\'un utilisateur' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Notifications non lues.', type: [create_notification_dto_1.NotificationResponseDto] }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "findUnreadByUserId", null);
__decorate([
    (0, common_1.Get)('user/:userId/count'),
    (0, swagger_1.ApiOperation)({ summary: 'Compter les notifications non lues' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Nombre de notifications non lues.' }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "getUnreadCount", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer une notification par ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Notification trouvée.', type: create_notification_dto_1.NotificationResponseDto }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mettre à jour une notification' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Notification mise à jour.', type: create_notification_dto_1.NotificationResponseDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_notification_dto_1.UpdateNotificationDto]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/read'),
    (0, swagger_1.ApiOperation)({ summary: 'Marquer une notification comme lue' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Notification marquée comme lue.', type: create_notification_dto_1.NotificationResponseDto }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "markAsRead", null);
__decorate([
    (0, common_1.Patch)('user/:userId/read-all'),
    (0, swagger_1.ApiOperation)({ summary: 'Marquer toutes les notifications comme lues pour un utilisateur' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Notifications marquées comme lues.' }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "markAllAsReadForUser", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer une notification' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Notification supprimée.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "remove", null);
exports.NotificationController = NotificationController = __decorate([
    (0, swagger_1.ApiTags)('notifications'),
    (0, common_1.Controller)('notifications'),
    __metadata("design:paramtypes", [notification_service_1.NotificationService])
], NotificationController);
//# sourceMappingURL=notification.controller.js.map