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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let SmsService = class SmsService {
    configService;
    baseUrl;
    apiKey;
    senderId;
    constructor(configService) {
        this.configService = configService;
        this.baseUrl = this.configService.get('INFOBIP_BASE_URL') || 'https://w1qlj8.api.infobip.com';
        const apiKey = this.configService.get('INFOBIP_API_KEY');
        if (!apiKey) {
            throw new Error('INFOBIP_API_KEY is not set in environment variables');
        }
        this.apiKey = apiKey;
        this.senderId = this.configService.get('INFOBIP_SENDER_ID') || '447491163443';
        console.log('SmsService initialized with config:', {
            baseUrl: this.baseUrl,
            apiKey: this.apiKey ? `${this.apiKey.substring(0, 10)}...` : 'NOT_SET',
            senderId: this.senderId
        });
    }
    getHeaders() {
        return {
            'Authorization': `App ${this.apiKey}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
    }
    prepareMessageBody(data) {
        console.log('Preparing message body for:', data);
        if (!data.text || !data.text.trim()) {
            throw new common_1.HttpException('Le texte du SMS ne peut pas être vide', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!data.to || !data.to.trim()) {
            throw new common_1.HttpException('Le numéro de téléphone ne peut pas être vide', common_1.HttpStatus.BAD_REQUEST);
        }
        let phoneNumber = data.to.replace(/\s+/g, '');
        if (!phoneNumber.startsWith('221') && !phoneNumber.startsWith('+221')) {
            if (phoneNumber.startsWith('77') || phoneNumber.startsWith('78') || phoneNumber.startsWith('76') || phoneNumber.startsWith('70')) {
                phoneNumber = '221' + phoneNumber;
            }
        }
        const messageBody = {
            messages: [
                {
                    destinations: [{ to: phoneNumber }],
                    from: this.senderId,
                    text: data.text,
                },
            ],
        };
        console.log('Message body prepared:', JSON.stringify(messageBody, null, 2));
        return messageBody;
    }
    async sendSMS(smsData) {
        console.log('=== DEBUT ENVOI SMS ===');
        console.log('Données SMS reçues:', smsData);
        try {
            const messageBody = this.prepareMessageBody(smsData);
            const url = `${this.baseUrl}/sms/2/text/advanced`;
            console.log('URL d\'envoi:', url);
            console.log('Headers:', this.getHeaders());
            console.log('Body:', JSON.stringify(messageBody, null, 2));
            const response = await fetch(url, {
                method: 'POST',
                headers: this.getHeaders(),
                body: JSON.stringify(messageBody),
            });
            console.log('Status de la réponse:', response.status);
            console.log('Headers de la réponse:', Object.fromEntries(response.headers.entries()));
            const responseText = await response.text();
            console.log('Réponse brute:', responseText);
            let result;
            try {
                result = JSON.parse(responseText);
            }
            catch (parseError) {
                console.error('Erreur de parsing JSON:', parseError);
                console.error('Réponse qui a causé l\'erreur:', responseText);
                throw new common_1.HttpException('Réponse invalide du service SMS', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
            console.log('Réponse parsée:', JSON.stringify(result, null, 2));
            if (!response.ok) {
                console.error('Erreur HTTP:', response.status, response.statusText);
                console.error('Détails de l\'erreur:', result);
                if (result.requestError) {
                    throw new common_1.HttpException(`Erreur InfoBip: ${result.requestError.serviceException.text}`, common_1.HttpStatus.BAD_REQUEST);
                }
                throw new common_1.HttpException(`Erreur lors de l'envoi du SMS: ${result.message || 'Erreur inconnue'}`, response.status);
            }
            if (result.messages && result.messages.length > 0) {
                const message = result.messages[0];
                console.log('Message envoyé:', message);
                if (message.status && message.status.groupId !== 1) {
                    console.warn('Message non envoyé:', message.status);
                    throw new common_1.HttpException(`Échec de l'envoi: ${message.status.description}`, common_1.HttpStatus.BAD_REQUEST);
                }
                console.log('=== SMS ENVOYÉ AVEC SUCCÈS ===');
                return {
                    success: true,
                    messageId: message.messageId,
                    status: message.status,
                    to: message.to
                };
            }
            console.log('=== FIN ENVOI SMS ===');
            return result;
        }
        catch (error) {
            console.error('=== ERREUR ENVOI SMS ===');
            console.error('Type d\'erreur:', error.constructor.name);
            console.error('Message d\'erreur:', error.message);
            console.error('Stack:', error.stack);
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException(`Erreur service SMS: ${error.message}`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async testConfiguration() {
        try {
            const testSms = {
                to: '221781807229',
                text: 'Test de configuration SMS - ' + new Date().toISOString()
            };
            console.log('Test de configuration SMS...');
            return await this.sendSMS(testSms);
        }
        catch (error) {
            console.error('Erreur lors du test:', error);
            throw error;
        }
    }
};
exports.SmsService = SmsService;
exports.SmsService = SmsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], SmsService);
//# sourceMappingURL=sms.service.js.map