import { IsDateString, IsString, MaxLength } from 'class-validator';

export class CreateUpdateMedicalAppointmentDto {

    @IsString()
    @MaxLength(255)
    doctor: string;

    @IsString()
    @MaxLength(255)
    purpose: string;

    @IsDateString()
    date: string;

    @IsString()
    @MaxLength(65535) // db text field length
    observations: string;

}
