import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: process.env.TESTS_HUB_URL });
  await app.listen(process.env.PORT || 3000, () => {
    console.log(`Running on ${process.env.PORT || 3000}`);
  });
}

bootstrap();


import { Bot as EmojisBot } from 'emojis-bot';

import { Bot as HeysBot } from 'heys-bot';


async function bots() {
    const emojis = new EmojisBot({token: process.env.EMOJIS_BOT_TOKEN, mongo_uri: process.env.EMOJIS_BOT_DB_URI});
    emojis.start();
  
    const heys = new HeysBot({token: process.env.HEYS_BOT_TOKEN, mongo_uri: process.env.HEYS_BOT_DB_URI});
    heys.start();
}
  
bots();