import { RoleUser } from "generated/prisma";
export declare class CreateBibliothecaireDto {
    email: string;
    motDePasse: string;
    nom: string;
    prenom: string;
    image?: string;
    role: RoleUser;
    telephone: string;
}
