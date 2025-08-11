import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UfrService } from './ufr.service';
import { CreateUfrDto, UpdateUfrDto } from './dto/create-ufr.dto';

@Controller()
export class UfrController {
  private readonly logger = new Logger(UfrController.name);

  constructor(private readonly ufrService: UfrService) {}

  @MessagePattern('ufr.create')
  async create(@Payload() createUfrDto: CreateUfrDto) {
    try {
      this.logger.log('Création d\'une nouvelle UFR');
      const result = await this.ufrService.create(createUfrDto);
      return {
        success: true,
        data: result,
        message: 'UFR créée avec succès',
      };
    } catch (error) {
      this.logger.error('Erreur lors de la création de l\'UFR', error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors de la création de l\'UFR',
      };
    }
  }

  @MessagePattern('ufr.findAll')
  async findAll(@Payload() query: { skip?: number; take?: number }) {
    try {
      this.logger.log('Récupération de toutes les UFR');
      const page = Math.floor((query.skip || 0) / (query.take || 10)) + 1;
      const limit = query.take || 10;
      const result = await this.ufrService.findAll(page, limit);
      
      return {
        success: true,
        data: result.data,
        meta: {
          total: result.total,
          skip: query.skip || 0,
          take: query.take || 10,
        },
        message: 'UFR récupérées avec succès',
      };
    } catch (error) {
      this.logger.error('Erreur lors de la récupération des UFR', error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors de la récupération des UFR',
      };
    }
  }

  @MessagePattern('ufr.findOne')
  async findOne(@Payload() payload: { id: string }) {
    try {
      this.logger.log(`Récupération de l'UFR avec l'ID: ${payload.id}`);
      const result = await this.ufrService.findOne(payload.id);
      return {
        success: true,
        data: result,
        message: 'UFR récupérée avec succès',
      };
    } catch (error) {
      this.logger.error(`Erreur lors de la récupération de l'UFR ${payload.id}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors de la récupération de l\'UFR',
      };
    }
  }

  @MessagePattern('ufr.findByUniversite')
  async findByUniversite(@Payload() payload: { universiteId: string }) {
    try {
      this.logger.log(`Récupération des UFR de l'université: ${payload.universiteId}`);
      const result = await this.ufrService.findByUniversite(payload.universiteId);
      return {
        success: true,
        data: result,
        message: 'UFR de l\'université récupérées avec succès',
      };
    } catch (error) {
      this.logger.error(`Erreur lors de la récupération des UFR de l'université ${payload.universiteId}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors de la récupération des UFR de l\'université',
      };
    }
  }

  @MessagePattern('ufr.update')
  async update(@Payload() payload: { id: string; updateUfrDto: UpdateUfrDto }) {
    try {
      this.logger.log(`Mise à jour de l'UFR avec l'ID: ${payload.id}`);
      const result = await this.ufrService.update(payload.id, payload.updateUfrDto);
      return {
        success: true,
        data: result,
        message: 'UFR mise à jour avec succès',
      };
    } catch (error) {
      this.logger.error(`Erreur lors de la mise à jour de l'UFR ${payload.id}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors de la mise à jour de l\'UFR',
      };
    }
  }

  @MessagePattern('ufr.remove')
  async remove(@Payload() payload: { id: string }) {
    try {
      this.logger.log(`Suppression de l'UFR avec l'ID: ${payload.id}`);
      const result = await this.ufrService.remove(payload.id);
      return {
        success: true,
        data: result,
        message: 'UFR supprimée avec succès',
      };
    } catch (error) {
      this.logger.error(`Erreur lors de la suppression de l'UFR ${payload.id}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors de la suppression de l\'UFR',
      };
    }
  }

  @MessagePattern('ufr.search')
  async search(@Payload() payload: { searchTerm: string }) {
    try {
      this.logger.log(`Recherche d'UFR avec le terme: ${payload.searchTerm}`);
      const result = await this.ufrService.search(payload.searchTerm);
      return {
        success: true,
        data: result,
        message: 'Recherche effectuée avec succès',
      };
    } catch (error) {
      this.logger.error('Erreur lors de la recherche d\'UFR', error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors de la recherche d\'UFR',
      };
    }
  }

  @MessagePattern('ufr.count')
  async count() {
    try {
      this.logger.log('Comptage des UFR');
      const stats = await this.ufrService.getStats();
      return {
        success: true,
        data: { count: stats.totalUfr },
        message: 'Comptage effectué avec succès',
      };
    } catch (error) {
      this.logger.error('Erreur lors du comptage des UFR', error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Erreur lors du comptage des UFR',
      };
    }
  }
}