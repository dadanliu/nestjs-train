import { Response } from 'express';
import { UserDTO } from './user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    Login(res: Response): Response<any, Record<string, any>>;
    getList(): UserDTO[];
    getException(): UserDTO[];
    getDetail(id: string): UserDTO;
    addUser(param: UserDTO): void;
    deleteUser(param: UserDTO): void;
    modifyUser(param: UserDTO): void;
}
