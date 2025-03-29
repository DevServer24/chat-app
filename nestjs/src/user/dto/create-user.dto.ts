import { IsEmail, IsOptional, IsString, IsDate } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  image?: string;

  @IsDate()
  @IsOptional()
  emailVerified?: Date;
}
