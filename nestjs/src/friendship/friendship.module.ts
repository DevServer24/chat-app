import { Module } from '@nestjs/common';
import { FriendshipService } from './friendship.service';
import { FriendshipGateway } from './friendship.gateway';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [FriendshipService, FriendshipGateway, PrismaService],
  exports: [FriendshipService],
})
export class FriendshipModule {}
