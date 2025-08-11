// src/filiere/dto/create-filiere.dto.ts
import { IsNotEmpty, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFiliereDto {
  @ApiProperty({
    description: 'Nom de la filière',
    example: 'Informatique',
    maxLength: 255,
  })
  @IsNotEmpty({ message: 'Le nom de la filière est obligatoire' })
  @IsString({ message: 'Le nom doit être une chaîne de caractères' })
  @MaxLength(255, { message: 'Le nom ne peut pas dépasser 255 caractères' })
  nom: string;

  @ApiProperty({
    description: 'Description de la filière',
    example: 'Filière spécialisée dans les sciences informatiques et technologies de l\'information',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'La description doit être une chaîne de caractères' })
  description?: string;

  @ApiProperty({
    description: 'ID du département auquel appartient la filière',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsNotEmpty({ message: 'L\'ID du département est obligatoire' })
  @IsUUID('4', { message: 'L\'ID du département doit être un UUID valide' })
  departementId: string;
}
