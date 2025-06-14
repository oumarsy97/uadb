import { NotificationService } from './notification.service';
import { CreateNotificationDto, UpdateNotificationDto, NotificationResponseDto } from './dto/create-notification.dto';
export declare class NotificationController {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    createNotification(createNotificationDto: CreateNotificationDto): Promise<NotificationResponseDto>;
    findAllNotifications(): Promise<NotificationResponseDto[]>;
    findNotificationsByUserId(userId: string): Promise<NotificationResponseDto[]>;
    findUnreadNotificationsByUserId(userId: string): Promise<NotificationResponseDto[]>;
    findOneNotification(id: string): Promise<NotificationResponseDto>;
    updateNotification(payload: {
        id: string;
        updateNotificationDto: UpdateNotificationDto;
    }): Promise<NotificationResponseDto>;
    markNotificationAsRead(id: string): Promise<NotificationResponseDto>;
    markAllAsReadForUsers(userId: string): Promise<{
        count: number;
    }>;
    removeNotification(id: string): Promise<void>;
    getUnreadCountMessage(userId: string): Promise<{
        count: number;
    }>;
    create(createNotificationDto: CreateNotificationDto): Promise<NotificationResponseDto>;
    findAll(): Promise<NotificationResponseDto[]>;
    findByUserId(userId: string): Promise<NotificationResponseDto[]>;
    findUnreadByUserId(userId: string): Promise<NotificationResponseDto[]>;
    getUnreadCount(userId: string): Promise<{
        count: number;
    }>;
    findOne(id: string): Promise<NotificationResponseDto>;
    update(id: string, updateNotificationDto: UpdateNotificationDto): Promise<NotificationResponseDto>;
    markAsRead(id: string): Promise<NotificationResponseDto>;
    markAllAsReadForUser(userId: string): Promise<{
        count: number;
    }>;
    remove(id: string): Promise<void>;
}
