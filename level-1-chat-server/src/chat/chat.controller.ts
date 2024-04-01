import { Controller, Get, HttpCode } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('messages')
export class ChatController {
  constructor(private chatService: ChatService) {}

  @Get()
  @HttpCode(200)
  async getAllMessages() {
    const messages = await this.chatService.getMessages();
    return messages;
    //     res.status(HttpStatus.OK).json(messages);
  }
}
