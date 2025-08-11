import { Module } from '@nestjs/common';
import { CommentairesModule } from './commentaires/commentaires.module';
import { NotationsModule } from './notations/notations.module';
import { HistoriqueAccesModule } from './historique-acces/historique-acces.module';
import { FavorisModule } from './favoris/favoris.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [FavorisModule, CommentairesModule, NotationsModule, HistoriqueAccesModule],
  exports: [FavorisModule, CommentairesModule, NotationsModule, HistoriqueAccesModule],
  controllers: [],
  providers: [PrismaService, ],
})
export class InteractionsModule {}
