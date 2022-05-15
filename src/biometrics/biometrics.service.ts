import { Injectable } from '@nestjs/common';
import { CreateUpdateBiometricDto } from './dto/create-update-biometric.dto';
import { Biometric } from './entities/biometric.entity';

@Injectable()
export class BiometricsService {
  async create(createBiometricDto: CreateUpdateBiometricDto) {
    const toSave = Biometric.create(createBiometricDto);
    return await Biometric.save(toSave);
  }

  async findAll() {
    return await Biometric.find();
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
