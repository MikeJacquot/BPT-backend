import { IsDefined, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateUserDto {

  @IsString()
  @MinLength(8) // force password to be at least 8 chars long
  @IsDefined()
  @IsOptional()
  password: string;

  @IsString()
  @IsOptional()
  firstName: string;

  @IsString()
  @IsOptional()
  lastName: string;
}