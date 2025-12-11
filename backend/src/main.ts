import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApiConfigService } from './api-config/api-config.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: false,
  });

  const config = new DocumentBuilder()
    .setTitle('Posts Application')
    .setDescription('Posts Application API Documentation')
    .addTag('Posts Application')
    .addCookieAuth('better-auth.session_token')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, documentFactory);

  const apiConfigService = app.get(ApiConfigService);
  const port = apiConfigService.appPort;

  await app.listen(port, () => {
    console.log(`Application is running on port: ${port}`);
  });
}
bootstrap();
