import { Module } from '@nestjs/common';
import { PolitiqueBibliothequeService } from './politique-bibliotheque.service';
import { PolitiqueBibliothequeController } from './politique-bibliotheque.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PolitiqueBibliothequeController],
  providers: [PolitiqueBibliothequeService,PrismaService],
})
export class PolitiqueBibliothequeModule {}
