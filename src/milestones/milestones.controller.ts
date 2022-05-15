import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateUpdateMilestoneDto } from './dto/create-update-milestone.dto';
import { MilestonesService } from './milestones.service';


@Controller('milestones')
export class MilestonesController {
  constructor(private readonly milestonesService: MilestonesService) {}

  @Post()
  create(@Body() createMilestoneDto: CreateUpdateMilestoneDto) {
    return this.milestonesService.create(createMilestoneDto);
  }

  @Get()
  findAll() {
    return this.milestonesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.milestonesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMilestoneDto: Partial<CreateUpdateMilestoneDto>) {
    return this.milestonesService.update(id, updateMilestoneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.milestonesService.delete(id);
  }
}
