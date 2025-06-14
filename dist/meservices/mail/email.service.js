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
var EmailService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");
let EmailService = EmailService_1 = class EmailService {
    configService;
    logger = new common_1.Logger(EmailService_1.name);
    transporter;
    emailProvider;
    constructor(configService) {
        this.configService = configService;
        this.emailProvider = this.configService.get('EMAIL_PROVIDER', 'smtp');
        this.initializeEmailProvider();
    }
    initializeEmailProvider() {
        switch (this.emailProvider) {
            case 'sendgrid':
                this.initializeSendGrid();
                break;
            case 'gmail':
                this.initializeGmail();
                break;
            case 'smtp':
            default:
                this.initializeSMTP();
                break;
        }
    }
    initializeSendGrid() {
        const apiKey = this.configService.get('SENDGRID_API_KEY');
        if (!apiKey) {
            throw new Error('SENDGRID_API_KEY is required for SendGrid provider');
        }
        sgMail.setApiKey(apiKey);
        this.logger.log('SendGrid initialized');
    }
    initializeGmail() {
        const gmailUser = this.configService.get('GMAIL_USER');
        const gmailPass = this.configService.get('GMAIL_APP_PASSWORD');
        this.logger.log(`Gmail User: ${gmailUser ? 'Configuré' : 'MANQUANT'}`);
        this.logger.log(`Gmail Pass: ${gmailPass ? 'Configuré' : 'MANQUANT'}`);
        if (!gmailUser || !gmailPass) {
            throw new Error('GMAIL_USER et GMAIL_APP_PASSWORD sont obligatoires pour Gmail');
        }
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: gmailUser,
                pass: gmailPass,
            },
        });
        this.logger.log('Gmail SMTP initialized');
    }
    initializeSMTP() {
        const smtpUser = this.configService.get('SMTP_USER');
        const smtpPass = this.configService.get('SMTP_PASS');
        const smtpHost = this.configService.get('SMTP_HOST', 'localhost');
        const smtpPort = this.configService.get('SMTP_PORT', 587);
        this.logger.log(`SMTP Config - Host: ${smtpHost}, Port: ${smtpPort}`);
        this.logger.log(`SMTP User: ${smtpUser ? 'Configuré' : 'MANQUANT'}`);
        const config = {
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465,
            requireTLS: smtpPort === 587,
            tls: {
                rejectUnauthorized: false,
                ciphers: 'SSLv3',
            },
        };
        if (smtpUser && smtpPass) {
            config.auth = {
                user: smtpUser,
                pass: smtpPass,
            };
        }
        this.transporter = nodemailer.createTransport(config);
        this.logger.log(`SMTP initialized - Auth: ${smtpUser ? 'Enabled' : 'Disabled'}`);
    }
    async sendEmail(options) {
        try {
            const defaultFrom = this.configService.get('DEFAULT_FROM_EMAIL', 'noreply@example.com');
            if (this.emailProvider === 'sendgrid') {
                return await this.sendWithSendGrid(options, defaultFrom);
            }
            else {
                return await this.sendWithNodemailer(options, defaultFrom);
            }
        }
        catch (error) {
            this.logger.error('Failed to send email', error);
            throw new Error(`Email sending failed: ${error.message}`);
        }
    }
    async sendWithSendGrid(options, defaultFrom) {
        const msg = {
            to: Array.isArray(options.to) ? options.to : [options.to],
            from: options.from || defaultFrom,
            subject: options.subject,
            cc: options.cc ? (Array.isArray(options.cc) ? options.cc : [options.cc]) : undefined,
            bcc: options.bcc ? (Array.isArray(options.bcc) ? options.bcc : [options.bcc]) : undefined,
            attachments: options.attachments?.map(att => ({
                filename: att.filename,
                content: Buffer.isBuffer(att.content) ? att.content.toString('base64') : att.content,
                type: att.contentType,
                disposition: 'attachment',
            })),
            content: options.html
                ? [
                    {
                        type: 'text/html',
                        value: options.html,
                    },
                    ...(options.text
                        ? [
                            {
                                type: 'text/plain',
                                value: options.text,
                            },
                        ]
                        : []),
                ]
                : [
                    {
                        type: 'text/plain',
                        value: options.text || '',
                    },
                ],
        };
        await sgMail.send(msg);
        this.logger.log(`Email sent successfully via SendGrid to ${options.to}`);
        return true;
    }
    async sendWithNodemailer(options, defaultFrom) {
        const mailOptions = {
            from: options.from || defaultFrom,
            to: Array.isArray(options.to) ? options.to.join(', ') : options.to,
            cc: options.cc ? (Array.isArray(options.cc) ? options.cc.join(', ') : options.cc) : undefined,
            bcc: options.bcc ? (Array.isArray(options.bcc) ? options.bcc.join(', ') : options.bcc) : undefined,
            subject: options.subject,
            text: options.text,
            html: options.html,
            attachments: options.attachments,
        };
        const result = await this.transporter.sendMail(mailOptions);
        this.logger.log(`Email sent successfully via ${this.emailProvider} to ${options.to}`, result.messageId);
        return true;
    }
    async sendWelcomeEmail(to, userName) {
        const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">Bienvenue ${userName}!</h1>
        <p>Nous sommes ravis de vous accueillir dans notre plateforme.</p>
        <p>Votre compte a été créé avec succès.</p>
        <div style="margin: 20px 0; padding: 20px; background-color: #f5f5f5; border-radius: 5px;">
          <p>Si vous avez des questions, n'hésitez pas à nous contacter.</p>
        </div>
        <p>Cordialement,<br>L'équipe</p>
      </div>
    `;
        return this.sendEmail({
            to,
            subject: 'Bienvenue sur notre plateforme!',
            html,
            text: `Bienvenue ${userName}! Nous sommes ravis de vous accueillir.`,
        });
    }
    async sendPasswordResetEmail(to, resetToken, userName) {
        const resetUrl = `${this.configService.get('FRONTEND_URL')}/reset-password?token=${resetToken}`;
        const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">Réinitialisation de mot de passe</h1>
        <p>Bonjour ${userName},</p>
        <p>Vous avez demandé une réinitialisation de votre mot de passe.</p>
        <div style="margin: 20px 0;">
          <a href="${resetUrl}" 
             style="background-color: #007bff; color: white; padding: 12px 24px; 
                    text-decoration: none; border-radius: 5px; display: inline-block;">
            Réinitialiser mon mot de passe
          </a>
        </div>
        <p style="color: #666; font-size: 14px;">
          Ce lien expire dans 1 heure. Si vous n'avez pas demandé cette réinitialisation, 
          ignorez cet email.
        </p>
        <p>Cordialement,<br>L'équipe</p>
      </div>
    `;
        return this.sendEmail({
            to,
            subject: 'Réinitialisation de votre mot de passe',
            html,
            text: `Réinitialisation de mot de passe. Cliquez sur ce lien: ${resetUrl}`,
        });
    }
    async sendNotificationEmail(to, title, message) {
        const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">${title}</h1>
        <div style="margin: 20px 0; padding: 20px; background-color: #f8f9fa; border-left: 4px solid #007bff;">
          <p>${message}</p>
        </div>
        <p>Cordialement,<br>L'équipe</p>
      </div>
    `;
        return this.sendEmail({
            to,
            subject: title,
            html,
            text: `${title}\n\n${message}`,
        });
    }
    async sendBulkEmails(emails) {
        const results = { success: 0, failed: 0, errors: [] };
        for (const email of emails) {
            try {
                await this.sendEmail(email);
                results.success++;
            }
            catch (error) {
                results.failed++;
                results.errors.push(`Failed to send to ${email.to}: ${error.message}`);
            }
        }
        this.logger.log(`Bulk email results: ${results.success} success, ${results.failed} failed`);
        return results;
    }
    async verifyConnection() {
        try {
            if (this.emailProvider === 'sendgrid') {
                return !!this.configService.get('SENDGRID_API_KEY');
            }
            else {
                await this.transporter.verify();
                return true;
            }
        }
        catch (error) {
            this.logger.error('Email connection verification failed', error);
            return false;
        }
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = EmailService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], EmailService);
//# sourceMappingURL=email.service.js.map