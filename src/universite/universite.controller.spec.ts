import { Test, TestingModule } from '@nestjs/testing';
import { UniversiteController } from './universite.controller';

describe('UniversiteController', () => {
  let controller: UniversiteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UniversiteController],
    }).compile();

    controller = module.get<UniversiteController>(UniversiteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
