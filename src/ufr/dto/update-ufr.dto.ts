import { PartialType } from '@nestjs/swagger';
import { CreateUfrDto } from './create-ufr.dto';

export class UpdateUfrDto extends PartialType(CreateUfrDto) {}
