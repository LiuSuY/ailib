import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { log } from 'console';
import { HttpFilter } from './common/filter';
import { Response } from './common/response';
import helmet from 'helmet';
import * as session from 'express-session';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new DocumentBuilder()
    .setTitle('aigc')
    .setDescription('The aigc API description')
    .setVersion('1.0')
    .addTag('api')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  app.useStaticAssets("images", { prefix: '/images'})

  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalFilters(new HttpFilter())
  app.useGlobalInterceptors(new Response())
  app.use(helmet());
  app.use(
    session({
      secret: 'code',
      rolling: true,
    })
  )
  // app.enableCors({
  //   origin: '*', // 允许来自这个域的请求
  // });

  await app.listen(3000);
  log(`this is application runing at ${await app.getUrl()}`)
}
bootstrap();
