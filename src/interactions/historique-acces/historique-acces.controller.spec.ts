import { Test, TestingModule } from '@nestjs/testing';
import { HistoriqueAccesController } from './historique-acces.controller';

describe('HistoriqueAccesController', () => {
  let controller: HistoriqueAccesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistoriqueAccesController],
    }).compile();

    controller = module.get<HistoriqueAccesController>(HistoriqueAccesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
