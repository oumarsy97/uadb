import { IsArray, IsString, IsOptional, IsNumber, IsUUID, IsEnum, IsNotEmpty, Min, Max } from 'class-validator';
import { Transform } from 'class-transformer';
import { StatutEmprunt, EtatExemplaire } from 'generated/prisma';

export class CreateEmpruntDto {
  @IsArray()
  @IsUUID('4', { each: true })
  exemplaireIds: string[];

  @IsString()
  @IsNotEmpty()
  empreunteurId: string; // ID utilisateur local OU ID utilisateur externe

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(30)
  dureeEmprunt?: number;

  @IsOptional()
  @IsString()
  universiteEmprunteur?: string;

  @IsOptional()
  @IsString()
  commentaire?: string;
}

export class CreateEmpruntExterneDto {
  @IsArray()
  @IsUUID('4', { each: true })
  exemplaireIds: string[];

  @IsString()
  @IsNotEmpty()
  externUserId: string; // ID de l'utilisateur externe (peut être email, numéro étudiant, etc.)

  @IsString()
  @IsNotEmpty()
  universiteEmprunteur: string; // Nom/code de l'université emprunteuse

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(14) // Maximum 14 jours pour externes
  dureeEmprunt?: number;

  @IsOptional()
  @IsString()
  commentaire?: string;

  // Informations additionnelles pour l'emprunteur externe
  @IsOptional()
  @IsString()
  nomEmprunteur?: string;

  @IsOptional()
  @IsString()
  prenomEmprunteur?: string;

  @IsOptional()
  @IsString()
  emailEmprunteur?: string;

  @IsOptional()
  @IsString()
  telephoneEmprunteur?: string;
}

export class ReturnEmpruntDto {
  @IsUUID()
  empruntId: string;

  @IsArray()
  @IsUUID('4', { each: true })
  exemplaireIds: string[];

  @IsOptional()
  @IsEnum(EtatExemplaire)
  nouvelEtat?: EtatExemplaire;

  @IsOptional()
  @IsString()
  commentaire?: string;

  // Pour les retours externes - informations de vérification
  @IsOptional()
  @IsString()
  responsableRetour?: string; // Qui a géré le retour

  @IsOptional()
  @IsString()
  modeRetour?: string; // EMAIL, COURRIER, EN_PERSONNE, etc.
}

export class ExtendEmpruntDto {
  @IsUUID()
  empruntId: string;

  @IsNumber()
  @Min(1)
  @Max(14) // Maximum 14 jours de prolongation
  nouvelleDuree: number;

  @IsOptional()
  @IsString()
  motifProlongation?: string;
}

export class EmpruntStats {
  totalEmprunts: number;
  empruntsEnCours: number;
  empruntsEnRetard: number;
  empruntsRetournes: number;
  empruntsExternes: number;
  empruntsLocaux?: number;
}

export class GetEmpruntsExternesDto {
  @IsOptional()
  @IsString()
  universiteEmprunteur?: string;

  @IsOptional()
  @IsEnum(StatutEmprunt)
  statut?: StatutEmprunt;

  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @Min(1)
  @Max(100)
  limit?: number = 10;

  @IsOptional()
  @IsString()
  search?: string; // Recherche par externUserId, nom, email, etc.
}

export class ValidateEmpruntExterneDto {
  @IsString()
  @IsNotEmpty()
  externUserId: string;

  @IsString()
  @IsNotEmpty()
  universiteEmprunteur: string;

  @IsOptional()
  @IsString()
  email?: string;
}

// DTO pour les statistiques détaillées des emprunts externes
export class EmpruntExterneStats {
  totalEmpruntsExternes: number;
  empruntsExternesEnCours: number;
  empruntsExternesEnRetard: number;
  empruntsExternesRetournes: number;
  universitesPartenaires: string[];
  repartitionParUniversite: { universite: string; count: number; }[];
  tauxRetourEnTemps: number; // Pourcentage de retours dans les délais
}

// DTO pour l'historique des communications avec les emprunteurs externes
export class CommunicationExterneDto {
  @IsUUID()
  empruntId: string;

  @IsString()
  @IsEnum(['EMAIL', 'COURRIER', 'TELEPHONE', 'AUTRE'])
  typeCommunication: string;

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsOptional()
  @IsString()
  reponse?: string;

  @IsOptional()
  @IsString()
  responsable?: string; // Qui a initié la communication
}

// DTO pour les pénalités
export class PenaliteDto {
  @IsUUID()
  empruntId: string;

  @IsNumber()
  @Min(0)
  montant: number;

  @IsString()
  @IsEnum(['RETARD', 'DETERIORATION', 'PERTE', 'AUTRE'])
  motif: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  @IsEnum(['IMPAYEE', 'PAYEE', 'ANNULEE'])
  statut?: string = 'IMPAYEE';
}