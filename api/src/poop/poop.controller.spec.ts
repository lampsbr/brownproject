import { Test, TestingModule } from '@nestjs/testing';
import { PoopController } from './poop.controller';

describe('PoopController', () => {
  let controller: PoopController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoopController],
    }).compile();

    controller = module.get<PoopController>(PoopController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
