import { IsEmail, IsEnum, IsString, IsOptional, IsBoolean } from 'class-validator';
import { RoleUser } from '../../../generated/prisma';

export class CreateUtilisateurDto {
  @IsEmail()
  email: string;

  @IsString()
  motDePasse: string;

  @IsString()
  nom: string;

  @IsString()
  prenom: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsEnum(RoleUser)
  role: RoleUser;

  @IsString()
  departement: string;

  @IsString()
  faculte: string;

  @IsOptional()
  @IsString()
  specialite?: string;

  @IsOptional()
  @IsString()
  niveauEtudes?: string;

  @IsString()
  universite: string;

 
}