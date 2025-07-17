import { RoleUser } from "generated/prisma";
export declare class CreateEnseignantDto {
    email: string;
    motDePasse: string;
    nom: string;
    prenom: string;
    image?: string;
    role: RoleUser;
    telephone: string;
    specialite?: string;
    dateNaissance: string;
}
