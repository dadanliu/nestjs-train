"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const dataSet = [
    { name: 'kobe', num: '24' },
    { name: 'lebron', num: '23' },
];
let UsersService = class UsersService {
    sayHello() {
        return 'say Hello World!';
    }
    getList() {
        console.log('dataSet', dataSet);
        return dataSet;
    }
    getDetail(num) {
        const info = dataSet.find((d) => d.num == num);
        if (!info) {
            throw new common_1.HttpException('not found', 404);
        }
        return info;
    }
    addUser(param) {
        dataSet.push(param);
    }
    modifyUser(param) {
        const idx = dataSet.findIndex((d) => d.num === param.num);
        const modified = { ...dataSet[idx], ...param };
        dataSet.splice(idx, 0, modified);
    }
    deleteUser(param) {
        const idx = dataSet.findIndex((d) => d.num === param.num);
        console.log('deleteUser', param);
        dataSet.splice(idx, 1);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map