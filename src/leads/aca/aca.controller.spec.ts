import { Test, TestingModule } from '@nestjs/testing';
import { AcaController } from './aca.controller';

describe('AcaController', () => {
  let controller: AcaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcaController],
    }).compile();

    controller = module.get<AcaController>(AcaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
