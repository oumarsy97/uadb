import { Module } from '@nestjs/common';
import { HistoriqueAccesController } from './historique-acces.controller';
import { HistoriqueAccesService } from './historique-acces.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [HistoriqueAccesController],
  providers: [HistoriqueAccesService, PrismaService, JwtService],
  exports: [HistoriqueAccesService],
})
export class HistoriqueAccesModule {}
