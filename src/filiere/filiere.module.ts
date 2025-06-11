import { Module } from '@nestjs/common';
import { FiliereService } from './filiere.service';
import { FiliereController } from './filiere.controller';

@Module({
  controllers: [FiliereController],
  providers: [FiliereService],
})
export class FiliereModule {}
