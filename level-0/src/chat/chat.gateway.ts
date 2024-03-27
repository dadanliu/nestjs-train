import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
//
//WebSocket listen  port 81
@WebSocketGateway({
  port: 3000,
  cors: {
    origin: '*',
  },
  namespace: 'messages',
})
export class ChatGateWay {
  //使用Socket.IO的API
  socket: Socket;
  constructor() {}

  @WebSocketServer()
  server: Server;

  afterInit(server) {}

  handleConnection(socket) {}

  handleDisconnect(socket) {}
  //新增訊息
  @SubscribeMessage('pushMessage')
  AddMessage(
    @MessageBody() message: string,
    // @ConnectedSocket() client: Socket,
  ) {
    console.log('message', message);
    // 推送消息给当前客户端
    this.server.emit('newMessage', message);

    // // 推送消息给其他客户端
    // client.broadcast.emit('newMessage', message);
  }
}
