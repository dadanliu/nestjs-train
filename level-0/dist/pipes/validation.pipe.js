"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationPipe = void 0;
const common_1 = require("@nestjs/common");
let ValidationPipe = class ValidationPipe {
    async transform(value, metadata) {
        console.log('validate errors', metadata, value);
        if (value.num > 30) {
            throw new common_1.HttpException('号码溢出', common_1.HttpStatus.BAD_REQUEST);
        }
        return value;
    }
    toValidate(metatype) {
        const types = [String, Boolean, Number, Array, Object];
        return !types.find((type) => metatype === type);
    }
};
exports.ValidationPipe = ValidationPipe;
exports.ValidationPipe = ValidationPipe = __decorate([
    (0, common_1.Injectable)()
], ValidationPipe);
//# sourceMappingURL=validation.pipe.js.map