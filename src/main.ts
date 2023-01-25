import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe());
  
  // FIXME: consider removing this part when on production env with .env variable and also move this package to devDependencies
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Sea Money API')
    .setDescription('The Sea Money API description')
    .setVersion('1.0')
    .addTag('see-money')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/v1/docs', app, document);

  await app.listen(80);
}
bootstrap();
