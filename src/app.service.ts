import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getHello(): string {
    const jwtSecret = this.configService.get<string>('JWT_SECRET');
    const jwtExpiresIn = this.configService.get<string>('JWT_EXPIRES_IN');
    
    console.log('JWT_SECRET configuré:', jwtSecret ? 'Oui' : 'Non');
    console.log('JWT_EXPIRES_IN configuré:', jwtExpiresIn);
    
    return 'Hello World!';
  }
  
}