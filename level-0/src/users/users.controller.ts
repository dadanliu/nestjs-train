import {
  Controller,
  Get,
  Query,
  HttpCode,
  Post,
  Body,
  Res,
  HttpStatus,
  UseFilters,
  UseGuards,
  Req
} from '@nestjs/common';
import { Response } from 'express';

import { UserDTO } from './user.dto';
import { UsersService } from './users.service';
import { HttpExceptionFilter } from '../components/filter/http-exception';
import { CustomForbiddenException } from '../components/filter/forbidden';

import { ParseIntPipe } from '../components/pipes/parseInt.pipe';
import { RolesGuard } from '../components/guards/roles.guard';
import { Roles } from '../components/decorators/roles.decorator';
import { AppService } from 'src/app.service';

@Controller('users')
@UseGuards(RolesGuard)
// @UseFilters(new HttpExceptionFilter())
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly appService: AppService
  ) {}

  @Post('login')
  @Roles('admin')
  Login(@Res() res: Response) {
    console.log('login');
    return res.status(HttpStatus.CREATED).send();
  }

  @Get('list')
  @HttpCode(200)
  getList(): Promise<any> {
    return this.userService.getList();
  }

  @Get('parse')
  @HttpCode(200)
  parseCookie(@Req() req) {
    this.appService.parseCookie(req.cookies);
  }

  @Get('exception')
  getException(): UserDTO[] {
    throw new CustomForbiddenException();
  }

  @Get('detail')
  @HttpCode(200)
  getDetail(@Query('id', new ParseIntPipe()) id: string): any {
    return this.userService.getDetail(id);
  }

  @Post('add')
  @Roles('admin')
  @HttpCode(200)
  addUser(@Body() param: UserDTO) {
    return this.userService.addUser(param);
  }

  @Post('delete')
  deleteUser(@Body() param: UserDTO) {
    return this.userService.deleteUser(param);
  }

  @Post('modify')
  modifyUser(@Body() param: UserDTO) {
    return this.userService.modifyUser(param);
  }
}
