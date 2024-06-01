import { NestFactory } from '@nestjs/core';
import { AppModule } from './infra/modules/app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  const config = new ConfigService();
  const logger = new Logger();
  const PORT = config.get('SERVER_PORT');
  await app.listen(PORT, () => {
    logger.log(`Server running on http://localhost:${PORT}/api`);
  });
}
bootstrap();
