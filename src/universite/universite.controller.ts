import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UniversiteService } from './universite.service';
import { CreateUniversiteDto, UpdateUniversiteDto } from './dto/universite.dto';

@Controller()
export class UniversiteController {
  constructor(private readonly universiteService: UniversiteService) {}

  @MessagePattern('createUniversite')
  async create(@Payload() createUniversiteDto: CreateUniversiteDto) {
    return this.universiteService.create(createUniversiteDto);
  }

  @MessagePattern('findAllUniversites')
  async findAll(@Payload() query: { page?: number; limit?: number; search?: string }) {
    const { page, limit, search } = query;
    return this.universiteService.findAll(page, limit, search);
  }

  @MessagePattern('findUniversiteById')
  async findOne(@Payload() id: string) {
    return this.universiteService.findOne(id);
  }

  @MessagePattern('updateUniversite')
  async update(@Payload() data: { id: string; updateData: Partial<UpdateUniversiteDto> }) {
    const { id, updateData } = data;
    return this.universiteService.update(id, updateData);
  }

  @MessagePattern('removeUniversite')
  async remove(@Payload() id: string) {
    return this.universiteService.remove(id);
  }

  @MessagePattern('getUniversiteStatistics')
  async getStatistics(@Payload() id: string) {
    return this.universiteService.getStatistics(id);
  }

  @MessagePattern('toggleUniversiteStatus')
  async toggleStatus(@Payload() id: string) {
    return this.universiteService.toggleStatus(id);
  }

  @MessagePattern('getTopUniversitesByResources')
  async getTopUniversites(@Payload() limit?: number) {
    return this.universiteService.getTopUniversities(limit);
  }
}