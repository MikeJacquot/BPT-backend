import { Injectable } from '@nestjs/common';
import { CreateUpdateFamilyDto } from './dto/create-family.dto';
import { Family } from './entities/family.entity';

@Injectable()
export class FamiliesService {
  
  async create(createFamilyDto: CreateUpdateFamilyDto) {
    const familyToCreate = Family.create(createFamilyDto);
    return await familyToCreate.save();
  }

  async findAllByUserId(id: string) {
    return await Family.find({where: {user: id}});
  }

  async findOne(id: string) {
    return await Family.findOne(id);
  }

  async update(id: string, updateFamilyDto: Partial<CreateUpdateFamilyDto>) {
    return Family.update(id, updateFamilyDto);
  }

  async delete(id: string) {
    return await Family.delete(id); 
  }

}
