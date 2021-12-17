import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(process.env.PORT || 3000, () => {
    console.log(`Running on ${process.env.PORT || 3000}`);
  });
}

config();
bootstrap();
