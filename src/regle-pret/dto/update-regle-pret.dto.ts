import { PartialType } from '@nestjs/mapped-types';
import { CreateReglePretDto } from './create-regle-pret.dto';

export class UpdateReglePretDto extends PartialType(CreateReglePretDto) {
  id: number;
}
