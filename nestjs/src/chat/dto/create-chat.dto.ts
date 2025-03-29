import { IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class ChatMemberDto {
  @IsString()
  userId: string;
}

export class CreateChatDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ChatMemberDto)
  members: ChatMemberDto[];
}
