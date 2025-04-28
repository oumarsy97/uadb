import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilisateursModule } from './users/utilisateurs.module';
import { RessourcesModule } from './ressources/ressources.module';
import { InteractionsModule } from './interactions/interactions.module';
import { CollectionsModule } from './collections/collections.module';

@Module({
  imports: [UtilisateursModule, RessourcesModule, InteractionsModule, CollectionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
