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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailController = exports.SendNotificationDto = exports.SendPasswordResetDto = exports.SendWelcomeEmailDto = exports.SendEmailDto = void 0;
const common_1 = require("@nestjs/common");
const email_service_1 = require("./email.service");
class SendEmailDto {
    to;
    subject;
    text;
    html;
    from;
    cc;
    bcc;
}
exports.SendEmailDto = SendEmailDto;
class SendWelcomeEmailDto {
    to;
    userName;
}
exports.SendWelcomeEmailDto = SendWelcomeEmailDto;
class SendPasswordResetDto {
    to;
    resetToken;
    userName;
}
exports.SendPasswordResetDto = SendPasswordResetDto;
class SendNotificationDto {
    to;
    title;
    message;
}
exports.SendNotificationDto = SendNotificationDto;
let EmailController = class EmailController {
    emailService;
    constructor(emailService) {
        this.emailService = emailService;
    }
    async sendEmail(sendEmailDto) {
        try {
            const result = await this.emailService.sendEmail(sendEmailDto);
            return { success: true, message: 'Email sent successfully' };
        }
        catch (error) {
            return { success: false, message: error.message };
        }
    }
    async sendWelcomeEmail(dto) {
        try {
            const result = await this.emailService.sendWelcomeEmail(dto.to, dto.userName);
            return { success: true, message: 'Welcome email sent successfully' };
        }
        catch (error) {
            return { success: false, message: error.message };
        }
    }
    async sendPasswordResetEmail(dto) {
        try {
            const result = await this.emailService.sendPasswordResetEmail(dto.to, dto.resetToken, dto.userName);
            return { success: true, message: 'Password reset email sent successfully' };
        }
        catch (error) {
            return { success: false, message: error.message };
        }
    }
    async sendNotificationEmail(dto) {
        try {
            const result = await this.emailService.sendNotificationEmail(dto.to, dto.title, dto.message);
            return { success: true, message: 'Notification email sent successfully' };
        }
        catch (error) {
            return { success: false, message: error.message };
        }
    }
    async sendBulkEmails({ emails }) {
        try {
            const results = await this.emailService.sendBulkEmails(emails);
            return { success: true, results };
        }
        catch (error) {
            return { success: false, message: error.message };
        }
    }
    async verifyEmailConnection() {
        try {
            const isConnected = await this.emailService.verifyConnection();
            return {
                success: true,
                connected: isConnected,
                message: isConnected ? 'Email service is connected' : 'Email service connection failed'
            };
        }
        catch (error) {
            return { success: false, message: error.message };
        }
    }
};
exports.EmailController = EmailController;
__decorate([
    (0, common_1.Post)('send'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SendEmailDto]),
    __metadata("design:returntype", Promise)
], EmailController.prototype, "sendEmail", null);
__decorate([
    (0, common_1.Post)('welcome'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SendWelcomeEmailDto]),
    __metadata("design:returntype", Promise)
], EmailController.prototype, "sendWelcomeEmail", null);
__decorate([
    (0, common_1.Post)('password-reset'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SendPasswordResetDto]),
    __metadata("design:returntype", Promise)
], EmailController.prototype, "sendPasswordResetEmail", null);
__decorate([
    (0, common_1.Post)('notification'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SendNotificationDto]),
    __metadata("design:returntype", Promise)
], EmailController.prototype, "sendNotificationEmail", null);
__decorate([
    (0, common_1.Post)('bulk'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmailController.prototype, "sendBulkEmails", null);
__decorate([
    (0, common_1.Get)('verify'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmailController.prototype, "verifyEmailConnection", null);
exports.EmailController = EmailController = __decorate([
    (0, common_1.Controller)('email'),
    __metadata("design:paramtypes", [email_service_1.EmailService])
], EmailController);
//# sourceMappingURL=email.controller.js.map