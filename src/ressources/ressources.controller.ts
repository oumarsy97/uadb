import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RessourcesService } from './ressources.service';
import { CreateRessourceDto, UpdateRessourceDto, SearchRessourceDto } from './dto/create-ressource.dto';
import { JwtService } from '@nestjs/jwt';

@Controller()
export class RessourcesController {
  constructor(
    private readonly ressourcesService: RessourcesService,
    private readonly jwtService: JwtService
  ) {}

  /**
   * Extrait l'ID utilisateur depuis le token JWT
   * @param token - Le token JWT
   * @returns L'ID de l'utilisateur
   */
  private extractUserIdFromToken(token: string): string {
    try {
      // Enlever le préfixe "Bearer " s'il existe
      const cleanToken = token.replace(/^Bearer\s+/, '');
      
      // Décoder le token
      const payload = this.jwtService.decode(cleanToken) as any;
      
      if (!payload || !payload.sub && !payload.id && !payload.userId) {
        throw new Error('Token invalide: ID utilisateur non trouvé');
      }
      
      // Retourner l'ID utilisateur (peut être dans sub, id, ou userId selon votre implémentation)
      return payload.sub || payload.id || payload.userId;
    } catch (error) {
      throw new Error(`Erreur lors de l'extraction de l'ID utilisateur: ${error.message}`);
    }
  }

  

  /**
   * Alternative pour générer un ISRN basé sur timestamp + random
   * @returns Un ISRN au format UADB-XXXXXXX
   */
 

  @MessagePattern('createRessource')
  async create(@Payload() data: { createRessourceDto: CreateRessourceDto; token: string }) {
    try {
      const { createRessourceDto, token } = data;
      
      // Extraire l'ID utilisateur depuis le token
      const userId = this.extractUserIdFromToken(token);
      
      // Générer un ISRN unique
      
      console.log('ID Utilisateur:', userId);
      console.log('Données ressource:', createRessourceDto);
      
      // Ajouter l'ID utilisateur et l'ISRN aux données de création
      const enrichedDto = {
        ...createRessourceDto,
        auteurId: userId, // ou le nom de champ approprié
      };
      
      return await this.ressourcesService.create(enrichedDto);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('findAllRessources')
  async findAll(@Payload() data: { options?: SearchRessourceDto; token?: string }) {
    try {
      const { options = {}, token } = data;
      
      // Si un token est fourni, extraire l'ID utilisateur pour filtrer ou loguer
      if (token) {
        const userId = this.extractUserIdFromToken(token);
        console.log('Recherche effectuée par utilisateur:', userId);
      }
      
      return await this.ressourcesService.findAll(options);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('findRessourceById')
  async findOne(@Payload() data: { id: string; token?: string }) {
    try {
      const { id, token } = data;
      
      // Si un token est fourni, extraire l'ID utilisateur
      if (token) {
        const userId = this.extractUserIdFromToken(token);
        console.log('Consultation par utilisateur:', userId);
      }
      
      return await this.ressourcesService.findOne(id);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('updateRessource')
  async update(@Payload() data: { id: string; updateData: UpdateRessourceDto; token: string }) {
    try {
      const { id, updateData, token } = data;
      
      // Extraire l'ID utilisateur depuis le token
      const userId = this.extractUserIdFromToken(token);
      
      console.log('Modification par utilisateur:', userId);
      
      return await this.ressourcesService.update(id, updateData);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('removeRessource')
  async remove(@Payload() data: { id: string; token: string }) {
    try {
      const { id, token } = data;
      
      // Extraire l'ID utilisateur depuis le token
      const userId = this.extractUserIdFromToken(token);
      
      console.log('Suppression par utilisateur:', userId);
      
      return await this.ressourcesService.remove(id);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('findRessourcesByAuteur')
  async findByAuteur(@Payload() data: { auteurId: string; options?: SearchRessourceDto; token?: string }) {
    try {
      const { auteurId, options, token } = data;
      
      if (token) {
        const userId = this.extractUserIdFromToken(token);
        console.log('Recherche par auteur effectuée par:', userId);
      }
      
      return await this.ressourcesService.findByAuteur(auteurId, options);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('findRessourcesByUniversite')
  async findByUniversite(@Payload() data: { universiteId: string; options?: SearchRessourceDto; token?: string }) {
    try {
      const { universiteId, options, token } = data;
      
      if (token) {
        const userId = this.extractUserIdFromToken(token);
        console.log('Recherche par université effectuée par:', userId);
      }
      
      return await this.ressourcesService.findByUniversite(universiteId, options);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('toggleArchivageRessource')
  async toggleArchivage(@Payload() data: { id: string; token: string }) {
    try {
      const { id, token } = data;
      
      // Extraire l'ID utilisateur depuis le token
      const userId = this.extractUserIdFromToken(token);
      
      console.log('Toggle archivage par utilisateur:', userId);
      
      return await this.ressourcesService.toggleArchivage(id);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  //les n ressources les mieux noté
  @MessagePattern('findTopRatedRessources')
  async findTopRatedRessources(options?: SearchRessourceDto) {
    return await this.ressourcesService.findTopRated(options);
  }
  // les n ressources les plus consultées
  @MessagePattern('findTopAccessedRessources')
  async findTopAccessedRessources(options?: SearchRessourceDto) {
    return await this.ressourcesService.findTopAccessed(options);
  }

  //incrementer le nombre de vues d'une ressource
  @MessagePattern('incrementRessourceViews')
  async incrementRessourceViews(@Payload() data: { id: string; token?: string }) {
    try {
      const { id, token } = data;
      
      // Si un token est fourni, extraire l'ID utilisateur pour loguer
      if (token) {
        const userId = this.extractUserIdFromToken(token);
        console.log('Incrémentation de vues par utilisateur:', userId);
      }
      
      return await this.ressourcesService.incrementVue(id);
    }
    catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  // incrementer le nombre de téléchargements d'une ressource
  @MessagePattern('incrementRessourceDownloads')
  async incrementRessourceDownloads(@Payload() data: { id: string; token?: string }) {
    try {
      const { id, token } = data;
      
      // Si un token est fourni, extraire l'ID utilisateur pour loguer
      if (token) {
        const userId = this.extractUserIdFromToken(token);
      }
      
      return await this.ressourcesService.incrementTelechargement(id);
    }
    catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  
}