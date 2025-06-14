import { CreateNotificationDto, NotificationResponseDto, UpdateNotificationDto } from './dto/create-notification.dto';
export declare class NotificationService {
    private prisma;
    create(createNotificationDto: CreateNotificationDto): Promise<NotificationResponseDto>;
    findAll(): Promise<NotificationResponseDto[]>;
    findByUserId(userId: string): Promise<NotificationResponseDto[]>;
    findUnreadByUserId(userId: string): Promise<NotificationResponseDto[]>;
    findOne(id: string): Promise<NotificationResponseDto>;
    update(id: string, updateNotificationDto: UpdateNotificationDto): Promise<NotificationResponseDto>;
    markAsRead(id: string): Promise<NotificationResponseDto>;
    markAllAsReadForUser(userId: string): Promise<{
        count: number;
    }>;
    remove(id: string): Promise<void>;
    getUnreadCount(userId: string): Promise<{
        count: number;
    }>;
}
