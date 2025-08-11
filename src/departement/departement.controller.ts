// src/departement/departement.controller.ts
import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { DepartementService } from './departement.service';
import { CreateDepartementDto } from './dto/create-departement.dto';
import { UpdateDepartementDto } from './dto/update-departement.dto';

@Controller()
export class DepartementController {
  private readonly logger = new Logger(DepartementController.name);

  constructor(private readonly departementService: DepartementService) {}

  @MessagePattern('departement.create')
  async create(@Payload() createDepartementDto: CreateDepartementDto) {
    try {
      this.logger.log('Création d\'un nouveau département');
      const result = await this.departementService.create(createDepartementDto);
      return {
        success: true,
        data: result,
        message: 'Département créé avec succès',
      };
    } catch (error) {
      this.logger.error('Erreur lors de la création du département', error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors de la création du département',
      };
    }
  }

  @MessagePattern('departement.findAll')
  async findAll(@Payload() query: { skip?: number; take?: number; ufrId?: string }) {
    try {
      this.logger.log('Récupération de tous les départements');
      const result = await this.departementService.findAll(query.ufrId);
      const total = await this.departementService.count(query.ufrId);
      
      return {
        success: true,
        data: result,
        meta: {
          total,
          skip: query.skip || 0,
          take: query.take || 10,
          ufrId: query.ufrId,
        },
        message: 'Départements récupérés avec succès',
      };
    } catch (error) {
      this.logger.error('Erreur lors de la récupération des départements', error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors de la récupération des départements',
      };
    }
  }

  @MessagePattern('departement.findOne')
  async findOne(@Payload() payload: { id: string }) {
    try {
      this.logger.log(`Récupération du département avec l'ID: ${payload.id}`);
      const result = await this.departementService.findOne(payload.id);
      return {
        success: true,
        data: result,
        message: 'Département récupéré avec succès',
      };
    } catch (error) {
      this.logger.error(`Erreur lors de la récupération du département ${payload.id}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors de la récupération du département',
      };
    }
  }

  @MessagePattern('departement.findByUfr')
  async findByUfr(@Payload() payload: { ufrId: string }) {
    try {
      this.logger.log(`Récupération des départements de l'UFR: ${payload.ufrId}`);
      const result = await this.departementService.findByUfr(payload.ufrId);
      return {
        success: true,
        data: result,
        message: 'Départements récupérés avec succès',
      };
    } catch (error) {
      this.logger.error(`Erreur lors de la récupération des départements de l'UFR ${payload.ufrId}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors de la récupération des départements',
      };
    }
  }

  @MessagePattern('departement.findByNom')
  async findByNom(@Payload() payload: { nom: string }) {
    try {
      this.logger.log(`Récupération du département avec le nom: ${payload.nom}`);
      const result = await this.departementService.findByNom(payload.nom);
      return {
        success: true,
        data: result,
        message: 'Département récupéré avec succès',
      };
    } catch (error) {
      this.logger.error(`Erreur lors de la récupération du département ${payload.nom}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors de la récupération du département',
      };
    }
  }

  @MessagePattern('departement.update')
  async update(@Payload() payload: { id: string; updateDepartementDto: UpdateDepartementDto }) {
    try {
      this.logger.log(`Mise à jour du département avec l'ID: ${payload.id}`);
      const result = await this.departementService.update(payload.id, payload.updateDepartementDto);
      return {
        success: true,
        data: result,
        message: 'Département mis à jour avec succès',
      };
    } catch (error) {
      this.logger.error(`Erreur lors de la mise à jour du département ${payload.id}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors de la mise à jour du département',
      };
    }
  }

  @MessagePattern('departement.remove')
  async remove(@Payload() payload: { id: string }) {
    try {
      this.logger.log(`Suppression du département avec l'ID: ${payload.id}`);
      const result = await this.departementService.remove(payload.id);
      return {
        success: true,
        data: result,
        message: 'Département supprimé avec succès',
      };
    } catch (error) {
      this.logger.error(`Erreur lors de la suppression du département ${payload.id}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors de la suppression du département',
      };
    }
  }

  @MessagePattern('departement.search')
  async search(@Payload() payload: { searchTerm: string }) {
    try {
      this.logger.log(`Recherche de départements avec le terme: ${payload.searchTerm}`);
      const result = await this.departementService.search(payload.searchTerm);
      return {
        success: true,
        data: result,
        message: 'Recherche effectuée avec succès',
      };
    } catch (error) {
      this.logger.error('Erreur lors de la recherche de départements', error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors de la recherche de départements',
      };
    }
  }

  @MessagePattern('departement.count')
  async count(@Payload() payload?: { ufrId?: string }) {
    try {
      this.logger.log('Comptage des départements');
      const result = await this.departementService.count(payload?.ufrId);
      return {
        success: true,
        data: { count: result },
        message: 'Comptage effectué avec succès',
      };
    } catch (error) {
      this.logger.error('Erreur lors du comptage des départements', error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors du comptage des départements',
      };
    }
  }
}
