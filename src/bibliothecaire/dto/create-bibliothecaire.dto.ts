import { IsEmail, IsString, IsOptional, IsEnum } from "class-validator";
import { RoleUser } from "generated/prisma";

export class CreateBibliothecaireDto {
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
          telephone: string;
}
