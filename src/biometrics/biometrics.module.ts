import { Module } from '@nestjs/common';
import { BiometricsService } from './biometrics.service';
import { BiometricsController } from './biometrics.controller';

@Module({
  controllers: [BiometricsController],
  providers: [BiometricsService]
})
export class BiometricsModule {}
