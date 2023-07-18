import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    //prohibir datos que se ingresan y no estan en el dto.
    whitelist: true, //Ignrorar
    forbidNonWhitelisted: true, //Alertar
  }));
  await app.listen(3000);
}
bootstrap();
