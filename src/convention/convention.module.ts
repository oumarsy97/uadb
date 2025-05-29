import { Module } from '@nestjs/common';
import { ConventionService } from './convention.service';
import { ConventionController } from './convention.controller';

@Module({
  controllers: [ConventionController],
  providers: [ConventionService],
})
export class ConventionModule {}
