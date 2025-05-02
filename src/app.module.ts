import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Modules personnalisés
import { PrismaModule } from './prisma/prisma.module';
import { UtilisateursModule } from './users/utilisateurs.module';
import { RessourcesModule } from './ressources/ressources.module';
import { InteractionsModule } from './interactions/interactions.module';
import { CollectionsModule } from './collections/collections.module';
import { UniversiteModule } from './universite/universite.module';

@Module({
  imports: [
    PrismaModule,
    UtilisateursModule,
    RessourcesModule,
    InteractionsModule,
    CollectionsModule,
    UniversiteModule,
  ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}