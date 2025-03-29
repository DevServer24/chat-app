import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
@Injectable()
export class ChatGateway {
  constructor(private readonly prisma: PrismaService) {}
  async create(createChatDto: CreateChatDto) {
    return this.prisma.chat.create({
      data: {
        members: {
          create: createChatDto.members.map(member => ({
            user: { connect: { id: member.userId } }
          }))
        }
      },
      include: {
        members: true
      }
    });
  }

  async findAll() {
    return this.prisma.chat.findMany({ include: { members: true } });
  }

  async findOne(id: string) {
    return this.prisma.chat.findUnique({ where: { id }, include: { members: true } });
  }

  async update(id: string, updateChatDto: UpdateChatDto) {
    const { members, ...updateData } = updateChatDto;
  
    return this.prisma.chat.update({
      where: { id },
      data: {
        ...updateData,
        members: members
          ? {
              set: members.map(member => ({ id: member.userId })) // Correct format
            }
          : undefined
      },
      include: { members: true } // Include members in response
    });
  }
  
  async remove(id: string) {
    return this.prisma.chat.delete({ where: { id } });
  }
}
