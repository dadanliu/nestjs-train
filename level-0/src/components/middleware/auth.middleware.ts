// 拦截器，检测当前身份是否是超管，如果不是直接拦截请求
import {
  ExecutionContext,
  Inject,
  Injectable,
  NestMiddleware
} from '@nestjs/common';
import { NextFunction } from 'express';
import { UsersService } from 'src/users/users.service';
import { isProjectManager } from '../enums/role.enum';
import { Reflector } from '@nestjs/core';

@Injectable()
export class CheckAuth implements NestMiddleware {
  constructor(
    private readonly userService: UsersService,
    private readonly reflector: Reflector
    // private readonly executionContext: ExecutionContext
  ) {}
  async use(req, res, next: NextFunction) {
    try {
      const classMetadata = this.reflector.get<string[]>('roles', req.route.stack[0].handle);
      console.log('Class Metadata:', classMetadata);
      const roles = Reflect.getMetadata('roles', req.route.stack[0].handle);
      const hasAuth = isProjectManager(roles);
      if (hasAuth) {
        next();
      } else {
        res.send('无权限');
      }
    } catch (error) {
      res.send('无权限');
    }
  }
}
