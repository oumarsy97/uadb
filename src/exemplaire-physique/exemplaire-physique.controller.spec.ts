import { Test, TestingModule } from '@nestjs/testing';
import { ExemplairePhysiqueController } from './exemplaire-physique.controller';
import { ExemplairePhysiqueService } from './exemplaire-physique.service';

describe('ExemplairePhysiqueController', () => {
  let controller: ExemplairePhysiqueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExemplairePhysiqueController],
      providers: [ExemplairePhysiqueService],
    }).compile();

    controller = module.get<ExemplairePhysiqueController>(ExemplairePhysiqueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
