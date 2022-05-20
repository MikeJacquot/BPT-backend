import { Injectable } from '@nestjs/common';
import { CreateUpdateBabyDto } from './dto/create-update-baby.dto';
import { Baby } from './entities/baby.entity';

@Injectable()
export class BabiesService {
  
  async create(familyId: string, createBabyDto: CreateUpdateBabyDto) {
    const babyToCreate = Baby.create(createBabyDto);
    babyToCreate.family.id = familyId;
    return await Baby.save(babyToCreate);
  }

  async findAll(familyId: string) {
    return await Baby.find({
      where: {family: familyId}
    });
  }

  async findOne(id: string) {
    return await Baby.findOne(id);
  }

  async update(id: string, updateBabyDto: Partial<CreateUpdateBabyDto>) {
    return await Baby.update(id, updateBabyDto);
  }

  async delete(id: string) {
    return await Baby.delete(id);
  }
}
