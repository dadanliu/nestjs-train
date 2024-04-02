import {
  ExceptionFilter,
  Catch,
  HttpException,
  ArgumentsHost
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();
    const message = '我是Exception Log Message' + ' ' + exception.message;

    console.log(`exception =>`, exception);
    console.log(`exception status:`, status);
    console.log(`exception message:`, message);

    response.status(status).json({
      statusCode: status,
      message: message
    });
  }
}
