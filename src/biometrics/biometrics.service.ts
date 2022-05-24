import { Injectable } from '@nestjs/common';
import { Baby } from '../babies/entities/baby.entity';

import { CreateUpdateBiometricDto } from './dto/create-update-biometric.dto';
import { Biometric } from './entities/biometric.entity';

@Injectable()
export class BiometricsService {
  async addOneToBaby(babyId: string, createBiometricDto: CreateUpdateBiometricDto) {
    const biometricToCreate = Biometric.create(createBiometricDto);
    const baby = await Baby.findOne(babyId);
    biometricToCreate.baby = baby;
    return await Biometric.save(biometricToCreate);
  }

  async findAllByBabyId(babyId: string) {
    return await Biometric.find({where: {baby: {id: babyId}}, order: {date: 'DESC'}});
  }

  async findOne(id: string) {
    return await Biometric.findOne(id);
  }

  async update(id: string, updateBiometricDto: Partial<CreateUpdateBiometricDto>) {
    return await Biometric.update(id, updateBiometricDto);
  }

  async delete(id: string) {
    return await Biometric.delete(id);
  }
}
