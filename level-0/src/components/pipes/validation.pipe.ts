import {
  PipeTransform,
  ArgumentMetadata,
  Injectable,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

//Pipe裝飾器，會告訴nestjs這是Pipe
@Injectable()
//要實作PipeTransform的介面
export class ValidationPipe implements PipeTransform<any> {
  //PipeTransform介面有transform()，這可以轉換input data並回傳
  async transform(value, metadata: ArgumentMetadata) {
    console.log('validate errors', metadata, value);
    if (value.num > 30) {
      throw new HttpException('号码溢出', HttpStatus.BAD_REQUEST);
    }
    //ValidationPipe是特別打造出來檢驗型別用，最後要回傳原始參數，避免覆寫。
    return value;
  }
  //檢驗是否為原生JavaScript的型別
  private toValidate(metatype): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.find((type) => metatype === type);
  }
}
