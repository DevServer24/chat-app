import { Friendship } from '../../friendship/entities/friendship.entity';
import { Chatmember } from '../../chatmember/entities/chatmember.entity';
import { Message } from '../../message/entities/message.entity';
import { Notification } from '../../notification/entities/notification.entity';

export class User {
  id: string;
  email?: string;
  friends1?: Friendship[];
  friends2?: Friendship[];
  chats?: Chatmember[];
  messages?: Message[];
  notifications?: Notification[];
}