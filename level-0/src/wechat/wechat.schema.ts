import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type WechatDocument = HydratedDocument<Wechat>;

@Schema()
export class Wechat {
  @Prop()
  access_token: string;
}

export const WechatSchema = SchemaFactory.createForClass(Wechat);
