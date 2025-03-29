import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
@WebSocketGateway()
export class MessageGateway {
  constructor(private readonly messageService: MessageService) {}
  @SubscribeMessage('createMessage')
  async create(@MessageBody() createMessageDto: CreateMessageDto) {
    return this.messageService.create(createMessageDto);
  }
  @SubscribeMessage('findAllMessages')
  async findAll() {
    return this.messageService.findAll();
  }

  @SubscribeMessage('findOneMessage')
  async findOne(@MessageBody() id: string) {
    return this.messageService.findOne(id);
  }

  @SubscribeMessage('updateMessage')
  async update(@MessageBody() updateMessageDto: UpdateMessageDto) {
    return this.messageService.update(updateMessageDto.id, updateMessageDto);
  }

  @SubscribeMessage('removeMessage')
  async remove(@MessageBody() id: string) {
    return this.messageService.remove(id);
  }
}
