// src/universite/dto/universite.dto.ts
import { IsString, IsOptional, IsBoolean, IsUrl, IsNotEmpty } from 'class-validator';

export class CreateUniversiteDto {
  @IsString()
  @IsNotEmpty()
  nom: string;

  @IsString()
  @IsNotEmpty()
  ville: string;

  @IsString()
  @IsNotEmpty()
  pays: string;

  @IsString()
  @IsOptional()
  adresse?: string;

  @IsUrl()
  @IsOptional()
  siteWeb?: string;

  @IsString()
  @IsOptional()
  adresseBlockchain?: string;

  @IsBoolean()
  @IsOptional()
  estActive?: boolean = true;
}

export class UpdateUniversiteDto {
  @IsString()
  @IsOptional()
  nom?: string;

  @IsString()
  @IsOptional()
  ville?: string;

  @IsString()
  @IsOptional()
  pays?: string;

  @IsString()
  @IsOptional()
  adresse?: string;

  @IsUrl()
  @IsOptional()
  siteWeb?: string;

  @IsString()
  @IsOptional()
  adresseBlockchain?: string;

  @IsBoolean()
  @IsOptional()
  estActive?: boolean;
}
