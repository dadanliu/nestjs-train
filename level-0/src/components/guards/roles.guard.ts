import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const handler = context.getHandler();
    const req = context.switchToHttp().getRequest();
    const roles = this.reflector.get<string[]>('roles', handler);
    console.log('roles', roles);
    if (!roles) {
      return true;
    }

    /*req.user是假資料，這是在模擬登入後，有一組user資訊放在req object裡，
        也可以放在session等，登入資訊的roles表示角色權限，是陣列，一個帳號可能有多個角色。
        而Ted的角色是general，能夠請求通過帶有@Roles('general')裝飾器的目標。
        */
    const user = req.body;
    const hasRole = () =>
      !!user.roles.find((role) => !!roles.find((item) => item === role));
    const isUserValid = user && user.roles && hasRole();
    if (!isUserValid) {
      throw new HttpException('角色不对', HttpStatus.BAD_REQUEST);
    }

    return isUserValid;
  }
}
