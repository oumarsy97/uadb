import { Module } from '@nestjs/common';
import { EnseignantService } from './enseignant.service';
import { EnseignantController } from './enseignant.controller';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from 'src/meservices/mail/email.service';
import { SmsService } from 'src/meservices/sms/sms.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UtilisateursService } from 'src/users/utilisateurs.service';

@Module({
  controllers: [EnseignantController],
  providers: [EnseignantService, PrismaService, UtilisateursService, JwtService, EmailService, SmsService],
})
export class EnseignantModule {}
