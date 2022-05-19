import { Module } from '@nestjs/common';
import { FamiliesController } from './families.controller';
import { FamiliesService } from './families.service';

@Module({
  imports: [],
  controllers: [FamiliesController],
  providers: [FamiliesService],
})
export class FamiliesModule { }
