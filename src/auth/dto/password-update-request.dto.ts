import { IsString } from 'class-validator';


export class PasswordUpdateRequestDto {

    @IsString()
    oldPassword: string;

    @IsString()
    newPassword: string;
}
