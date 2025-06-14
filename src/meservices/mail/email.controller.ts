// email.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { EmailService, EmailOptions } from './email.service';

export class SendEmailDto {
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
  from?: string;
  cc?: string | string[];
  bcc?: string | string[];
}

export class SendWelcomeEmailDto {
  to: string;
  userName: string;
}

export class SendPasswordResetDto {
  to: string;
  resetToken: string;
  userName: string;
}

export class SendNotificationDto {
  to: string | string[];
  title: string;
  message: string;
}

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendEmail(@Body() sendEmailDto: SendEmailDto) {
    try {
      const result = await this.emailService.sendEmail(sendEmailDto);
      return { success: true, message: 'Email sent successfully' };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  @Post('welcome')
  async sendWelcomeEmail(@Body() dto: SendWelcomeEmailDto) {
    try {
      const result = await this.emailService.sendWelcomeEmail(dto.to, dto.userName);
      return { success: true, message: 'Welcome email sent successfully' };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  @Post('password-reset')
  async sendPasswordResetEmail(@Body() dto: SendPasswordResetDto) {
    try {
      const result = await this.emailService.sendPasswordResetEmail(
        dto.to, 
        dto.resetToken, 
        dto.userName
      );
      return { success: true, message: 'Password reset email sent successfully' };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  @Post('notification')
  async sendNotificationEmail(@Body() dto: SendNotificationDto) {
    try {
      const result = await this.emailService.sendNotificationEmail(
        dto.to, 
        dto.title, 
        dto.message
      );
      return { success: true, message: 'Notification email sent successfully' };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  @Post('bulk')
  async sendBulkEmails(@Body() { emails }: { emails: SendEmailDto[] }) {
    try {
      const results = await this.emailService.sendBulkEmails(emails);
      return { success: true, results };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  @Get('verify')
  async verifyEmailConnection() {
    try {
      const isConnected = await this.emailService.verifyConnection();
      return { 
        success: true, 
        connected: isConnected,
        message: isConnected ? 'Email service is connected' : 'Email service connection failed'
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
}
