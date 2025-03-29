export class Chat {
  id: string; // MongoDB ObjectId
  members: string[]; // Array of User IDs
  messages: string[]; // Array of Message IDs
  createdAt: Date; // Timestamp
  constructor(partial: Partial<Chat>) {
    Object.assign(this, partial);
  }
}
