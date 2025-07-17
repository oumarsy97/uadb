import { ConfigService } from '@nestjs/config';
import { SendSmsDto } from './dto/sms.dto';
export declare class SmsService {
    private readonly configService;
    private readonly baseUrl;
    private readonly apiKey;
    private readonly senderId;
    constructor(configService: ConfigService);
    private getHeaders;
    private prepareMessageBody;
    sendSMS(smsData: SendSmsDto): Promise<any>;
    testConfiguration(): Promise<any>;
}
