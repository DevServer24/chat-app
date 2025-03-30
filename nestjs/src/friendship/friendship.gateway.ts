import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { PrismaClient } from '@prisma/client';
import { CreateFriendshipDto } from './dto/create-friendship.dto';
import { UpdateFriendshipDto } from './dto/update-friendship.dto';
const prisma = new PrismaClient();
@WebSocketGateway()
export class FriendshipGateway {
  @SubscribeMessage('createFriendship')
  async create(@MessageBody() createFriendshipDto: CreateFriendshipDto) {
    return prisma.friendship.create({
      data: createFriendshipDto,
    });
  }

  @SubscribeMessage('findAllFriendship')
  async findAll() {
    return prisma.friendship.findMany();
  }

  @SubscribeMessage('findOneFriendship')
  async findOne(@MessageBody() id: string) {
    return prisma.friendship.findUnique({
      where: { id },
    });
  }
  @SubscribeMessage('updateFriendship')
  async update(@MessageBody() updateFriendshipDto: UpdateFriendshipDto) {
    return prisma.friendship.update({
      where: { id: updateFriendshipDto.id }, // ✅ Corrected: Prisma expects id as a string
      data: updateFriendshipDto,
    });
  }

  @SubscribeMessage('removeFriendship')
  async remove(@MessageBody() id: string) {
    return prisma.friendship.delete({
      where: { id },
    });
  }
}
