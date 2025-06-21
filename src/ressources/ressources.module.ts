import { Module } from '@nestjs/common';
import { RessourcesService } from './ressources.service';
import { RessourcesController } from './ressources.controller';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [RessourcesController],
  providers: [RessourcesService, PrismaService, JwtService],
  exports: [RessourcesService],
})
export class RessourcesModule {}