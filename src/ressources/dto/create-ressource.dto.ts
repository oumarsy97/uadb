// dto/create-ressource.dto.ts
import { IsString, IsOptional, IsEnum, IsUUID, IsBoolean, IsDateString, IsNotEmpty } from 'class-validator';
import { NiveauAcces } from 'generated/prisma';

export enum TypeValidation {
  EN_ATTENTE = 'EN_ATTENTE',
  VALIDE = 'VALIDE',
  REJETE = 'REJETE'
}

export class CreateRessourceDto {
  @IsString()
  @IsNotEmpty()
  titre: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsOptional()
  langue?: string = 'fr';

  @IsString()
  @IsNotEmpty()
  urlFichier?: string;

  @IsString()
  @IsOptional()
  urlFichierLocal?: string;

  @IsString()
  @IsNotEmpty()
  format?: string;

  @IsString()
  @IsOptional()
  image?: string;

  @IsEnum(NiveauAcces)
  @IsOptional()
  niveauAcces?: NiveauAcces = NiveauAcces.PUBLIC;

  @IsDateString()
  @IsOptional()
  datePublication?: Date;

  @IsString()
  @IsNotEmpty()
  motsCles: string;

  @IsUUID()
  @IsNotEmpty() // ✅ Obligatoire
  auteurId: string; // ✅ Pas optionnel

  @IsUUID()
  @IsNotEmpty() // ✅ Obligatoire
  categorieId: string; // ✅ Pas optionnel

  @IsBoolean()
  @IsOptional()
  estArchive?: boolean = false;
}

export class UpdateRessourceDto {
  @IsString()
  @IsOptional()
  titre?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  langue?: string;

  @IsString()
  @IsOptional()
  urlFichier?: string;

  @IsString()
  @IsOptional()
  urlFichierLocal?: string;

  @IsString()
  @IsOptional()
  format?: string;

  @IsString()
  @IsOptional()
  image?: string;

  @IsEnum(NiveauAcces)
  @IsOptional()
  niveauAcces?: NiveauAcces;

  @IsDateString()
  @IsOptional()
  datePublication?: Date;

  @IsString()
  @IsOptional()
  motsCles?: string;

  @IsUUID()
  @IsOptional()
  auteurId?: string;

  @IsUUID()
  @IsOptional()
  universiteId?: string;

  @IsUUID()
  @IsOptional()
  categorieId?: string;

  @IsBoolean()
  @IsOptional()
  estArchive?: boolean;

  @IsEnum(TypeValidation)
  @IsOptional()
  validation?: TypeValidation;
}

export class SearchRessourceDto {
  @IsOptional()
  page?: number = 1;

  @IsOptional()
  limit?: number = 10;

  @IsString()
  @IsOptional()
  search?: string;

  @IsString()
  @IsOptional()
  langue?: string;


  @IsEnum(NiveauAcces)
  @IsOptional()
  niveauAcces?: NiveauAcces;


  @IsBoolean()
  @IsOptional()
  estArchive?: boolean;

  @IsUUID()
  @IsOptional()
  auteurId?: string;

  @IsUUID()
  @IsOptional()
  categorieId?: string;

  @IsString()
  @IsOptional()
  orderBy?: string = 'datePublication';

  @IsString()
  @IsOptional()
  orderDirection?: 'asc' | 'desc' = 'desc';
}