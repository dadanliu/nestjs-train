// wechat.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { WechatService } from './wechat.service';
import { WechatController } from './wechat.controller';
import { WechatSchema } from './wechat.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Wechat.name, schema: WechatSchema }]),
    ConfigModule.forRoot({
      isGlobal: true // 全局模块
    })
  ],
  providers: [WechatService],
  exports: [WechatService],
  controllers: [WechatController]
})
export class Wechat {}
