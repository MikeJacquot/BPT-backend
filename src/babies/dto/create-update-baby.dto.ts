import { IsDateString, IsString, MaxLength } from 'class-validator';
import { Family } from 'src/families/entities/family.entity';

export class CreateUpdateBabyDto {

  @IsString()
  @MaxLength(255)
  firstName: string;

  @IsString()
  @MaxLength(255)
  lastName: string;

  @IsDateString()
  birthDate: string;

  @IsString()
  @MaxLength(255)
  birthLocation: string;

  family: Family;
}

