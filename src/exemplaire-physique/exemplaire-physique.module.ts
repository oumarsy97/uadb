import { Module, Res } from '@nestjs/common';
import { ExemplairePhysiqueService } from './exemplaire-physique.service';
import { ExemplairePhysiqueController } from './exemplaire-physique.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { RessourcesService } from 'src/ressources/ressources.service';
import { JwtHelperService } from 'src/JwtHelper.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [],
  controllers: [ExemplairePhysiqueController],
  providers: [ExemplairePhysiqueService, PrismaService, RessourcesService, JwtHelperService, JwtService],
  exports: [ExemplairePhysiqueService, JwtHelperService],
})
export class ExemplairePhysiqueModule {}
