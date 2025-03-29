import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateChatmemberDto } from './dto/create-chatmember.dto';
import { UpdateChatmemberDto } from './dto/update-chatmember.dto';
@Injectable()
export class ChatmemberService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createChatmemberDto: CreateChatmemberDto) {
    return this.prisma.chatMember.create({
      data: {
        userId: createChatmemberDto.userId,
        chatId: createChatmemberDto.chatId,
      },
    });
  }

  async findAll() {
    return this.prisma.chatMember.findMany({
      include: { user: true, chat: true },
    });
  }

  async findOne(id: string) {
    return this.prisma.chatMember.findUnique({
      where: { id },
      include: { user: true, chat: true },
    });
  }

  async update(id: string, updateChatmemberDto: UpdateChatmemberDto) {
    return this.prisma.chatMember.update({
      where: { id },
      data: updateChatmemberDto,
    });
  }

  async remove(id: string) {
    return this.prisma.chatMember.delete({ where: { id } });
  }
}
