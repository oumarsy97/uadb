import { PartialType } from '@nestjs/mapped-types';
import { CreateBibliothecaireDto } from './create-bibliothecaire.dto';

export class UpdateBibliothecaireDto extends PartialType(CreateBibliothecaireDto) {
  id: string;
}
