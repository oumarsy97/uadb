// src/utilisateurs/dto/create-utilisateur.dto.ts
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
} from 'class-validator';
import { RoleUser } from 'generated/prisma';

export class CreateUtilisateurDto {
  @IsEmail({}, { message: 'Format email invalide' })
  @IsNotEmpty({ message: 'Email obligatoire' })
  email: string;

  @IsString()
  @Length(8, 32, {
    message: 'Le mot de passe doit contenir entre 8 et 32 caractères',
  })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
    message:
      'Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule et un chiffre',
  })
  motDePasse: string;

  @IsString()
  @IsNotEmpty({ message: 'Nom obligatoire' })
  nom: string;

  @IsString()
  @IsNotEmpty({ message: 'Prénom obligatoire' })
  prenom: string;

  @IsEnum(RoleUser, { message: 'Rôle utilisateur invalide' })
  role: RoleUser;

  @IsString()
  @IsNotEmpty({ message: 'Département obligatoire' })
  departement: string;

  @IsString()
  @IsNotEmpty({ message: 'Faculté obligatoire' })
  faculte: string;

  @IsOptional()
  @IsString()
  specialite?: string;

  @IsOptional()
  @IsString()
  niveauEtudes?: string;
}
