// src/controllers/notification.controller.ts (SERVICE)
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { NotificationService } from './notification.service';
import { CreateNotificationDto, UpdateNotificationDto, NotificationResponseDto } from './dto/create-notification.dto';

@ApiTags('notifications')
@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  // Patterns pour les communications entre microservices
  @MessagePattern('notification.create')
  async createNotification(@Payload() createNotificationDto: CreateNotificationDto) {
    return await this.notificationService.create(createNotificationDto);
  }

  @MessagePattern('notification.findAll')
  async findAllNotifications() {
    return await this.notificationService.findAll();
  }

  @MessagePattern('notification.findByUserId')
  async findNotificationsByUserId(@Payload() userId: string) {
    return await this.notificationService.findByUserId(userId);
  }

  @MessagePattern('notification.findUnreadByUserId')
  async findUnreadNotificationsByUserId(@Payload() userId: string) {
    return await this.notificationService.findUnreadByUserId(userId);
  }

  @MessagePattern('notification.findOne')
  async findOneNotification(@Payload() id: string) {
    return await this.notificationService.findOne(id);
  }

  @MessagePattern('notification.update')
  async updateNotification(@Payload() payload: { id: string; updateNotificationDto: UpdateNotificationDto }) {
    return await this.notificationService.update(payload.id, payload.updateNotificationDto);
  }

  @MessagePattern('notification.markAsRead')
  async markNotificationAsRead(@Payload() id: string) {
    return await this.notificationService.markAsRead(id);
  }

  @MessagePattern('notification.markAllAsReadForUser')

  async markAllAsReadForUsers(@Payload() userId: string) {
    return await this.notificationService.markAllAsReadForUser(userId);
  }

  @MessagePattern('notification.remove')
  async removeNotification(@Payload() id: string) {
    return await this.notificationService.remove(id);
  }

  @MessagePattern('notification.getUnreadCount')
  async getUnreadCountMessage(@Payload() userId: string) {
    return await this.notificationService.getUnreadCount(userId);
  }

  // Endpoints HTTP pour les tests directs du service
  @Post()
  @ApiOperation({ summary: 'Créer une nouvelle notification' })
  @ApiResponse({ status: 201, description: 'Notification créée avec succès.', type: NotificationResponseDto })
  async create(@Body() createNotificationDto: CreateNotificationDto) {
    return await this.notificationService.create(createNotificationDto);
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer toutes les notifications' })
  @ApiResponse({ status: 200, description: 'Liste des notifications.', type: [NotificationResponseDto] })
  async findAll() {
    return await this.notificationService.findAll();
  }

  @Get('user/:userId')
  @ApiOperation({ summary: 'Récupérer les notifications d\'un utilisateur' })
  @ApiResponse({ status: 200, description: 'Notifications de l\'utilisateur.', type: [NotificationResponseDto] })
  async findByUserId(@Param('userId') userId: string) {
    return await this.notificationService.findByUserId(userId);
  }

  @Get('user/:userId/unread')
  @ApiOperation({ summary: 'Récupérer les notifications non lues d\'un utilisateur' })
  @ApiResponse({ status: 200, description: 'Notifications non lues.', type: [NotificationResponseDto] })
  async findUnreadByUserId(@Param('userId') userId: string) {
    return await this.notificationService.findUnreadByUserId(userId);
  }

  @Get('user/:userId/count')
  @ApiOperation({ summary: 'Compter les notifications non lues' })
  @ApiResponse({ status: 200, description: 'Nombre de notifications non lues.' })
  async getUnreadCount(@Param('userId') userId: string) {
    return await this.notificationService.getUnreadCount(userId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer une notification par ID' })
  @ApiResponse({ status: 200, description: 'Notification trouvée.', type: NotificationResponseDto })
  async findOne(@Param('id') id: string) {
    return await this.notificationService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mettre à jour une notification' })
  @ApiResponse({ status: 200, description: 'Notification mise à jour.', type: NotificationResponseDto })
  async update(@Param('id') id: string, @Body() updateNotificationDto: UpdateNotificationDto) {
    return await this.notificationService.update(id, updateNotificationDto);
  }

  @Patch(':id/read')
  @ApiOperation({ summary: 'Marquer une notification comme lue' })
  @ApiResponse({ status: 200, description: 'Notification marquée comme lue.', type: NotificationResponseDto })
  async markAsRead(@Param('id') id: string) {
    return await this.notificationService.markAsRead(id);
  }

  @Patch('user/:userId/read-all')
  @ApiOperation({ summary: 'Marquer toutes les notifications comme lues pour un utilisateur' })
  @ApiResponse({ status: 200, description: 'Notifications marquées comme lues.' })
  async markAllAsReadForUser(@Param('userId') userId: string) {
    return await this.notificationService.markAllAsReadForUser(userId);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer une notification' })
  @ApiResponse({ status: 200, description: 'Notification supprimée.' })
  async remove(@Param('id') id: string) {
    return await this.notificationService.remove(id);
  }
}