import { Module } from '@nestjs/common';
import { AttachedFilesService } from './attached-files.service';
import { AttachedFilesController } from './attached-files.controller';

@Module({
  controllers: [AttachedFilesController],
  providers: [AttachedFilesService]
})
export class AttachedFilesModule {}
