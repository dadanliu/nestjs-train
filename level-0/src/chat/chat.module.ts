import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatGateWay } from './chat.gateway';

@Module({
  controllers: [ChatController],
  providers: [ChatGateWay],
})
export class ChatModule {}
