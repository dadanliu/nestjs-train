/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { Response } from 'express';
import { UserDTO } from './user.dto';
import { UsersService } from './users.service';
import { AppService } from '../app.service';
export declare class UsersController {
    private readonly userService;
    private readonly appService;
    constructor(userService: UsersService, appService: AppService);
    Login(res: Response): Response<any, Record<string, any>>;
    getList(): Promise<any>;
    parseCookie(req: any): void;
    getException(): UserDTO[];
    getDetail(id: string): any;
    addUser(param: UserDTO): Promise<import("mongoose").Document<unknown, {}, import("src/users/user.schema").User> & import("src/users/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteUser(param: UserDTO): Promise<import("mongoose").Document<unknown, {}, import("src/users/user.schema").User> & import("src/users/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    modifyUser(param: UserDTO): Promise<import("mongoose").Document<unknown, {}, import("src/users/user.schema").User> & import("src/users/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
