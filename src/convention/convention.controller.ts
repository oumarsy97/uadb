import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ConventionService } from './convention.service';
import { CreateConventionDto } from './dto/create-convention.dto';
import { UpdateConventionDto } from './dto/update-convention.dto';

@Controller()
export class ConventionController {
  constructor(private readonly conventionService: ConventionService) {}

  @MessagePattern('createConvention')
  async create(@Payload() createConventionDto: CreateConventionDto) {
    return this.conventionService.create(createConventionDto);
  }

  @MessagePattern('findAllConventions')
  async findAll(@Payload() query?: { page?: number; limit?: number; search?: string }) {
    // Si vous voulez implémenter la pagination plus tard, vous pouvez l'ajouter dans le service
    return this.conventionService.findAll( query?.page, query?.limit, query?.search);
  }

  @MessagePattern('findConventionById')
  async findOne(@Payload() id: string) {
    return this.conventionService.findOne(id);
  }

  @MessagePattern('updateConvention')
  async update(@Payload() data: { id: string; updateData: UpdateConventionDto }) {
    const { id, updateData } = data;
    return this.conventionService.update(id, updateData);
  }

  @MessagePattern('removeConvention')
  async remove(@Payload() id: string) {
    return this.conventionService.remove(id);
  }

  @MessagePattern('findActiveConventions')
  async findActiveConventions() {
    return this.conventionService.findActiveConventions();
  }

  @MessagePattern('findInactiveConventions')
  async findInactiveConventions() {
    return this.conventionService.findInactiveConventions();
  }

  @MessagePattern('activateConvention')
  async activateConvention(@Payload() id: string) {
    return this.conventionService.activateConvention(id);
  }

  @MessagePattern('deactivateConvention')
  async deactivateConvention(@Payload() id: string) {
    return this.conventionService.deactivateConvention(id);
  }

  @MessagePattern('findConventionsByUniversite')
  async findConventionsByUniversite(@Payload() universiteId: string) {
    return this.conventionService.findConventionsByUniversite(universiteId);
  }

  @MessagePattern('toggleConventionStatus')
  async toggleStatus(@Payload() id: string) {
    // Cette méthode bascule entre actif/inactif
    const convention = await this.conventionService.findOne(id);
    if (!convention) {
      throw new Error('Convention non trouvée');
    }
    
    if (convention.estActive) {
      return this.conventionService.deactivateConvention(id);
    } else {
      return this.conventionService.activateConvention(id);
    }
  }
}