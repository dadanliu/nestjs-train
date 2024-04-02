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
} from '@nestjs/common';
import { Response } from 'express';

import { UserDTO } from './user.dto';
import { UsersService } from './users.service';


// @UseGuards(RolesGuard)
// @UseFilters(new HttpExceptionFilter())
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('login')
  Login(@Res() res: Response) {
    console.log('login');
    return res.status(HttpStatus.CREATED).send();
  }

  @Get('list')
  @HttpCode(200)
  getList(): UserDTO[] {
    return this.userService.getList();
  }

  @Get('detail')
  @HttpCode(200)
  getDetail(@Query('id') id: string): UserDTO {
    return this.userService.getDetail(id);
  }

  // @HttpCode(204)
  @Post('add')
  addUser(@Body() param: UserDTO) {
    this.userService.addUser(param);
  }

  @Post('delete')
  deleteUser(@Body() param: UserDTO) {
    this.userService.deleteUser(param);
  }

  @Post('modify')
  modifyUser(@Body() param: UserDTO) {
    this.userService.modifyUser(param);
  }
}
