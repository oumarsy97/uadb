import { ConfigService } from '@nestjs/config';
export interface EmailOptions {
    to: string | string[];
    subject: string;
    text?: string;
    html?: string;
    from?: string;
    cc?: string | string[];
    bcc?: string | string[];
    attachments?: Array<{
        filename: string;
        content: Buffer | string;
        contentType?: string;
    }>;
}
export interface EmailTemplate {
    template: string;
    variables: Record<string, any>;
}
export declare class EmailService {
    private configService;
    private readonly logger;
    private transporter;
    private emailProvider;
    constructor(configService: ConfigService);
    private initializeEmailProvider;
    private initializeSendGrid;
    private initializeGmail;
    private initializeSMTP;
    sendEmail(options: EmailOptions): Promise<boolean>;
    private sendWithSendGrid;
    private sendWithNodemailer;
    sendWelcomeEmail(to: string, userName: string): Promise<boolean>;
    sendPasswordResetEmail(to: string, resetToken: string, userName: string): Promise<boolean>;
    sendNotificationEmail(to: string | string[], title: string, message: string): Promise<boolean>;
    sendBulkEmails(emails: EmailOptions[]): Promise<{
        success: number;
        failed: number;
        errors: string[];
    }>;
    verifyConnection(): Promise<boolean>;
}
