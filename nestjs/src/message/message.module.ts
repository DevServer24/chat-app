import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageGateway } from './message.gateway';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [MessageService, MessageGateway, PrismaService],
  exports: [MessageService],
})
export class MessageModule {}
