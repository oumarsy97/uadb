// dto/regle-pret.dto.ts
import { IsString, IsBoolean, IsOptional, IsUUID, IsNotEmpty, IsInt, IsEnum, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { RoleUser } from 'generated/prisma';



export class CreateReglePretDto {
  @ApiProperty({ description: 'Rôle de l\'utilisateur', enum: RoleUser })
  @IsEnum(RoleUser)
  @IsNotEmpty()
  roleUtilisateur: RoleUser;

  @ApiPropertyOptional({ description: 'Nombre maximum d\'ouvrages', default: 2 })
  @IsInt()
  @Min(1)
  @IsOptional()
  nombreMaxOuvrages?: number;

  @ApiPropertyOptional({ description: 'Durée d\'emprunt en jours', default: 15 })
  @IsInt()
  @Min(1)
  @IsOptional()
  dureeEmpruntJours?: number;

  @ApiPropertyOptional({ description: 'Nombre de renouvellements', default: 1 })
  @IsInt()
  @Min(0)
  @IsOptional()
  nbRenouvellements?: number;

  @ApiPropertyOptional({ description: 'Pénalité de retard par jour', default: true })
  @IsBoolean()
  @IsOptional()
  penaliteRetardJours?: boolean;

  @ApiPropertyOptional({ description: 'Statut actif', default: true })
  @IsBoolean()
  @IsOptional()
  estActif?: boolean;
}

export class UpdateReglePretDto {
  @ApiPropertyOptional({ description: 'Rôle de l\'utilisateur', enum: RoleUser })
  @IsEnum(RoleUser)
  @IsOptional()
  roleUtilisateur?: RoleUser;

  @ApiPropertyOptional({ description: 'Nombre maximum d\'ouvrages' })
  @IsInt()
  @Min(1)
  @IsOptional()
  nombreMaxOuvrages?: number;

  @ApiPropertyOptional({ description: 'Durée d\'emprunt en jours' })
  @IsInt()
  @Min(1)
  @IsOptional()
  dureeEmpruntJours?: number;

  @ApiPropertyOptional({ description: 'Nombre de renouvellements' })
  @IsInt()
  @Min(0)
  @IsOptional()
  nbRenouvellements?: number;

  @ApiPropertyOptional({ description: 'Pénalité de retard par jour' })
  @IsBoolean()
  @IsOptional()
  penaliteRetardJours?: boolean;

  @ApiPropertyOptional({ description: 'Statut actif' })
  @IsBoolean()
  @IsOptional()
  estActif?: boolean;
}

export class ReglePretResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  universiteId: string;

  @ApiProperty({ enum: RoleUser })
  roleUtilisateur: RoleUser;

  @ApiProperty()
  nombreMaxOuvrages: number;

  @ApiProperty()
  dureeEmpruntJours: number;

  @ApiProperty()
  nbRenouvellements: number;

  @ApiProperty()
  penaliteRetardJours: boolean;

  @ApiProperty()
  estActif: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiPropertyOptional({ description: 'Informations de l\'université' })
  universite?: {
    id: string;
    nom: string;
  };
}