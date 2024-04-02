"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./user.schema");
const role_enum_1 = require("../components/enums/role.enum");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    sayHello() {
        return 'say Hello World!';
    }
    async getList() {
        const users = await this.userModel.find().exec();
        return users;
    }
    async getDetail(num) {
        const info = await this.userModel.find({ num }).exec();
        if (!info) {
            throw new common_1.HttpException('not found', 404);
        }
        return info;
    }
    async addUser(param) {
        const newUser = {
            ...param,
            status: role_enum_1.ERole.normal,
            role: role_enum_1.EStatus.inUse
        };
        try {
            const ret = await this.userModel.create(newUser);
            return ret;
        }
        catch (e) { }
    }
    async modifyUser(param) {
        console.log('modifyUser', param);
        return await this.userModel
            .findOneAndUpdate({ num: param.num }, param, { new: true })
            .exec();
    }
    async deleteUser(param) {
        return await this.userModel.findOneAndDelete({ num: param.num }).exec();
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
//# sourceMappingURL=users.service.js.map