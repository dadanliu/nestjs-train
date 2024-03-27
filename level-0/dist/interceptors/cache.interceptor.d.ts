import { NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
export declare class CacheInterceptor implements NestInterceptor {
    intercept(dataOrRequest: any, context: ExecutionContext, stream$: Observable<any>): Observable<any>;
}
