import { IsEmail, IsEnum, IsString, IsOptional, IsBoolean, IsNotEmpty } from 'class-validator';
import { RoleUser } from '../../../generated/prisma';
import { ApiProperty } from '@nestjs/swagger';

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

 
}

export class LoginDataDto {
  @ApiProperty({
    description: "Email de l'utilisateur",
    example: 'utilisateur@universite.edu',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: "Mot de passe de l'utilisateur",
    example: 'MotDePasse123',
  })
  @IsNotEmpty()
  @IsString()
  motDePasse: string;

  @ApiProperty({
    description: "Code de l'université",
    example: 'UCAD',
  })
  @IsNotEmpty()
  @IsString()
  universite: string;
}
