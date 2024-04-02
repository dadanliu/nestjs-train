// wechat.service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Wechat } from './wechat.schema';

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

@Injectable()
export class WechatService {
  private componentAccessToken: string;

  constructor(
    private configService: ConfigService,
    @InjectModel(Wechat.name)
    private wechatModel: Model<Wechat>
  ) {}

  async getComponentAccessToken(): Promise<any> {
    const COMPONENT_APPID = this.configService.get('COMPONENT_APPID');
    const COMPONENT_APPSECRET = this.configService.get('COMPONENT_APPSECRET');
    if (!this.componentAccessToken) {
      const params = {
        appid: COMPONENT_APPID,
        secret: COMPONENT_APPSECRET,
        grant_type: 'client_credential'
      };
      console.log('params', params);
      const response = await axios.post(
        'https://api.weixin.qq.com/cgi-bin/token',
        params
      );
      return await this.createOrUpdateAccessToken(response.data.access_token);
    }
  }

  async createOrUpdateAccessToken(accessToken: string): Promise<Wechat> {
    // Check if document exists
    let wechat = await this.wechatModel.findOne();
    console.log('findOne', wechat);

    if (!wechat) {
      // Create new document if not exists
      wechat = await this.wechatModel.create({ access_token: accessToken });
    } else {
      // Update existing document
      wechat.access_token = accessToken;
      await wechat.save();
    }

    return wechat;
  }
}
