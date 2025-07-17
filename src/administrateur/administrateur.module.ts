import { Module } from '@nestjs/common';
import { AdministrateurService } from './administrateur.service';
import { AdministrateurController } from './administrateur.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UtilisateursService } from 'src/users/utilisateurs.service';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from 'src/meservices/mail/email.service';
import { SmsService } from 'src/meservices/sms/sms.service';

@Module({
  controllers: [AdministrateurController],
  providers: [AdministrateurService, PrismaService, UtilisateursService, JwtService, EmailService, SmsService],
})
export class AdministrateurModule {}
