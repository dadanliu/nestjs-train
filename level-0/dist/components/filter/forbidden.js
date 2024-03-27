"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomForbiddenException = void 0;
const common_1 = require("@nestjs/common");
class CustomForbiddenException extends common_1.HttpException {
    constructor() {
        super('禁止訪問', common_1.HttpStatus.FORBIDDEN);
    }
}
exports.CustomForbiddenException = CustomForbiddenException;
//# sourceMappingURL=forbidden.js.map