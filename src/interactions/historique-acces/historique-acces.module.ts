import { Module } from '@nestjs/common';
import { HistoriqueAccesController } from './historique-acces.controller';
import { HistoriqueAccesService } from './historique-acces.service';

@Module({
  controllers: [HistoriqueAccesController],
  providers: [HistoriqueAccesService]
})
export class HistoriqueAccesModule {}
