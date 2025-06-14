// src/services/notification.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNotificationDto, NotificationResponseDto, UpdateNotificationDto } from './dto/create-notification.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class NotificationService {
  private prisma = new PrismaClient();

  async create(createNotificationDto: CreateNotificationDto): Promise<NotificationResponseDto> {
    const notification = await this.prisma.notification.create({
      data: createNotificationDto,
    });
    return notification;
  }

  async findAll(): Promise<NotificationResponseDto[]> {
    return await this.prisma.notification.findMany({
      orderBy: { dateCreation: 'desc' },
    });
  }

  async findByUserId(userId: string): Promise<NotificationResponseDto[]> {
    return await this.prisma.notification.findMany({
      where: { userId },
      orderBy: { dateCreation: 'desc' },
    });
  }

  async findUnreadByUserId(userId: string): Promise<NotificationResponseDto[]> {
    return await this.prisma.notification.findMany({
      where: { 
        userId,
        estLue: false 
      },
      orderBy: { dateCreation: 'desc' },
    });
  }

  async findOne(id: string): Promise<NotificationResponseDto> {
    const notification = await this.prisma.notification.findUnique({
      where: { id },
    });
    
    if (!notification) {
      throw new NotFoundException(`Notification avec l'ID ${id} non trouvée`);
    }
    
    return notification;
  }

  async update(id: string, updateNotificationDto: UpdateNotificationDto): Promise<NotificationResponseDto> {
    try {
      const notification = await this.prisma.notification.update({
        where: { id },
        data: updateNotificationDto,
      });
      return notification;
    } catch (error) {
      throw new NotFoundException(`Notification avec l'ID ${id} non trouvée`);
    }
  }

  async markAsRead(id: string): Promise<NotificationResponseDto> {
    return this.update(id, 
      { estLue: true } as UpdateNotificationDto // Cast pour correspondre au type attendu
    );
  }

  async markAllAsReadForUser(userId: string): Promise<{ count: number }> {
    const result = await this.prisma.notification.updateMany({
      where: { 
        userId,
        estLue: false 
      },
      data: { estLue: true },
    });
    
    return { count: result.count };
  }

  async remove(id: string): Promise<void> {
    try {
      await this.prisma.notification.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Notification avec l'ID ${id} non trouvée`);
    }
  }

  async getUnreadCount(userId: string): Promise<{ count: number }> {
    const count = await this.prisma.notification.count({
      where: { 
        userId,
        estLue: false 
      },
    });
    
    return { count };
  }
}