import { Test, TestingModule } from '@nestjs/testing';
import { EmprunteController } from './emprunte.controller';
import { EmprunteService } from './emprunte.service';

describe('EmprunteController', () => {
  let controller: EmprunteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmprunteController],
      providers: [EmprunteService],
    }).compile();

    controller = module.get<EmprunteController>(EmprunteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
