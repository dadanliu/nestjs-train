import {
  PipeTransform,
  HttpException,
  Injectable,
  HttpStatus,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform<string> {
  async transform(value: string) {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new HttpException('需要是数字', HttpStatus.BAD_REQUEST);
    }
    return val;
  }
}
