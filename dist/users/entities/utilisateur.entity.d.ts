import { RoleUser } from "generated/prisma";
export declare class User {
    id: string;
    email: string;
    motDePasse: string;
    nom: string;
    prenom: string;
    role: RoleUser;
    departement: string;
    faculte: string;
    specialite?: string;
    niveauEtudes?: string;
    dateInscription: Date;
    derniereConnexion?: Date;
    estActif: boolean;
}
