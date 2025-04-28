import { RoleUser } from '../../../generated/prisma';
export declare class CreateUtilisateurDto {
    email: string;
    motDePasse: string;
    nom: string;
    prenom: string;
    image?: string;
    role: RoleUser;
    departement: string;
    faculte: string;
    specialite?: string;
    niveauEtudes?: string;
    universite: string;
}
