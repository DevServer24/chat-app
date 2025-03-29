import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
@Injectable()
export class MessageService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createMessageDto: CreateMessageDto) {
    return this.prisma.message.create({
      data: {
        chatId: createMessageDto.chatId,
        senderId: createMessageDto.senderId,
        content: createMessageDto.content,
      },
    });
  }

  async findAll() {
    return this.prisma.message.findMany();
  }

  async findOne(id: string) {
    return this.prisma.message.findUnique({ where: { id } });
  }

  async update(id: string, updateMessageDto: UpdateMessageDto) {
    return this.prisma.message.update({
      where: { id },
      data: updateMessageDto,
    });
  }

  async remove(id: string) {
    return this.prisma.message.delete({ where: { id } });
  }
}
