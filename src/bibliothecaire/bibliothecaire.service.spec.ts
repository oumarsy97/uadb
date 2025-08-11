import { Test, TestingModule } from '@nestjs/testing';
import { BibliothecaireService } from './bibliothecaire.service';

describe('BibliothecaireService', () => {
  let service: BibliothecaireService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BibliothecaireService],
    }).compile();

    service = module.get<BibliothecaireService>(BibliothecaireService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
