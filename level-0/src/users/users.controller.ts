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

import { ValidationPipe } from '../components/pipes/validation.pipe';
import { UserDTO } from './user.dto';
import { UsersService } from './users.service';
import { HttpExceptionFilter } from '../components/filter/http-exception';
import { CustomForbiddenException } from '../components/filter/forbidden';

import { ParseIntPipe } from '../components/pipes/parseInt.pipe';
import { RolesGuard } from '../components/guards/roles.guard';
import { Roles } from '../components/decorators/roles.decorator';

@Controller('users')
@UseGuards(RolesGuard)
@UseFilters(new HttpExceptionFilter())
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('login')
  @Roles('admin')
  Login(@Res() res: Response) {
    console.log('login');
    return res.status(HttpStatus.CREATED).send();
  }

  @Get('list')
  @HttpCode(200)
  getList(): UserDTO[] {
    return this.userService.getList();
  }

  @Get('exception')
  getException(): UserDTO[] {
    throw new CustomForbiddenException();
  }

  @Get('detail')
  @HttpCode(200)
  getDetail(@Query('id', new ParseIntPipe()) id: string): UserDTO {
    return this.userService.getDetail(id);
  }

  @Post('add')
  @HttpCode(204)
  addUser(@Body(new ValidationPipe()) param: UserDTO) {
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
