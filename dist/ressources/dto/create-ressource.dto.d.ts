import { NiveauAcces } from 'generated/prisma';
export declare enum TypeValidation {
    EN_ATTENTE = "EN_ATTENTE",
    VALIDE = "VALIDE",
    REJETE = "REJETE"
}
export declare class CreateRessourceDto {
    titre: string;
    description: string;
    langue?: string;
    urlFichier?: string;
    urlFichierLocal?: string;
    format?: string;
    image?: string;
    niveauAcces?: NiveauAcces;
    datePublication?: Date;
    motsCles: string;
    nomAuteur?: string;
    auteurId: string;
    categorieId: string;
    estArchive?: boolean;
    id: string;
}
export declare class UpdateRessourceDto {
    titre?: string;
    description?: string;
    langue?: string;
    urlFichier?: string;
    urlFichierLocal?: string;
    format?: string;
    image?: string;
    niveauAcces?: NiveauAcces;
    datePublication?: Date;
    motsCles?: string;
    auteurId?: string;
    universiteId?: string;
    categorieId?: string;
    estArchive?: boolean;
    validation?: TypeValidation;
}
export declare class SearchRessourceDto {
    page?: number;
    limit?: number;
    search?: string;
    langue?: string;
    niveauAcces?: NiveauAcces;
    estArchive?: boolean;
    auteurId?: string;
    categorieId?: string;
    orderBy?: string;
    orderDirection?: 'asc' | 'desc';
}
