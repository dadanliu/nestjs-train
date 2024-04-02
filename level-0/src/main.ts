import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common/interfaces/nest-application.interface';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as cookieParser from 'cookie-parser';
import * as express from 'express'; //使用express模組
import * as path from 'path';
import * as cors from 'cors';

import { AppModule as ApplicationModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
//
//創建express 實例
const instance = express();
instance.use(cors());
// view使用ejs範本引擎
instance.set('views', path.join(__dirname, 'views'));
instance.set('view engine', 'ejs');

//NestFactory.create()接受一個模組引數，和一個可選的express實例引數，並返回Promise。
const app: Promise<INestApplication> = NestFactory.create(
  ApplicationModule,
  new ExpressAdapter(instance)
);

app
  //Promise傳入nest的實例引數。
  .then((nestInstance) => {
    nestInstance.use(cookieParser());
    nestInstance.useGlobalPipes(new ValidationPipe());
    nestInstance.enableCors({
      origin: '*'
    });

    //nest實例具有listen方法，傳入port引數，和一個可選的callback function。
    nestInstance.listen(3000, () => {
      console.log('Application based on Express is listening on port 3000');
    });
  })
  .catch((err) => {
    console.error(
      'Application configured to listen on port 3000 failed to start',
      err
    );
  });
