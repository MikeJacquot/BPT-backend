import { Controller, Get, Param } from '@nestjs/common';
import { RelationshipsService } from './relationships.service';

@Controller('relationships')
export class RelationshipsController {
  constructor(private readonly relationshipsService: RelationshipsService) {  
  }

  @Get(':id')
  findAllByUserId(@Param('id') id: string) {
    return this.relationshipsService.getFamilyFromUser(id);
  }
  
}
