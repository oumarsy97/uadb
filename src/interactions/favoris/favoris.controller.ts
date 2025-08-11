import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FavorisService } from './favoris.service';
import { CreateFavorisDto, UpdateFavorisDto } from './dto/create-favoris.dto';
import { JwtHelperService } from 'src/JwtHelper.service';

@Controller()
export class FavorisController {
  constructor(
    private readonly favorisService: FavorisService,
    private readonly jwtHelperService: JwtHelperService
  ) {}

  @MessagePattern('createFavoris')
  create(@Payload() data: { createFavorisDto: CreateFavorisDto; token: string }) {
    const { createFavorisDto, token } = data;
    
    // Extraire l'ID utilisateur du token
    const userId = this.jwtHelperService.extractUserIdFromToken(token);
    
    // Mettre à jour le DTO avec l'ID utilisateur authentifié
    const favorisData = {
      ...createFavorisDto,
      userId, // Remplacer par l'ID du token
    };
    
    return this.favorisService.create(favorisData);
  }

  @MessagePattern('findAllFavoris')
  findAll() {
    return this.favorisService.findAll();
  }

  @MessagePattern('findOneFavoris')
  findOne(@Payload() id: string) {
    return this.favorisService.findOne(id);
  }

  @MessagePattern('updateFavoris')
  update(@Payload() data: { updateFavorisDto: UpdateFavorisDto; token: string }) {
    const { updateFavorisDto, token } = data;
    
    // Optionnel : vérifier que l'utilisateur peut modifier ce favori
    const userId = this.jwtHelperService.extractUserIdFromToken(token);
    
    return this.favorisService.update(updateFavorisDto.id, updateFavorisDto);
  }

  @MessagePattern('removeFavoris')
  remove(@Payload() data: { id: string; token: string }) {
    const { id, token } = data;
    
    // Optionnel : vérifier que l'utilisateur peut supprimer ce favori
    const userId = this.jwtHelperService.extractUserIdFromToken(token);
    
    return this.favorisService.remove(id);
  }

  /**
   * Récupère tous les favoris de l'utilisateur connecté
   */
  @MessagePattern('mesFavoris')
  async mesFavoris(@Payload() data: { token: string }) {
    const { token } = data;
    
    // Extraire l'ID utilisateur du token
    const userId = this.jwtHelperService.extractUserIdFromToken(token);
    
    // Récupérer les favoris de l'utilisateur
    return this.favorisService.findAllByUser(userId);
  }

  /**
   * Vérifie si une ressource est en favori pour l'utilisateur connecté
   */
  @MessagePattern('isFavorite')
  async isFavorite(@Payload() data: { ressourceId: string; token: string }) {
    const { ressourceId, token } = data;
    
    // Extraire l'ID utilisateur du token
    const userId = this.jwtHelperService.extractUserIdFromToken(token);
    
    // Vérifier si la ressource est en favori
    return this.favorisService.isFavorite(userId, ressourceId);
  }

  /**
   * Supprime tous les favoris de l'utilisateur connecté
   */
  @MessagePattern('removeAllMyFavoris')
  async removeAllMyFavoris(@Payload() data: { token: string }) {
    const { token } = data;
    
    // Extraire l'ID utilisateur du token
    const userId = this.jwtHelperService.extractUserIdFromToken(token);
    
    // Supprimer tous les favoris de l'utilisateur
    return this.favorisService.removeAllByUser(userId);
  }
}