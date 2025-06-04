import { Module } from '@nestjs/common';
import { EtudiantService } from './etudiant.service';
import { EtudiantController } from './etudiant.controller';
import { UtilisateursModule } from 'src/users/utilisateurs.module';

@Module({
  imports: [UtilisateursModule],
  controllers: [EtudiantController],
  providers: [EtudiantService],
})
export class EtudiantModule {}
