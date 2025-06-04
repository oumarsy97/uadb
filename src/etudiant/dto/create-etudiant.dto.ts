import { IsString, IsOptional, IsEnum, IsDateString, IsNotEmpty, ValidateNested, IsObject, IsEmail } from 'class-validator';
import { Type } from 'class-transformer';
import { NiveauEtudes, RoleUser } from 'generated/prisma';
import { CreateUtilisateurDto } from 'src/users/dto/create-utilisateur.dto';

export class CreateEtudiantDto {
   @IsEmail()
    email: string;
  
    @IsString()
    motDePasse: string;
  
    @IsString()
    nom: string;
  
    @IsString()
    prenom: string;
  
    @IsString()
    @IsOptional()
    telephone?: string;
  
    @IsOptional()
    @IsString()
    image?: string;
  
    @IsEnum(RoleUser)
    role: RoleUser;

  @IsDateString({}, { message: 'La date de naissance doit être une date valide' })
  @IsNotEmpty({ message: 'La date de naissance est requise' })
  dateNaissance: string;

  @IsString({ message: 'Le département doit être une chaîne de caractères' })
  @IsOptional()
  departement?: string;

  @IsString({ message: 'La faculté doit être une chaîne de caractères' })
  @IsOptional()
  faculte?: string;

  @IsString({ message: 'La spécialité doit être une chaîne de caractères' })
  @IsOptional()
  specialite?: string;

  @IsEnum(NiveauEtudes, { message: 'Le niveau d\'études doit être valide (LICENCE, MASTER, DOCTORAT, POSTDOCTORAT)' })
  @IsOptional()
  niveauEtudes?: NiveauEtudes;
  @IsString({ message: 'L\'ID de l\'université doit être une chaîne de caractères' })
  universiteId: string;
}

export class UpdateEtudiantDto {
  @IsDateString({}, { message: 'La date de naissance doit être une date valide' })
  @IsOptional()
  dateNaissance?: string;

  @IsString({ message: 'Le département doit être une chaîne de caractères' })
  @IsOptional()
  departement?: string;

  @IsString({ message: 'La faculté doit être une chaîne de caractères' })
  @IsOptional()
  faculte?: string;

  @IsString({ message: 'La spécialité doit être une chaîne de caractères' })
  @IsOptional()
  specialite?: string;

    @IsString({ message: 'L\'ID de l\'université doit être une chaîne de caractères' })
  @IsOptional()
  universiteId?: string;

  @IsEnum(NiveauEtudes, { message: 'Le niveau d\'études doit être valide (LICENCE, MASTER, DOCTORAT, POSTDOCTORAT)' })
  @IsOptional()
  niveauEtudes?: NiveauEtudes;

  @IsObject()
  @IsOptional()
  userData?: Partial<CreateUtilisateurDto>;
}

export class EtudiantQueryDto {
  @IsOptional()
  @IsString()
  page?: string;

  @IsOptional()
  @IsString()
  limit?: string;

  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsString()
  departement?: string;

  @IsOptional()
  @IsString()
  faculte?: string;

  @IsOptional()
  @IsEnum(NiveauEtudes)
  niveauEtudes?: NiveauEtudes;

  @IsOptional()
  @IsString()
  universiteId?: string;
}