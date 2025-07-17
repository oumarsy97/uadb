import { Test, TestingModule } from '@nestjs/testing';
import { EmprunteService } from './emprunte.service';

describe('EmprunteService', () => {
  let service: EmprunteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmprunteService],
    }).compile();

    service = module.get<EmprunteService>(EmprunteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
