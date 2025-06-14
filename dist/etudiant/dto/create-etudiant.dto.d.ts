import { NiveauEtudes, RoleUser } from 'generated/prisma';
import { CreateUtilisateurDto } from 'src/users/dto/create-utilisateur.dto';
export declare class CreateEtudiantDto {
    email: string;
    motDePasse: string;
    nom: string;
    prenom: string;
    telephone?: string;
    image?: string;
    role: RoleUser;
    dateNaissance: string;
    niveauEtudes?: NiveauEtudes;
    filiereId: string;
}
export declare class UpdateEtudiantDto {
    dateNaissance?: string;
    departement?: string;
    faculte?: string;
    specialite?: string;
    universiteId?: string;
    niveauEtudes?: NiveauEtudes;
    userData?: Partial<CreateUtilisateurDto>;
}
export declare class EtudiantQueryDto {
    page?: string;
    limit?: string;
    search?: string;
    departement?: string;
    faculte?: string;
    niveauEtudes?: NiveauEtudes;
    universiteId?: string;
}
