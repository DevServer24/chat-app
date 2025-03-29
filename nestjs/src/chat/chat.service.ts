import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
@Injectable()
export class ChatService {
  async create(createChatDto: CreateChatDto) {
    return prisma.chat.create({
      data: {
        members: {
          create: createChatDto.members.map((member) => ({
            user: { connect: { id: member.userId } }
          }))
        }
      },
      include: { members: true }
    });
  }
  findAll() {
    return `This action returns all chat`;
  }
  findOne(id: number) {
    return `This action returns a #${id} chat`;
  }
  update(id: number, updateChatDto: UpdateChatDto) {
    return `This action updates a #${id} chat`;
  }
  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
}
