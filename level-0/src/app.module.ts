import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './components/middleware/logger.middleware';
import { UsersController } from './users/users.controller';
import { ChatModule } from './chat/chat.module';
import { Wechat } from './wechat/wechat.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/level0'),
    UsersModule,
    ChatModule,
    Wechat,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: 'users/list', method: RequestMethod.GET })
      .forRoutes(UsersController);
  }
}
