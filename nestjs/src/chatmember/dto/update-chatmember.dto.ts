import { IsString, IsOptional } from 'class-validator';
export class UpdateChatmemberDto {
  @IsString()
  id: string;
  @IsString()
  @IsOptional()
  userId?: string;
  @IsString()
  @IsOptional()
  chatId?: string;
}
