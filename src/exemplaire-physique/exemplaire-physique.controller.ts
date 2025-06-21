import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ExemplairePhysiqueService } from './exemplaire-physique.service';
import { CreateExemplairePhysiqueDto } from './dto/create-exemplaire-physique.dto';
import { SearchExemplairePhysiqueDto, UpdateExemplairePhysiqueDto } from './dto/update-exemplaire-physique.dto';
import { JwtHelperService } from 'src/JwtHelper.service';

@Controller()
export class ExemplairePhysiqueController {
  constructor(
    private readonly exemplairePhysiqueService: ExemplairePhysiqueService,
    private readonly jwtHelperService: JwtHelperService
  ) {}

  @MessagePattern('createExemplairePhysique')
  async create(@Payload() data: { createExemplairePhysiqueDto: CreateExemplairePhysiqueDto; token: string }) {
    try {
      const { createExemplairePhysiqueDto, token } = data;
      
      // Extraire l'ID utilisateur depuis le token
      const userId = this.jwtHelperService.extractUserIdFromToken(token);
      
      console.log('Création d\'exemplaire physique par utilisateur:', userId);
      console.log('Données exemplaire physique:', createExemplairePhysiqueDto);
      
      // Passer les données nettoyées au service
      return await this.exemplairePhysiqueService.create(createExemplairePhysiqueDto, userId);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('findAllExemplairesPhysiques')
  async findAll(@Payload() data: { options?: SearchExemplairePhysiqueDto; token?: string }) {
    try {
      const { options = {}, token } = data;
      
      // Si un token est fourni, extraire l'ID utilisateur pour filtrer ou loguer
      if (token) {
        const userId = this.jwtHelperService.extractUserIdFromToken(token);
        console.log('Recherche d\'exemplaires physiques effectuée par utilisateur:', userId);
      }
      
      return await this.exemplairePhysiqueService.findAll(options);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('findExemplairePhysiqueById')
  async findOne(@Payload() data: { id: string; token?: string }) {
    try {
      const { id, token } = data;
      
      // Si un token est fourni, extraire l'ID utilisateur
      if (token) {
        const userId = this.jwtHelperService.extractUserIdFromToken(token);
        console.log('Consultation d\'exemplaire physique par utilisateur:', userId);
      }
      
      return await this.exemplairePhysiqueService.findOne(id);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('updateExemplairePhysique')
  async update(@Payload() data: { id: string; updateData: UpdateExemplairePhysiqueDto; token: string }) {
    try {
      const { id, updateData, token } = data;
      
      // Extraire l'ID utilisateur depuis le token
      const userId = this.jwtHelperService.extractUserIdFromToken(token);

      console.log('Modification d\'exemplaire physique par utilisateur:', userId);
      
      return await this.exemplairePhysiqueService.update(id, updateData);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('removeExemplairePhysique')
  async remove(@Payload() data: { id: string; token: string }) {
    try {
      const { id, token } = data;
      
      // Extraire l'ID utilisateur depuis le token
      const userId = this.jwtHelperService.extractUserIdFromToken(token);

      console.log('Suppression d\'exemplaire physique par utilisateur:', userId);
      
      return await this.exemplairePhysiqueService.remove(id);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('findExemplairesPhysiquesByRessource')
  async findByRessource(@Payload() data: { ressourceId: string; options?: SearchExemplairePhysiqueDto; token?: string }) {
    try {
      const { ressourceId, options, token } = data;
      if (token) {
        const userId = this.jwtHelperService.extractUserIdFromToken(token);
        console.log('Recherche d\'exemplaires physiques par ressource effectuée par:', userId);
      }

      return await this.exemplairePhysiqueService.findByRessource(ressourceId, options);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('findExemplairePhysiqueByQRCode')
  async findByQRCode(@Payload() data: { qrCode: string; token?: string }) {
    try {
      const { qrCode, token } = data;
      if (token) {
        const userId = this.jwtHelperService.extractUserIdFromToken(token);
        console.log('Recherche d\'exemplaire physique par QR Code effectuée par:', userId);
      }

      return await this.exemplairePhysiqueService.findByQRCode(qrCode);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('toggleDisponibiliteExemplairePhysique')
  async toggleDisponibilite(@Payload() data: { id: string; token: string }) {
    try {
      const { id, token } = data;
      
      // Extraire l'ID utilisateur depuis le token
      const userId = this.jwtHelperService.extractUserIdFromToken(token);

      console.log('Toggle disponibilité d\'exemplaire physique par utilisateur:', userId);
      
      return await this.exemplairePhysiqueService.toggleDisponibilite(id);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('getStatistiquesExemplairesPhysiques')
  async getStatistiques(@Payload() data: { ressourceId?: string; token?: string }) {
    try {
      const { ressourceId, token } = data;
      if (token) {
        const userId = this.jwtHelperService.extractUserIdFromToken(token);
        console.log('Consultation des statistiques d\'exemplaires physiques par utilisateur:', userId);
      }

      return await this.exemplairePhysiqueService.getStatistiques(ressourceId);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }
}