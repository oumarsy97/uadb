import { Module } from '@nestjs/common';
import { UniversiteController } from './universite.controller';
import { UniversiteService } from './universite.service';

@Module({
  controllers: [UniversiteController],
  providers: [UniversiteService]
})
export class UniversiteModule {}
