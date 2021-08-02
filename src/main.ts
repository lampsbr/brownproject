import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  //openapi/swagger boot
  const config = new DocumentBuilder()
    .setTitle('Brown docs')
    .setDescription('The Brown Project API description')
    .setVersion('1.0')
    .addTag('brown')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  //END openapi/swagger boot

  await app.listen(3000);
}
bootstrap();
