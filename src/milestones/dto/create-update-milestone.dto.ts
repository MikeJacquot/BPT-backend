import { IsString, MaxLength, IsDateString } from 'class-validator';

export class CreateUpdateMilestoneDto {

    @IsString()
    @MaxLength(255)
    label: string;

    @IsString()
    @MaxLength(255)
    type: string;

    @IsDateString()
    date: string;

    @IsString()
    @MaxLength(255) // db text field length
    location: string;

}

