import { Test, TestingModule } from '@nestjs/testing';
import { ExemplairePhysiqueService } from './exemplaire-physique.service';

describe('ExemplairePhysiqueService', () => {
  let service: ExemplairePhysiqueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExemplairePhysiqueService],
    }).compile();

    service = module.get<ExemplairePhysiqueService>(ExemplairePhysiqueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
