import { Injectable } from '@nestjs/common';
import { CreateUpdateMilestoneDto } from './dto/create-update-milestone.dto';
import { Milestone } from './entities/milestone.entity';

@Injectable()
export class MilestonesService {
  async create(createMilestoneDto: CreateUpdateMilestoneDto) {
    const toSave = Milestone.create(createMilestoneDto);
    return await Milestone.save(toSave);
  }

  async findAll() {
    return await Milestone.find();
  }

  async findOne(id: string) {
    return await Milestone.findOne(id);
  }

  async update(id: string, updateMilestoneDto: Partial<CreateUpdateMilestoneDto>) {
    return Milestone.update(id, updateMilestoneDto);
  }

  async delete(id: string) {
    return Milestone.delete(id);
  }
}
