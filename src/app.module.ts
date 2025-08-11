import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksModule } from './tasks/tasks.module';

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
import { EmailModule } from './meservices/mail/email.module';
import { NotificationModule } from './notification/notification.module';
import { ExemplairePhysiqueModule } from './exemplaire-physique/exemplaire-physique.module';
import { EmprunteModule } from './emprunte/emprunte.module';
import { PolitiqueBibliothequeModule } from './politique-bibliotheque/politique-bibliotheque.module';
import { ReglePretModule } from './regle-pret/regle-pret.module';
import { AdministrateurModule } from './administrateur/administrateur.module';
import { EnseignantModule } from './enseignant/enseignant.module';
import { BibliothecaireModule } from './bibliothecaire/bibliothecaire.module';

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
    EmailModule,
   // SmsModule, // Assurez-vous que SmsModule est importé ici
    NotificationModule,
    ExemplairePhysiqueModule,
    EmprunteModule,
    PolitiqueBibliothequeModule,
    ReglePretModule,
    AdministrateurModule,
    EnseignantModule,
    BibliothecaireModule,
    ScheduleModule.forRoot(), // Ajoutez cette ligne
    TasksModule, // Ajoutez cette ligne
  ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}