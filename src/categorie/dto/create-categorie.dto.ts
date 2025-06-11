import { IsString, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateCategorieDto {
  @IsString({ message: 'Le libellé doit être une chaîne de caractères' })
  @IsNotEmpty({ message: 'Le libellé est obligatoire' })
  @MaxLength(255, { message: 'Le libellé ne peut pas dépasser 255 caractères' })
  @Transform(({ value }) => value?.trim())
  libelle: string;

  @IsOptional()
  @IsString({ message: 'La description doit être une chaîne de caractères' })
  @Transform(({ value }) => value?.trim())
  description?: string;
}

export class UpdateCategorieDto {
  @IsOptional()
  @IsString({ message: 'Le libellé doit être une chaîne de caractères' })
  @IsNotEmpty({ message: 'Le libellé ne peut pas être vide' })
  @MaxLength(255, { message: 'Le libellé ne peut pas dépasser 255 caractères' })
  @Transform(({ value }) => value?.trim())
  libelle?: string;

  @IsOptional()
  @IsString({ message: 'La description doit être une chaîne de caractères' })
  @Transform(({ value }) => value?.trim())
  description?: string;
}

export class CategorieResponseDto {
  id: string;
  libelle: string;
  description?: string;
  dateCreation: Date;
  ressources?: any[];
}

// DTO pour les réponses de microservice
export interface MicroserviceResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message: string;
  meta?: {
    total?: number;
    skip?: number;
    take?: number;
  };
}