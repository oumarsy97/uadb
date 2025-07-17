import { Module } from '@nestjs/common';
import { FavorisService } from './favoris.service';
import { FavorisController } from './favoris.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtHelperService } from 'src/JwtHelper.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [FavorisController],
  providers: [FavorisService, PrismaService, JwtHelperService, JwtService],
   exports: [FavorisService, JwtHelperService],
})
export class FavorisModule {}
