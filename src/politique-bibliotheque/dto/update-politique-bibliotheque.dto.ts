import { PartialType } from '@nestjs/swagger';
import { CreatePolitiqueBibliothequeDto } from './create-politique-bibliotheque.dto';

export class UpdatePolitiqueBibliothequeDto extends PartialType(CreatePolitiqueBibliothequeDto) {}
