import { IsNotEmpty } from 'class-validator';

export class UserDTO {
  readonly name: string;

  @IsNotEmpty({ message: 'num不能为空' })
  readonly num: string;

  _id?: string;
}
