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
import { ConventionModule } from './convention/convention.module';
import { EtudiantModule } from './etudiant/etudiant.module';
import { CategorieModule } from './categorie/categorie.module';
import { UfrModule } from './ufr/ufr.module';
import { DepartementModule } from './departement/departement.module';
import { FiliereModule } from './filiere/filiere.module';

@Module({
  imports: [
    PrismaModule,
    UtilisateursModule,
    RessourcesModule,
    InteractionsModule,
    CollectionsModule,
    UniversiteModule,
    ConventionModule,
    EtudiantModule,
    CategorieModule,
    UfrModule,
    DepartementModule,
    FiliereModule,
  ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}