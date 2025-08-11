import { Module } from '@nestjs/common';
import { UfrService } from './ufr.service';
import { UfrController } from './ufr.controller';

@Module({
  controllers: [UfrController],
  providers: [UfrService],
})
export class UfrModule {}
