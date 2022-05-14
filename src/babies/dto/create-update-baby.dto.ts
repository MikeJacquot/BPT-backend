import { IsDateString, IsString, MaxLength } from 'class-validator';

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
}

