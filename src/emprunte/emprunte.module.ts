import { Module } from '@nestjs/common';
import { EmprunteService } from './emprunte.service';
import { EmprunteController } from './emprunte.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [EmprunteController],
  providers: [EmprunteService, JwtService],
})
export class EmprunteModule {}
