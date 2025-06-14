import { EmailService } from './email.service';
export declare class SendEmailDto {
    to: string | string[];
    subject: string;
    text?: string;
    html?: string;
    from?: string;
    cc?: string | string[];
    bcc?: string | string[];
}
export declare class SendWelcomeEmailDto {
    to: string;
    userName: string;
}
export declare class SendPasswordResetDto {
    to: string;
    resetToken: string;
    userName: string;
}
export declare class SendNotificationDto {
    to: string | string[];
    title: string;
    message: string;
}
export declare class EmailController {
    private readonly emailService;
    constructor(emailService: EmailService);
    sendEmail(sendEmailDto: SendEmailDto): Promise<{
        success: boolean;
        message: any;
    }>;
    sendWelcomeEmail(dto: SendWelcomeEmailDto): Promise<{
        success: boolean;
        message: any;
    }>;
    sendPasswordResetEmail(dto: SendPasswordResetDto): Promise<{
        success: boolean;
        message: any;
    }>;
    sendNotificationEmail(dto: SendNotificationDto): Promise<{
        success: boolean;
        message: any;
    }>;
    sendBulkEmails({ emails }: {
        emails: SendEmailDto[];
    }): Promise<{
        success: boolean;
        results: {
            success: number;
            failed: number;
            errors: string[];
        };
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        results?: undefined;
    }>;
    verifyEmailConnection(): Promise<{
        success: boolean;
        connected: boolean;
        message: string;
    } | {
        success: boolean;
        message: any;
        connected?: undefined;
    }>;
}
