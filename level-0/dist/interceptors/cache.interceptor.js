"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheInterceptor = void 0;
const common_1 = require("@nestjs/common");
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
let CacheInterceptor = class CacheInterceptor {
    intercept(dataOrRequest, context, stream$) {
        const isCached = false;
        if (isCached) {
            return Observable_1.Observable.of([{ data: 'test cache' }]);
        }
        return stream$;
    }
};
exports.CacheInterceptor = CacheInterceptor;
exports.CacheInterceptor = CacheInterceptor = __decorate([
    (0, common_1.Interceptor)()
], CacheInterceptor);
//# sourceMappingURL=cache.interceptor.js.map