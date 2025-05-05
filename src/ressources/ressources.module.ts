import { Module } from '@nestjs/common';
import { RessourcesService } from './ressources.service';
import { RessourcesController } from './ressources.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [RessourcesController],
  providers: [RessourcesService, PrismaService],
  exports: [RessourcesService],
})
export class RessourcesModule {}