import { CreateUtilisateurDto } from './create-utilisateur.dto';
declare const UpdateUtilisateurDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUtilisateurDto>>;
export declare class UpdateUtilisateurDto extends UpdateUtilisateurDto_base {
    derniereConnexion?: Date;
    estActif?: boolean;
}
export declare class LoginUtilisateurDto {
    email: string;
    motDePasse: string;
    derniereConnexion: Date;
}
export {};
