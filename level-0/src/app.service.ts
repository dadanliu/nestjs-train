import { Injectable } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  parseCookie(cookies: any) {
    console.log('cookies', cookies);
    const ssoCookieKey = 'FOCUS_A_UDIG';
    const sopCookieKey = 'sop_user_token';
    const ssoCookieValue = cookies[ssoCookieKey];
    const sopCookieValue = cookies[sopCookieKey];
    const header = {
      cookie: `${ssoCookieKey}=${ssoCookieValue};${sopCookieKey}=${sopCookieValue}`
    };

    console.log('header', header);
  }
}
