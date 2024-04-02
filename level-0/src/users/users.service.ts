import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from './user.schema';
import { ERole, EStatus } from 'src/components/enums/role.enum';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>
  ) {}

  sayHello(): string {
    return 'say Hello World!';
  }

  async getList() {
    const users = await this.userModel.find().exec();
    return users;
  }

  async getDetail(num) {
    const info = await this.userModel.find({ num }).exec();
    if (!info) {
      throw new HttpException('not found', 404);
    }
    return info;
  }

  async addUser(param) {
    const newUser = {
      ...param,
      status: ERole.normal,
      role: EStatus.inUse
    };
    try {
      const ret = await this.userModel.create(newUser);
      return ret;
    } catch (e) {}
  }

  async modifyUser(param) {
    console.log('modifyUser', param);
    return await this.userModel
      .findOneAndUpdate({ num: param.num }, param, { new: true })
      .exec();
  }

  async deleteUser(param) {
    return await this.userModel.findOneAndDelete({ num: param.num }).exec();
  }
}
