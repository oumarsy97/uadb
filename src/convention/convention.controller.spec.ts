import { Test, TestingModule } from '@nestjs/testing';
import { ConventionController } from './convention.controller';
import { ConventionService } from './convention.service';

describe('ConventionController', () => {
  let controller: ConventionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConventionController],
      providers: [ConventionService],
    }).compile();

    controller = module.get<ConventionController>(ConventionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
