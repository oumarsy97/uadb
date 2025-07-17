import { RoleUser } from 'generated/prisma';
export declare class CreateReglePretDto {
    roleUtilisateur: RoleUser;
    nombreMaxOuvrages?: number;
    dureeEmpruntJours?: number;
    nbRenouvellements?: number;
    penaliteRetardJours?: boolean;
    estActif?: boolean;
}
export declare class UpdateReglePretDto {
    roleUtilisateur?: RoleUser;
    nombreMaxOuvrages?: number;
    dureeEmpruntJours?: number;
    nbRenouvellements?: number;
    penaliteRetardJours?: boolean;
    estActif?: boolean;
}
export declare class ReglePretResponseDto {
    id: string;
    universiteId: string;
    roleUtilisateur: RoleUser;
    nombreMaxOuvrages: number;
    dureeEmpruntJours: number;
    nbRenouvellements: number;
    penaliteRetardJours: boolean;
    estActif: boolean;
    createdAt: Date;
    updatedAt: Date;
    universite?: {
        id: string;
        nom: string;
    };
}
