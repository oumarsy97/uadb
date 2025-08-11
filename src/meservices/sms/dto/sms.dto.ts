// src/sms/dto/sms.dto.ts
import { IsString, IsNotEmpty, IsOptional, Matches } from 'class-validator';

export class SendSmsDto {
    @IsString()
    @IsNotEmpty({ message: 'Le numéro de téléphone est requis' })
    @Matches(/^(\+221|221)?[67][0-9]{8}$/, { 
        message: 'Le numéro de téléphone doit être un numéro sénégalais valide' 
    })
    to: string;

    @IsString()
    @IsNotEmpty({ message: 'Le texte du SMS est requis' })
    text: string;

    @IsOptional()
    @IsString()
    from?: string;
}

export class BulkSmsDto {
    @IsString({ each: true })
    @IsNotEmpty({ each: true })
    to: string[];

    @IsString()
    @IsNotEmpty({ message: 'Le texte du SMS est requis' })
    text: string;

    @IsOptional()
    @IsString()
    from?: string;
}