import { EtatExemplaire } from "generated/prisma";
export declare class CreateEmpruntDto {
    exemplaireIds: string[];
    userId: string;
    empreunteurId: string;
    dureeEmprunt?: number;
    universiteEmprunteur?: string;
}
export declare class ReturnEmpruntDto {
    empruntId: string;
    exemplaireIds: string[];
    commentaire?: string;
    nouvelEtat?: EtatExemplaire;
}
export declare class ExtendEmpruntDto {
    empruntId: string;
    nouvelleDuree: number;
    motif?: string;
}
export interface EmpruntStats {
    totalEmprunts: number;
    empruntsEnCours: number;
    empruntsEnRetard: number;
    empruntsRetournes: number;
    empruntsExternes: number;
}
