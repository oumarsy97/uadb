// src/utilisateurs/utilisateurs.module.ts
import { Module } from '@nestjs/common';
import { UtilisateursController } from './utilisateurs.controller';
import { UtilisateursService } from './utilisateurs.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  controllers: [UtilisateursController],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const secret = configService.get<string>('JWT_SECRET');
        return {
          secret: secret,
          signOptions: { expiresIn: '1h' },
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [UtilisateursService, PrismaService], // Retirez JwtService ici
  exports: [UtilisateursService],
})
export class UtilisateursModule {}