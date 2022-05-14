import { IsString } from 'class-validator';

export class CreateUpdateFamilyDto {

    @IsString()
    name: string;
}
