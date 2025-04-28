// src/utilisateurs/utilisateurs.module.ts
import { Module } from '@nestjs/common';
import { UtilisateursController } from './utilisateurs.controller';
import { UtilisateursService } from './utilisateurs.service';
import { PrismaService } from 'src/prisma/prism.service';

@Module({
  controllers: [UtilisateursController],
  providers: [UtilisateursService, PrismaService],
  exports: [UtilisateursService],
})
export class UtilisateursModule {}