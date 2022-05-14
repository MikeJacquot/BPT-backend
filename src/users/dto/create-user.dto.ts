import { IsDefined, IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8) // force password to be at least 8 chars long
  @IsDefined()
  password: string;
}
