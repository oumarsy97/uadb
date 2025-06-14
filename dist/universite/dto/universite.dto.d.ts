export declare class CreateUniversiteDto {
    nom: string;
    ville: string;
    adresse?: string;
    siteWeb?: string;
}
export declare class UpdateUniversiteDto {
    nom?: string;
    ville?: string;
    pays?: string;
    adresse?: string;
    siteWeb?: string;
    adresseBlockchain?: string;
    estActive?: boolean;
}
