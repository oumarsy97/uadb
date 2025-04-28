import { Module } from '@nestjs/common';
import { FavorisModule } from './favoris/favoris.module';
import { CommentairesModule } from './commentaires/commentaires.module';
import { NotationsModule } from './notations/notations.module';
import { HistoriqueAccesModule } from './historique-acces/historique-acces.module';

@Module({
  imports: [FavorisModule, CommentairesModule, NotationsModule, HistoriqueAccesModule]
})
export class InteractionsModule {}
