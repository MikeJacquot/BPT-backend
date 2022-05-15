import { IsDateString, IsNumber, Min } from 'class-validator';

export class CreateUpdateBiometricDto {

    @IsNumber({
        allowInfinity: false,
        allowNaN: false
    })
    @Min(0)
    height: number;

    @IsNumber({
        allowInfinity: false,
        allowNaN: false
    })
    @Min(0)
    weight: number;

    @IsDateString()
    date: string;

}
