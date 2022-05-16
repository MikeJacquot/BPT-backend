import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    /**
     * The option 'transform: true' allow dto fields transformations.
     * For example, if dto have a type 'Date' and you send '2020-06-30T13:30:00+02:00' as json,
     * with annotations '@Type(() => Date)' and '@IsDate', you will get the field as 'Date' type instead of 'string'.
     **/
    forbidUnknownValues: true,
    forbidNonWhitelisted: true,
    transform: true
}));

app.setGlobalPrefix('api');

  await app.listen(3000);
}
bootstrap();
