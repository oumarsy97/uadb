"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../generated/prisma/index.js");
let NotificationService = class NotificationService {
    prisma = new prisma_1.PrismaClient();
    async create(createNotificationDto) {
        const notification = await this.prisma.notification.create({
            data: createNotificationDto,
        });
        return notification;
    }
    async findAll() {
        return await this.prisma.notification.findMany({
            orderBy: { dateCreation: 'desc' },
        });
    }
    async findByUserId(userId) {
        return await this.prisma.notification.findMany({
            where: { userId },
            orderBy: { dateCreation: 'desc' },
        });
    }
    async findUnreadByUserId(userId) {
        return await this.prisma.notification.findMany({
            where: {
                userId,
                estLue: false
            },
            orderBy: { dateCreation: 'desc' },
        });
    }
    async findOne(id) {
        const notification = await this.prisma.notification.findUnique({
            where: { id },
        });
        if (!notification) {
            throw new common_1.NotFoundException(`Notification avec l'ID ${id} non trouvée`);
        }
        return notification;
    }
    async update(id, updateNotificationDto) {
        try {
            const notification = await this.prisma.notification.update({
                where: { id },
                data: updateNotificationDto,
            });
            return notification;
        }
        catch (error) {
            throw new common_1.NotFoundException(`Notification avec l'ID ${id} non trouvée`);
        }
    }
    async markAsRead(id) {
        return this.update(id, { estLue: true });
    }
    async markAllAsReadForUser(userId) {
        const result = await this.prisma.notification.updateMany({
            where: {
                userId,
                estLue: false
            },
            data: { estLue: true },
        });
        return { count: result.count };
    }
    async remove(id) {
        try {
            await this.prisma.notification.delete({
                where: { id },
            });
        }
        catch (error) {
            throw new common_1.NotFoundException(`Notification avec l'ID ${id} non trouvée`);
        }
    }
    async getUnreadCount(userId) {
        const count = await this.prisma.notification.count({
            where: {
                userId,
                estLue: false
            },
        });
        return { count };
    }
};
exports.NotificationService = NotificationService;
exports.NotificationService = NotificationService = __decorate([
    (0, common_1.Injectable)()
], NotificationService);
//# sourceMappingURL=notification.service.js.map