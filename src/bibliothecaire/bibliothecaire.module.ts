import { Module } from '@nestjs/common';
import { BibliothecaireService } from './bibliothecaire.service';
import { BibliothecaireController } from './bibliothecaire.controller';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from 'src/meservices/mail/email.service';
import { SmsService } from 'src/meservices/sms/sms.service';
import { UtilisateursService } from 'src/users/utilisateurs.service';

@Module({
  controllers: [BibliothecaireController],
  providers: [BibliothecaireService, UtilisateursService, JwtService, EmailService, SmsService],
})
export class BibliothecaireModule {}
