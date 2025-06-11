import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsUUID,
  MinLength,
  MaxLength,
} from 'class-validator';

export class CreateUfrDto {
  @ApiProperty({
    description: 'Nom de l\'UFR',
    example: 'UFR Sciences et Technologies',
    minLength: 2,
    maxLength: 100,
  })
  @IsString({ message: 'Le nom doit être une chaîne de caractères' })
  @IsNotEmpty({ message: 'Le nom est obligatoire' })
  @MinLength(2, { message: 'Le nom doit contenir au moins 2 caractères' })
  @MaxLength(100, { message: 'Le nom ne peut pas dépasser 100 caractères' })
  nom: string;

  @ApiPropertyOptional({
    description: 'Description de l\'UFR',
    example: 'UFR regroupant les disciplines scientifiques et technologiques de l\'université',
  })
  @IsString({ message: 'La description doit être une chaîne de caractères' })
  @IsOptional()
  @MaxLength(1000, { message: 'La description ne peut pas dépasser 1000 caractères' })
  description?: string;

  @ApiProperty({
    description: 'ID de l\'université à laquelle appartient l\'UFR',
    example: 'uuid-universite-example',
  })
  @IsString({ message: 'L\'ID de l\'université doit être une chaîne de caractères' })
  @IsNotEmpty({ message: 'L\'ID de l\'université est obligatoire' })
  @IsUUID(4, { message: 'L\'ID de l\'université doit être un UUID valide' })
  universiteId: string;
}

export class UpdateUfrDto extends PartialType(CreateUfrDto) {
  @ApiPropertyOptional({
    description: 'Nouveau nom de l\'UFR',
    example: 'UFR Sciences Appliquées et Technologies',
    minLength: 2,
    maxLength: 100,
  })
  @IsString({ message: 'Le nom doit être une chaîne de caractères' })
  @IsOptional()
  @MinLength(2, { message: 'Le nom doit contenir au moins 2 caractères' })
  @MaxLength(100, { message: 'Le nom ne peut pas dépasser 100 caractères' })
  nom?: string;

  @ApiPropertyOptional({
    description: 'Nouvelle description de l\'UFR',
    example: 'UFR spécialisée dans les sciences appliquées et les nouvelles technologies',
  })
  @IsString({ message: 'La description doit être une chaîne de caractères' })
  @IsOptional()
  @MaxLength(1000, { message: 'La description ne peut pas dépasser 1000 caractères' })
  description?: string;

  @ApiPropertyOptional({
    description: 'Nouvel ID de l\'université',
    example: 'uuid-nouvelle-universite-example',
  })
  @IsString({ message: 'L\'ID de l\'université doit être une chaîne de caractères' })
  @IsOptional()
  @IsUUID(4, { message: 'L\'ID de l\'université doit être un UUID valide' })
  universiteId?: string;
}

// DTO pour les réponses
export class UfrResponseDto {
  @ApiProperty({
    description: 'ID unique de l\'UFR',
    example: 'uuid-ufr-example',
  })
  id: string;

  @ApiProperty({
    description: 'Nom de l\'UFR',
    example: 'UFR Sciences et Technologies',
  })
  nom: string;

  @ApiPropertyOptional({
    description: 'Description de l\'UFR',
    example: 'UFR regroupant les disciplines scientifiques et technologiques',
  })
  description?: string;

  @ApiProperty({
    description: 'ID de l\'université',
    example: 'uuid-universite-example',
  })
  universiteId: string;

  @ApiPropertyOptional({
    description: 'Informations sur l\'université',
    type: 'object',
    properties: {
      id: { type: 'string', example: 'uuid-universite-example' },
      nom: { type: 'string', example: 'Université Cheikh Anta Diop' },
    },
  })
  universite?: {
    id: string;
    nom: string;
  };

  @ApiPropertyOptional({
    description: 'Liste des départements de l\'UFR',
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: { type: 'string', example: 'uuid-dept-example' },
        nom: { type: 'string', example: 'Département Informatique' },
      },
    },
  })
  departements?: Array<{
    id: string;
    nom: string;
  }>;
}

// DTO pour la pagination
export class PaginatedUfrResponseDto {
  @ApiProperty({
    description: 'Liste des UFR',
    type: [UfrResponseDto],
  })
  data: UfrResponseDto[];

  @ApiProperty({
    description: 'Nombre total d\'UFR',
    example: 25,
  })
  total: number;

  @ApiProperty({
    description: 'Page actuelle',
    example: 1,
  })
  page: number;

  @ApiProperty({
    description: 'Nombre total de pages',
    example: 3,
  })
  totalPages: number;
}

// DTO pour les statistiques
export class UfrStatsDto {
  @ApiProperty({
    description: 'Nombre total d\'UFR',
    example: 15,
  })
  totalUfr: number;

  @ApiProperty({
    description: 'Répartition des UFR par université',
    type: 'array',
    items: {
      type: 'object',
      properties: {
        universite: { type: 'string', example: 'Université Cheikh Anta Diop' },
        count: { type: 'number', example: 8 },
      },
    },
  })
  ufrParUniversite: Array<{
    universite: string;
    count: number;
  }>;
}