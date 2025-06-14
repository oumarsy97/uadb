// email.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import * as sgMail from '@sendgrid/mail';

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

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private transporter: nodemailer.Transporter;
  private emailProvider: 'smtp' | 'sendgrid' | 'gmail';

  constructor(private configService: ConfigService) {
    this.emailProvider = this.configService.get<string>('EMAIL_PROVIDER', 'smtp') as any;
    this.initializeEmailProvider();
  }

  private initializeEmailProvider() {
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

  private initializeSendGrid() {
    const apiKey = this.configService.get<string>('SENDGRID_API_KEY');
    if (!apiKey) {
      throw new Error('SENDGRID_API_KEY is required for SendGrid provider');
    }
    sgMail.setApiKey(apiKey);
    this.logger.log('SendGrid initialized');
  }

 // Ajoutez ces logs dans votre méthode initializeGmail()
private initializeGmail() {
  const gmailUser = this.configService.get<string>('GMAIL_USER');
  const gmailPass = this.configService.get<string>('GMAIL_APP_PASSWORD');
  
  // Logs de débogage (à retirer en production)
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

 private initializeSMTP() {
  const smtpUser = this.configService.get<string>('SMTP_USER');
  const smtpPass = this.configService.get<string>('SMTP_PASS');
  const smtpHost = this.configService.get<string>('SMTP_HOST', 'localhost');
  const smtpPort = this.configService.get<number>('SMTP_PORT', 587);
  
  // Logs pour débogage
  this.logger.log(`SMTP Config - Host: ${smtpHost}, Port: ${smtpPort}`);
  this.logger.log(`SMTP User: ${smtpUser ? 'Configuré' : 'MANQUANT'}`);
  
  const config: any = {
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465, // true pour 465, false pour autres ports
    requireTLS: smtpPort === 587, // Force TLS pour le port 587
    tls: {
      rejectUnauthorized: false, // Accepter les certificats auto-signés
      ciphers: 'SSLv3', // Compatibilité SSL
    },
  };

  // N'ajoutez l'auth que si les credentials sont présents
  if (smtpUser && smtpPass) {
    config.auth = {
      user: smtpUser,
      pass: smtpPass,
    };
  }

  this.transporter = nodemailer.createTransport(config);
  this.logger.log(`SMTP initialized - Auth: ${smtpUser ? 'Enabled' : 'Disabled'}`);
}

  async sendEmail(options: EmailOptions): Promise<boolean> {
    try {
      const defaultFrom = this.configService.get<string>('DEFAULT_FROM_EMAIL', 'noreply@example.com');
      
      if (this.emailProvider === 'sendgrid') {
        return await this.sendWithSendGrid(options, defaultFrom);
      } else {
        return await this.sendWithNodemailer(options, defaultFrom);
      }
    } catch (error) {
      this.logger.error('Failed to send email', error);
      throw new Error(`Email sending failed: ${error.message}`);
    }
  }

  private async sendWithSendGrid(options: EmailOptions, defaultFrom: string): Promise<boolean> {
    const msg: sgMail.MailDataRequired = {
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

  private async sendWithNodemailer(options: EmailOptions, defaultFrom: string): Promise<boolean> {
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

  async sendWelcomeEmail(to: string, userName: string): Promise<boolean> {
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

  async sendPasswordResetEmail(to: string, resetToken: string, userName: string): Promise<boolean> {
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

  async sendNotificationEmail(to: string | string[], title: string, message: string): Promise<boolean> {
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

  async sendBulkEmails(emails: EmailOptions[]): Promise<{ success: number; failed: number; errors: string[] }> {
    const results: { success: number; failed: number; errors: string[] } = { success: 0, failed: 0, errors: [] };

    for (const email of emails) {
      try {
        await this.sendEmail(email);
        results.success++;
      } catch (error) {
        results.failed++;
        results.errors.push(`Failed to send to ${email.to}: ${error.message}`);
      }
    }

    this.logger.log(`Bulk email results: ${results.success} success, ${results.failed} failed`);
    return results;
  }

  async verifyConnection(): Promise<boolean> {
    try {
      if (this.emailProvider === 'sendgrid') {
        // Pour SendGrid, on ne peut pas vraiment tester la connexion
        // On vérifie juste que l'API key est configurée
        return !!this.configService.get<string>('SENDGRID_API_KEY');
      } else {
        await this.transporter.verify();
        return true;
      }
    } catch (error) {
      this.logger.error('Email connection verification failed', error);
      return false;
    }
  }
}
