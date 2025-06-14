import { TypeNotification } from 'generated/prisma';
export declare class CreateNotificationDto {
    userId: string;
    titre: string;
    message: string;
    typeNotification: TypeNotification;
}
export declare class UpdateNotificationDto {
    titre?: string;
    message?: string;
    typeNotification?: TypeNotification;
}
export declare class NotificationResponseDto {
    id: string;
    userId: string;
    titre: string;
    message: string;
    dateCreation: Date;
    estLue: boolean;
    typeNotification: TypeNotification;
}
