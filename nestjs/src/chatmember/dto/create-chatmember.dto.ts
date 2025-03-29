import { IsString } from 'class-validator';
export class CreateChatmemberDto {
  @IsString()
  userId: string;
  @IsString()
  chatId: string;
}
