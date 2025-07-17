// src/sms/sms.service.ts
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SendSmsDto } from './dto/sms.dto';

@Injectable()
export class SmsService {
    private readonly baseUrl: string;
    private readonly apiKey: string;
    private readonly senderId: string;

    constructor(private readonly configService: ConfigService) {
        this.baseUrl = this.configService.get('INFOBIP_BASE_URL') || 'https://w1qlj8.api.infobip.com';
        const apiKey = this.configService.get<string>('INFOBIP_API_KEY');
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

    private getHeaders(): Record<string, string> {
        return {
            'Authorization': `App ${this.apiKey}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
    }

    private prepareMessageBody(data: SendSmsDto): any {
        console.log('Preparing message body for:', data);
        
        if (!data.text || !data.text.trim()) {
            throw new HttpException('Le texte du SMS ne peut pas être vide', HttpStatus.BAD_REQUEST);
        }

        if (!data.to || !data.to.trim()) {
            throw new HttpException('Le numéro de téléphone ne peut pas être vide', HttpStatus.BAD_REQUEST);
        }

        // Nettoyer le numéro de téléphone
        let phoneNumber = data.to.replace(/\s+/g, '');
        
        // Ajouter le préfixe pays si nécessaire (Sénégal = 221)
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

    async sendSMS(smsData: SendSmsDto): Promise<any> {
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
            } catch (parseError) {
                console.error('Erreur de parsing JSON:', parseError);
                console.error('Réponse qui a causé l\'erreur:', responseText);
                throw new HttpException(
                    'Réponse invalide du service SMS',
                    HttpStatus.INTERNAL_SERVER_ERROR
                );
            }

            console.log('Réponse parsée:', JSON.stringify(result, null, 2));

            if (!response.ok) {
                console.error('Erreur HTTP:', response.status, response.statusText);
                console.error('Détails de l\'erreur:', result);
                
                // Gestion spécifique des erreurs InfoBip
                if (result.requestError) {
                    throw new HttpException(
                        `Erreur InfoBip: ${result.requestError.serviceException.text}`,
                        HttpStatus.BAD_REQUEST
                    );
                }
                
                throw new HttpException(
                    `Erreur lors de l'envoi du SMS: ${result.message || 'Erreur inconnue'}`,
                    response.status
                );
            }

            // Vérifier si le message a été envoyé avec succès
            if (result.messages && result.messages.length > 0) {
                const message = result.messages[0];
                console.log('Message envoyé:', message);
                
                if (message.status && message.status.groupId !== 1) {
                    console.warn('Message non envoyé:', message.status);
                    throw new HttpException(
                        `Échec de l'envoi: ${message.status.description}`,
                        HttpStatus.BAD_REQUEST
                    );
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

        } catch (error) {
            console.error('=== ERREUR ENVOI SMS ===');
            console.error('Type d\'erreur:', error.constructor.name);
            console.error('Message d\'erreur:', error.message);
            console.error('Stack:', error.stack);
            
            if (error instanceof HttpException) {
                throw error;
            }
            
            throw new HttpException(
                `Erreur service SMS: ${error.message}`,
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    // Méthode pour tester la configuration
    async testConfiguration(): Promise<any> {
        try {
            const testSms: SendSmsDto = {
                to: '221781807229', // Votre numéro de test
                text: 'Test de configuration SMS - ' + new Date().toISOString()
            };
            
            console.log('Test de configuration SMS...');
            return await this.sendSMS(testSms);
        } catch (error) {
            console.error('Erreur lors du test:', error);
            throw error;
        }
    }
}