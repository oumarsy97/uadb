// dto/create-exemplaire-physique.dto.ts
import { IsString, IsOptional, IsBoolean, IsEnum, IsDateString, IsInt, Min, Max, ValidateNested, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
import { EtatExemplaire, NiveauAcces } from 'generated/prisma';
import { CreateRessourceDto } from '../../ressources/dto/create-ressource.dto';

export class CreateExemplairePhysiqueDto {
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
      urlFichier?: string;
    
      @IsString()
      @IsOptional()
      urlFichierLocal?: string;
    
      @IsString()
      @IsNotEmpty()
      format: string;
    
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
    
  @IsString()
  categorieId: string;
    @IsOptional()
    @IsString()
    auteurId?: string;
    @IsOptional()
    @IsString()
    ressourceId?: string;


  @IsOptional()
  @IsString()
  localisation?: string;

  @IsOptional()
  @IsDateString()
  nombre: number;
  nomAuteur: string;
  id: string;

}

