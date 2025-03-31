import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { PrismaService } from '../prisma/prisma.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';

@WebSocketGateway({ cors: true })
export class ChatService {
  @WebSocketServer()
  server: Server;

  constructor(private readonly prisma: PrismaService) {}

  @SubscribeMessage('createChat')
  async create(@MessageBody() createChatDto: CreateChatDto) {
    const chat = await this.prisma.chat.create({
      data: {
        members: {
          create: createChatDto.members.map(member => ({
            user: { connect: { id: member.userId } }
          }))
        }
      },
      include: { members: true }
    });

    this.server.emit('chatCreated', chat); // Emit event to all clients
    return chat;
  }

  @SubscribeMessage('findAllChats')
  async findAll() {
    return this.prisma.chat.findMany({ include: { members: true } });
  }
  @SubscribeMessage('findOneChat')
  async findOne(@MessageBody() id: string) {
    return this.prisma.chat.findUnique({ where: { id }, include: { members: true } });
  }

  @SubscribeMessage('updateChat')
  async update(@MessageBody() updateChatDto: UpdateChatDto) {
    const { id, members, ...updateData } = updateChatDto;

    const updateQuery: any = {
      ...updateData
    };

    if (members) {
      updateQuery.members = {
        connect: members.map(member => ({ id: member.userId }))
      };
    }

    const updatedChat = await this.prisma.chat.update({
      where: { id },
      data: updateQuery,
      include: { members: true }
    });

    this.server.emit('chatUpdated', updatedChat);
    return updatedChat;
  }

  @SubscribeMessage('removeChat')
  async remove(@MessageBody() id: string) {
    await this.prisma.chat.delete({ where: { id } });
    this.server.emit('chatDeleted', id);
    return { message: 'Chat deleted successfully' };
  }
}
