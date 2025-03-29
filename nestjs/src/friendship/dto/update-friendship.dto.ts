import { IsString, IsOptional } from 'class-validator';

export class UpdateFriendshipDto {
  @IsString()
  id: string;

  @IsOptional()
  @IsString()
  user1Id?: string;

  @IsOptional()
  @IsString()
  user2Id?: string;
}
