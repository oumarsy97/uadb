import { EtatExemplaire, NiveauAcces } from 'generated/prisma';
export declare class CreateExemplairePhysiqueDto {
    titre: string;
    description: string;
    langue?: string;
    urlFichier?: string;
    urlFichierLocal?: string;
    format: string;
    image?: string;
    niveauAcces?: NiveauAcces;
    datePublication?: Date;
    motsCles: string;
    categorieId: string;
    auteurId?: string;
    ressourceId?: string;
    cote: string;
    etat?: EtatExemplaire;
    disponible?: boolean;
    localisation?: string;
    dateAcquisition?: Date;
    dureeMaxEmpruntExterne?: number;
    nbMaxExemplairesExterne?: number;
}
