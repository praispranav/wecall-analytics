import { Test, TestingModule } from '@nestjs/testing';
import { MedicareController } from './medicare.controller';

describe('MedicareController', () => {
  let controller: MedicareController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicareController],
    }).compile();

    controller = module.get<MedicareController>(MedicareController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
