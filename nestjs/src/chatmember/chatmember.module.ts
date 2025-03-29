import { Module } from '@nestjs/common';
import { ChatmemberService } from './chatmember.service';
import { ChatmemberGateway } from './chatmember.gateway';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [ChatmemberService, ChatmemberGateway, PrismaService],
  exports: [ChatmemberService],
})
export class ChatMemberModule {}
