import { Controller, Post } from '@nestjs/common';
import { WechatService } from './wechat.service';

@Controller('wechat')
export class WechatController {
  constructor(private readonly wechatService: WechatService) {}

  @Post()
  getAccessToken() {
    return this.wechatService.getComponentAccessToken();
  }
}
