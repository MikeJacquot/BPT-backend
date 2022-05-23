import { Test, TestingModule } from '@nestjs/testing';
import { AttachedFilesController } from './attached-files.controller';
import { AttachedFilesService } from './attached-files.service';

describe('AttachedFilesController', () => {
  let controller: AttachedFilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttachedFilesController],
      providers: [AttachedFilesService],
    }).compile();

    controller = module.get<AttachedFilesController>(AttachedFilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
