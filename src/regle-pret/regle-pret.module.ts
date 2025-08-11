import { Module } from '@nestjs/common';
import { ReglePretService } from './regle-pret.service';
import { ReglePretController } from './regle-pret.controller';

@Module({
  controllers: [ReglePretController],
  providers: [ReglePretService],
})
export class ReglePretModule {}
