// dto/politique-bibliotheque.dto.ts
import { IsString, IsBoolean, IsOptional, IsUUID, IsNotEmpty } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePolitiqueBibliothequeDto {
  @ApiProperty({ description: 'ID de l\'université' })
  @IsUUID()
  @IsNotEmpty()
  universiteId: string;

  @ApiProperty({ description: 'Description des lieux de retour' })
  @IsString()
  @IsNotEmpty()
  politiqueRetour: string;

  @ApiProperty({ description: 'Politique en cas de perte' })
  @IsString()
  @IsNotEmpty()
  politiquePerte: string;

  @ApiProperty({ description: 'Description de la pénalité de retard' })
  @IsString()
  @IsNotEmpty()
  penaliteRetard: string;

  @ApiPropertyOptional({ description: 'Statut actif', default: true })
  @IsBoolean()
  @IsOptional()
  estActive?: boolean;
}

export class UpdatePolitiqueBibliothequeDto {
  @ApiPropertyOptional({ description: 'Description des lieux de retour' })
  @IsString()
  @IsOptional()
  politiqueRetour?: string;

  @ApiPropertyOptional({ description: 'Politique en cas de perte' })
  @IsString()
  @IsOptional()
  politiquePerte?: string;

  @ApiPropertyOptional({ description: 'Description de la pénalité de retard' })
  @IsString()
  @IsOptional()
  penaliteRetard?: string;

  @ApiPropertyOptional({ description: 'Statut actif' })
  @IsBoolean()
  @IsOptional()
  estActive?: boolean;
}

export class PolitiqueBibliothequeResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  universiteId: string;

  @ApiProperty()
  politiqueRetour: string;

  @ApiProperty()
  politiquePerte: string;

  @ApiProperty()
  penaliteRetard: string;

  @ApiProperty()
  estActive: boolean;

  @ApiProperty()
  dateMiseAJour: Date;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiPropertyOptional({ description: 'Informations de l\'université' })
  universite?: {
    id: string;
    nom: string;
    // Ajoutez d'autres champs de l'université selon vos besoins
  };
}