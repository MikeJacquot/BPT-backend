import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BiometricsService } from './biometrics.service';
import { CreateUpdateBiometricDto } from './dto/create-update-biometric.dto';

@Controller('biometrics')
export class BiometricsController {
  constructor(private readonly biometricsService: BiometricsService) {}

  @Post(':id')
  addOneToBaby(@Param() id: string,
  @Body() createBiometricDto: CreateUpdateBiometricDto) {
    return this.biometricsService.addOneToBaby(id, createBiometricDto);
  }

  @Get(':babyId/list')
  findAll(@Param('babyId') babyId: string) {
    return this.biometricsService.findAllByBabyId(babyId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.biometricsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBiometricDto: Partial<CreateUpdateBiometricDto>) {
    return this.biometricsService.update(id, updateBiometricDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.biometricsService.delete(id);
  }
}
