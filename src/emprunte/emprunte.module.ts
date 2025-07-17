import { Module } from '@nestjs/common';
import { EmprunteService } from './emprunte.service';
import { EmprunteController } from './emprunte.controller';

@Module({
  controllers: [EmprunteController],
  providers: [EmprunteService],
})
export class EmprunteModule {}
