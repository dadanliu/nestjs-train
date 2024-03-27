import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './components/middleware/logger.middleware';
import { UsersController } from './users/users.controller';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [UsersModule, ChatModule],
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
