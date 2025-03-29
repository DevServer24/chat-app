export class Message {
  id: string;
  chatId: string;
  senderId: string;
  content: string;
  createdAt: Date;

  constructor(partial: Partial<Message>) {
    Object.assign(this, partial);
  }
}
