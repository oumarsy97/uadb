import { StatutEmprunt, EtatExemplaire } from 'generated/prisma';
export declare class CreateEmpruntDto {
    exemplaireIds: string[];
    empreunteurId: string;
    dureeEmprunt?: number;
    universiteEmprunteur?: string;
    commentaire?: string;
}
export declare class CreateEmpruntExterneDto {
    exemplaireIds: string[];
    externUserId: string;
    universiteEmprunteur: string;
    dureeEmprunt?: number;
    commentaire?: string;
    nomEmprunteur?: string;
    prenomEmprunteur?: string;
    emailEmprunteur?: string;
    telephoneEmprunteur?: string;
}
export declare class ReturnEmpruntDto {
    empruntId: string;
    exemplaireIds: string[];
    nouvelEtat?: EtatExemplaire;
    commentaire?: string;
    responsableRetour?: string;
    modeRetour?: string;
}
export declare class ExtendEmpruntDto {
    empruntId: string;
    nouvelleDuree: number;
    motifProlongation?: string;
}
export declare class EmpruntStats {
    totalEmprunts: number;
    empruntsEnCours: number;
    empruntsEnRetard: number;
    empruntsRetournes: number;
    empruntsExternes: number;
    empruntsLocaux?: number;
}
export declare class GetEmpruntsExternesDto {
    universiteEmprunteur?: string;
    statut?: StatutEmprunt;
    page?: number;
    limit?: number;
    search?: string;
}
export declare class ValidateEmpruntExterneDto {
    externUserId: string;
    universiteEmprunteur: string;
    email?: string;
}
export declare class EmpruntExterneStats {
    totalEmpruntsExternes: number;
    empruntsExternesEnCours: number;
    empruntsExternesEnRetard: number;
    empruntsExternesRetournes: number;
    universitesPartenaires: string[];
    repartitionParUniversite: {
        universite: string;
        count: number;
    }[];
    tauxRetourEnTemps: number;
}
export declare class CommunicationExterneDto {
    empruntId: string;
    typeCommunication: string;
    message: string;
    reponse?: string;
    responsable?: string;
}
export declare class PenaliteDto {
    empruntId: string;
    montant: number;
    motif: string;
    description?: string;
    statut?: string;
}
