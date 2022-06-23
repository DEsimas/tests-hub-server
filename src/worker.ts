
import { Bot as EmojisBot } from 'emojis-bot';

import { Bot as HeysBot } from 'heys-bot';


async function bootstrap() {
    const emojis = new EmojisBot({token: process.env.EMOJIS_BOT_TOKEN, mongo_uri: process.env.EMOJIS_BOT_DB_URI});
    emojis.start();
  
    const heys = new HeysBot({token: process.env.HEYS_BOT_TOKEN, mongo_uri: process.env.HEYS_BOT_DB_URI});
    heys.start();
  }
  
  bootstrap();