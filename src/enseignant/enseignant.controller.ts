import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { EnseignantService } from './enseignant.service';
import { CreateEnseignantDto } from './dto/create-enseignant.dto';
import { UpdateEnseignantDto } from './dto/update-enseignant.dto';

@Controller()
export class EnseignantController {
  constructor(private readonly enseignantService: EnseignantService) {}

  @MessagePattern('createEnseignant')
  create(@Payload() createEnseignantDto: CreateEnseignantDto) {
    return this.enseignantService.create(createEnseignantDto);
  }

  @MessagePattern('findAllEnseignant')
  findAll(@Payload() options: { page?: number; limit?: number; search?: string }) {
    return this.enseignantService.findAll(options);
  }

  @MessagePattern('findOneEnseignant')
  findOne(@Payload() id: string) {
    return this.enseignantService.findOne(id);
  }

  @MessagePattern('updateEnseignant')
  update(@Payload() updateEnseignantDto: UpdateEnseignantDto) {
    return this.enseignantService.update(updateEnseignantDto.id, updateEnseignantDto);
  }

  @MessagePattern('removeEnseignant')
  remove(@Payload() id: string) {
    return this.enseignantService.remove(id);
  }
}