import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateFavorisDto {
  @IsOptional() // Maintenant optionnel car récupéré du token
  @IsString()
  userId?: string;

  @IsString()
  @IsNotEmpty()
  ressourceId: string;

  @IsOptional()
  @IsString()
  universiteRess?: string; // Université source de la ressource (si externe)

  @IsOptional()
  @IsString()
  universiteUser?: string; // Université de l'utilisateur (si externe)
}

export class UpdateFavorisDto {
  @IsOptional()
  @IsString()
  universiteRess?: string;

  @IsOptional()
  @IsString()
  universiteUser?: string;
  
  id: string;
}

export class FavorisQueryDto {
  @IsOptional()
  @IsString()
  userId?: string;

  @IsOptional()
  @IsString()
  ressourceId?: string;

  @IsOptional()
  @IsString()
  universiteRess?: string;

  @IsOptional()
  @IsString()
  universiteUser?: string;
}

export class FavorisResponseDto {
  id: string;
  userId: string;
  ressourceId: string;
  universiteRess?: string;
  universiteUser?: string;
  isRessourceExternal: boolean;
  isUserExternal: boolean;
  ressourceInfo?: {
    id: string;
    title?: string;
    isExternal: boolean;
    universite?: string;
  };
  userInfo?: {
    id: string;
    email?: string;
    isExternal: boolean;
    universite?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

// Nouveau DTO pour les réponses de favoris utilisateur
export class MesFavorisResponseDto {
  favorisLocaux: Array<{
    id: string;
    userId: string;
    ressourceId: string;
    universiteRess?: string;
    universiteUser?: string;
    isLocal: boolean;
    sourceUniversite: string | null;
    ressource?: any;
    user?: any;
    createdAt: Date;
    updatedAt: Date;
  }>;
  
  favorisExternes: Array<{
    id: string;
    userId: string;
    ressourceId: string;
    universiteRess?: string;
    universiteUser?: string;
    isLocal: boolean;
    sourceUniversite: string;
    ressourceExterne: {
      id: string;
      universiteSource: string;
    };
    createdAt: Date;
    updatedAt: Date;
  }>;
  
  total: number;
}

// DTO pour la vérification de favori
export class IsFavoriteResponseDto {
  isFavorite: boolean;
  ressourceId: string;
  userId: string;
}