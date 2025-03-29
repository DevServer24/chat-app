import { IsString, IsOptional } from 'class-validator';

export class UpdateNotificationDto {
  @IsString()
  id: string;

  @IsOptional()
  @IsString()
  message?: string;
}
