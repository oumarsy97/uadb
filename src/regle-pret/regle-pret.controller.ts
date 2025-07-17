// controller/regle-pret.controller.ts (Microservice)
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ReglePretService } from './regle-pret.service';
import { CreateReglePretDto, UpdateReglePretDto } from './dto/create-regle-pret.dto';
import { RoleUser } from 'generated/prisma';

@Controller()
export class ReglePretController {
  constructor(private readonly reglePretService: ReglePretService) {}

  @MessagePattern('createReglePret')
  async create(@Payload() createReglePretDto: CreateReglePretDto) {
    return this.reglePretService.create(createReglePretDto);
  }

  @MessagePattern('findAllReglesPretet')
  async findAll(@Payload() query?: { page?: number; limit?: number; search?: string }) {
    return this.reglePretService.findAll(query?.page, query?.limit, query?.search);
  }

  @MessagePattern('findReglePretById')
  async findOne(@Payload() id: string) {
    return this.reglePretService.findOne(id);
  }

  @MessagePattern('findReglesPretetByUniversiteId')
  async findByUniversiteId(@Payload() universiteId: string) {
    return this.reglePretService.findByUniversiteId(universiteId);
  }

  @MessagePattern('findReglePretByUniversiteAndRole')
  async findByUniversiteAndRole(@Payload() data: { universiteId: string; roleUtilisateur: RoleUser }) {
    const { universiteId, roleUtilisateur } = data;
    return this.reglePretService.findByUniversiteAndRole(universiteId, roleUtilisateur);
  }

  @MessagePattern('updateReglePret')
  async update(@Payload() data: { id: string; updateData: UpdateReglePretDto }) {
    const { id, updateData } = data;
    return this.reglePretService.update(id, updateData);
  }

  @MessagePattern('removeReglePret')
  async remove(@Payload() id: string) {
    return this.reglePretService.remove(id);
  }

  @MessagePattern('findActiveReglesPretet')
  async findActiveRegles() {
    return this.reglePretService.findActiveRegles();
  }

  @MessagePattern('findInactiveReglesPretet')
  async findInactiveRegles() {
    return this.reglePretService.findInactiveRegles();
  }

  @MessagePattern('activateReglePret')
  async activateRegle(@Payload() id: string) {
    return this.reglePretService.activate(id);
  }

  @MessagePattern('deactivateReglePret')
  async deactivateRegle(@Payload() id: string) {
    return this.reglePretService.deactivate(id);
  }

  @MessagePattern('toggleReglePretStatus')
  async toggleStatus(@Payload() id: string) {
    const regle = await this.reglePretService.findOne(id);
    if (!regle) {
      throw new Error('Règle de prêt non trouvée');
    }
    
    if (regle.estActif) {
      return this.reglePretService.deactivate(id);
    } else {
      return this.reglePretService.activate(id);
    }
  }

  @MessagePattern('validateReglePret')
  async validateRegle(@Payload() id: string) {
    const regle = await this.reglePretService.findOne(id);
    return {
      exists: !!regle,
      isActive: regle?.estActif || false,
      regle: regle
    };
  }

  @MessagePattern('getReglePretetByRole')
  async getRegleByRole(@Payload() roleUtilisateur: RoleUser) {
    const activeRegles = await this.reglePretService.findActiveRegles();
    return activeRegles.filter(regle => regle.roleUtilisateur === roleUtilisateur);
  }
}