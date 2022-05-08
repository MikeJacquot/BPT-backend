import { IsDefined, IsEmail,  } from 'class-validator';

export class AuthLoginDto {
  @IsEmail()
  email: string;

  @IsDefined()
  password: string;
}