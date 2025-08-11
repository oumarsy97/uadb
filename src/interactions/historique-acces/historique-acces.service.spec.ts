import { Test, TestingModule } from '@nestjs/testing';
import { HistoriqueAccesService } from './historique-acces.service';

describe('HistoriqueAccesService', () => {
  let service: HistoriqueAccesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistoriqueAccesService],
    }).compile();

    service = module.get<HistoriqueAccesService>(HistoriqueAccesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
