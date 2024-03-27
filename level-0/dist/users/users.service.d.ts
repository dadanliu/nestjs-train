export declare class UsersService {
    sayHello(): string;
    getList(): {
        name: string;
        num: string;
    }[];
    getDetail(num: any): {
        name: string;
        num: string;
    };
    addUser(param: any): void;
    modifyUser(param: any): void;
    deleteUser(param: any): void;
}
