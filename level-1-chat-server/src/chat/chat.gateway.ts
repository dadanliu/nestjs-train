import { SubscribeMessage } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { ChatService } from './chat.service';

export class ChatGateWay {
  socket: Socket;

  constructor(private chatService: ChatService) {}

  afterInit(server) {}

  handleDisconnect(socket) {}

  @SubscribeMessage({ value: 'data' })
  handleGetAddMessage(sender, message) {
    this.chatService.storeMessage(message);
    sender.emit('newMessage', message);
    sender.broadcast.emit('newMessage', message);
  }

  @SubscribeMessage({ value: 'isWriting' })
  handleIsWriting(sender, user: string) {
    sender.broadcast.emit('isWriting', user);
  }

  @SubscribeMessage({ value: 'isNotWriting' })
  handleIsNotWriting(sender, user: string) {
    sender.broadcast.emit('isNotWriting', user);
  }
}
