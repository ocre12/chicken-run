import { Test, TestingModule } from '@nestjs/testing';
import { ChickenController } from './chicken.controller';

describe('ChickenController', () => {
  let controller: ChickenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChickenController],
    }).compile();

    controller = module.get<ChickenController>(ChickenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
