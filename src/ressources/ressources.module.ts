import { Module } from '@nestjs/common';
import { RessourcesService } from './ressources.service';
import { RessourcesController } from './ressources.controller';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { HistoriqueAccesService } from 'src/interactions/historique-acces/historique-acces.service';

@Module({
  controllers: [RessourcesController],
  providers: [RessourcesService, PrismaService, JwtService, HistoriqueAccesService,],
  exports: [RessourcesService],
})
export class RessourcesModule {}