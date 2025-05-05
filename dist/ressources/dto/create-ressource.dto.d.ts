import { NiveauAcces, TypeRessource } from "generated/prisma";
export declare class CreateRessourceDto {
    titre: string;
    description: string;
    type: TypeRessource;
    langue?: string;
    urlFichier: string;
    format: string;
    motsCles: string;
    auteurId?: string;
    universiteId: string;
    image?: string;
    niveauAcces?: NiveauAcces;
    nomAuteurExterne?: string;
    prenomAuteurExterne?: string;
    affiliationAuteurExterne?: string;
    urlFichierLocal?: string;
}
export declare class UpdateRessourceDto {
    titre?: string;
    description?: string;
    type?: TypeRessource;
    langue?: string;
    urlFichier?: string;
    format?: string;
    estPublique?: boolean;
    motsCles?: string;
    auteurId?: string;
    universiteId?: string;
    image?: string;
    niveauAcces?: NiveauAcces;
    estValide?: boolean;
    estArchive?: boolean;
    nomAuteurExterne?: string;
    prenomAuteurExterne?: string;
    affiliationAuteurExterne?: string;
}
export declare class SearchRessourceDto {
    page?: number;
    limit?: number;
    search?: string;
    type?: TypeRessource;
    langue?: string;
    universiteId?: string;
    estPublique?: boolean;
    niveauAcces?: NiveauAcces;
    estValide?: boolean;
    estArchive?: boolean;
    auteurId?: string;
    orderBy?: string;
    orderDirection?: 'asc' | 'desc';
}
