import { HttpException, Injectable } from '@nestjs/common';

const dataSet = [
  { name: 'kobe', num: '24' },
  { name: 'lebron', num: '23' },
];

@Injectable()
export class UsersService {
  sayHello(): string {
    return 'say Hello World!';
  }

  getList() {
    console.log('dataSet', dataSet);
    return dataSet;
  }

  getDetail(num) {
    const info = dataSet.find((d) => d.num == num);
    if (!info) {
      throw new HttpException('not found', 404);
    }
    return info;
  }

  addUser(param) {
    dataSet.push(param);
  }

  modifyUser(param) {
    const idx = dataSet.findIndex((d) => d.num === param.num);
    const modified = { ...dataSet[idx], ...param };
    dataSet.splice(idx, 0, modified);
  }

  deleteUser(param) {
    const idx = dataSet.findIndex((d) => d.num === param.num);
    console.log('deleteUser', param);
    dataSet.splice(idx, 1);
  }
}
