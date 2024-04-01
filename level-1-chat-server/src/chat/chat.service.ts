import { Injectable } from '@nestjs/common';
import { Message } from './message.type';

@Injectable()
export class ChatService {
  message: Message[] = [];

  getMessages(): Message[] {
    return this.message;
  }

  storeMessage(message: Message) {
    this.message.push(message);
  }
}
