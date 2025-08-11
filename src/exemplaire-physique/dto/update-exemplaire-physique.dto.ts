// dto/update-exemplaire-physique.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateExemplairePhysiqueDto } from './create-exemplaire-physique.dto';

export class UpdateExemplairePhysiqueDto extends PartialType(CreateExemplairePhysiqueDto) {}

// dto/search-exemplaire-physique.dto.ts
import { IsOptional, IsString, IsBoolean, IsEnum, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { EtatExemplaire } from 'generated/prisma';

export class SearchExemplairePhysiqueDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number = 10;

  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsEnum(EtatExemplaire)
  etat?: EtatExemplaire;

  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  disponible?: boolean;

  @IsOptional()
  @IsString()
  ressourceId?: string;

  @IsOptional()
  @IsString()
  localisation?: string;

  @IsOptional()
  @IsString()
  orderBy?: string = 'dateAcquisition';

  @IsOptional()
  @IsEnum(['asc', 'desc'])
  orderDirection?: 'asc' | 'desc' = 'desc';
}