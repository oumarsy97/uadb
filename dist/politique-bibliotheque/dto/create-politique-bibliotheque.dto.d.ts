export declare class CreatePolitiqueBibliothequeDto {
    universiteId: string;
    politiqueRetour: string;
    politiquePerte: string;
    penaliteRetard: string;
    estActive?: boolean;
}
export declare class UpdatePolitiqueBibliothequeDto {
    politiqueRetour?: string;
    politiquePerte?: string;
    penaliteRetard?: string;
    estActive?: boolean;
}
export declare class PolitiqueBibliothequeResponseDto {
    id: string;
    universiteId: string;
    politiqueRetour: string;
    politiquePerte: string;
    penaliteRetard: string;
    estActive: boolean;
    dateMiseAJour: Date;
    createdAt: Date;
    updatedAt: Date;
    universite?: {
        id: string;
        nom: string;
    };
}
