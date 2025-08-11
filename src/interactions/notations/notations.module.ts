import { Module } from '@nestjs/common';
import { NotationsController } from './notations.controller';
import { NotationsService } from './notations.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [NotationsController],
  providers: [NotationsService, JwtService, PrismaService]
})
export class NotationsModule {}
