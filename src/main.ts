import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const bodyParser = await require('body-parser');
  
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  const config = new DocumentBuilder()
    .setTitle('WebHooks')
    .setDescription('')
    .setVersion('1.0')
    .addTag('')
    .addApiKey({
      type: 'apiKey',
      name: 'x-api-key',
      in: 'header',
  }, 'x-api-key') 
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  await app.listen(process.env.PORT || 2999);
}
bootstrap();
