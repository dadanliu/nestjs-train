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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const validation_pipe_1 = require("../components/pipes/validation.pipe");
const user_dto_1 = require("./user.dto");
const users_service_1 = require("./users.service");
const http_exception_1 = require("../components/filter/http-exception");
const forbidden_1 = require("../components/filter/forbidden");
const parseInt_pipe_1 = require("../components/pipes/parseInt.pipe");
const roles_guard_1 = require("../components/guards/roles.guard");
const roles_decorator_1 = require("../components/decorators/roles.decorator");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    Login(res) {
        console.log('login');
        return res.status(common_1.HttpStatus.CREATED).send();
    }
    getList() {
        return this.userService.getList();
    }
    getException() {
        throw new forbidden_1.CustomForbiddenException();
    }
    getDetail(id) {
        return this.userService.getDetail(id);
    }
    addUser(param) {
        this.userService.addUser(param);
    }
    deleteUser(param) {
        this.userService.deleteUser(param);
    }
    modifyUser(param) {
        this.userService.modifyUser(param);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)('login'),
    (0, roles_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "Login", null);
__decorate([
    (0, common_1.Get)('list'),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], UsersController.prototype, "getList", null);
__decorate([
    (0, common_1.Get)('exception'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], UsersController.prototype, "getException", null);
__decorate([
    (0, common_1.Get)('detail'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Query)('id', new parseInt_pipe_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", user_dto_1.UserDTO)
], UsersController.prototype, "getDetail", null);
__decorate([
    (0, common_1.Post)('add'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Body)(new validation_pipe_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDTO]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "addUser", null);
__decorate([
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDTO]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Post)('modify'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDTO]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "modifyUser", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.UseFilters)(new http_exception_1.HttpExceptionFilter()),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map