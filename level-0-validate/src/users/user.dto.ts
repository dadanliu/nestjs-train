import { IsNotEmpty } from 'class-validator';

export class UserDTO {
  @IsNotEmpty({ message: 'num不能为空' })
  readonly name: string;

  @IsNotEmpty({ message: 'num不能为空' })
  readonly num: string;
}
