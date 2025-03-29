import { Module } from '@nestjs/common';
import { FriendshipModule } from './friendship/friendship.module';
import { ChatModule } from './chat/chat.module';
import { ChatMemberModule } from './chatmember/chatmember.module';
import { MessageModule } from './message/message.module';
import { NotificationModule } from './notification/notification.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ FriendshipModule, ChatModule, ChatMemberModule, MessageModule, NotificationModule,PrismaModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
