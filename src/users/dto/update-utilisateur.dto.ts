// src/utilisateurs/dto/update-utilisateur.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateUtilisateurDto } from './create-utilisateur.dto';
import { IsBoolean, IsDate, IsOptional } from 'class-validator';

export class UpdateUtilisateurDto extends PartialType(CreateUtilisateurDto) {
  @IsOptional()
  @IsDate()
  derniereConnexion?: Date;

  @IsOptional()
  @IsBoolean()
  estActif?: boolean;
}

// src/utilisateurs/dto/login-utilisateur.dto.ts
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginUtilisateurDto {
  @IsEmail({}, { message: 'Format email invalide' })
  @IsNotEmpty({ message: 'Email obligatoire' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Mot de passe obligatoire' })
  motDePasse: string;

  @IsDate()
  @IsOptional()
  derniereConnexion: Date;
}
