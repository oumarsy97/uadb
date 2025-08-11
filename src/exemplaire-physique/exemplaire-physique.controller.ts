import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ExemplairePhysiqueService } from './exemplaire-physique.service';
import { CreateExemplairePhysiqueDto } from './dto/create-exemplaire-physique.dto';
import { SearchExemplairePhysiqueDto, UpdateExemplairePhysiqueDto } from './dto/update-exemplaire-physique.dto';
import { JwtHelperService } from 'src/JwtHelper.service';
import { EtatExemplaire } from 'generated/prisma';

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
      
      return await this.exemplairePhysiqueService.create(createExemplairePhysiqueDto, userId);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }
  @MessagePattern('findExemplairesPhysiquesDisponilbles')
  async findDisponibles(@Payload() data: { options?: SearchExemplairePhysiqueDto; token?: string }) {
    try {
      const { options = {}, token } = data;
      
      if (token) {
        const userId = this.jwtHelperService.extractUserIdFromToken(token);
        console.log('Recherche d\'exemplaires physiques disponibles effectuée par utilisateur:', userId);
      }
      
      return await this.exemplairePhysiqueService.findDisponibles();
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

  @MessagePattern('updateDisponibiliteExemplairePhysique')
  async updateDisponibilite(@Payload() data: { id: string; quantite: number; token: string }) {
    try {
      const { id, quantite, token } = data;
      
      const userId = this.jwtHelperService.extractUserIdFromToken(token);
      console.log('Mise à jour de la disponibilité d\'exemplaire physique par utilisateur:', userId);
      
      return await this.exemplairePhysiqueService.updateDisponibilite(id, quantite);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('checkDisponibiliteExemplairePhysique')
  async isDisponible(@Payload() data: { id: string; quantiteDemandee?: number; token?: string }) {
    try {
      const { id, quantiteDemandee = 1, token } = data;
      
      if (token) {
        const userId = this.jwtHelperService.extractUserIdFromToken(token);
        console.log('Vérification de disponibilité d\'exemplaire physique par utilisateur:', userId);
      }
      
      const disponible = await this.exemplairePhysiqueService.isDisponible(id, quantiteDemandee);
      return { disponible };
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

  @MessagePattern('ajusterStockExemplairePhysique')
  async ajusterStock(@Payload() data: { id: string; nouveauNombre: number; token: string }) {
    try {
      const { id, nouveauNombre, token } = data;
      
      const userId = this.jwtHelperService.extractUserIdFromToken(token);
      console.log('Ajustement du stock d\'exemplaire physique par utilisateur:', userId);
      
      return await this.exemplairePhysiqueService.ajusterStock(id, nouveauNombre);
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

  @MessagePattern('findExemplairesPhysiquesByLocalisation')
  async findByLocalisation(@Payload() data: { localisation: string; token?: string }) {
    try {
      const { localisation, token } = data;
      
      if (token) {
        const userId = this.jwtHelperService.extractUserIdFromToken(token);
        console.log('Recherche d\'exemplaires physiques par localisation effectuée par:', userId);
      }

      return await this.exemplairePhysiqueService.findByLocalisation(localisation);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('findExemplairesPhysiquesByEtat')
  async findByEtat(@Payload() data: { etat: EtatExemplaire; token?: string }) {
    try {
      const { etat, token } = data;
      
      if (token) {
        const userId = this.jwtHelperService.extractUserIdFromToken(token);
        console.log('Recherche d\'exemplaires physiques par état effectuée par:', userId);
      }

      return await this.exemplairePhysiqueService.findByEtat(etat);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }

  @MessagePattern('findExemplairesPhysiquesByRessourceAndEtat')
  async findByRessourceAndEtat(@Payload() data: { ressourceId: string; etat: EtatExemplaire; token?: string }) {
    try {
      const { ressourceId, etat, token } = data;
      
      if (token) {
        const userId = this.jwtHelperService.extractUserIdFromToken(token);
        console.log('Recherche d\'exemplaires physiques par ressource et état effectuée par:', userId);
      }

      return await this.exemplairePhysiqueService.findByRessourceAndEtat(ressourceId, etat);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: error.status || 500
      };
    }
  }
}