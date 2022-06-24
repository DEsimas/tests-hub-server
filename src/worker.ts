import { Bot as EmojisBot } from 'emojis-bot';

import { Bot as HeysBot } from 'heys-bot';

import fetch from "node-fetch-commonjs";

async function bootstrap() {
    const emojis = new EmojisBot({token: process.env.EMOJIS_BOT_TOKEN, mongo_uri: process.env.EMOJIS_BOT_DB_URI});
    emojis.start();
  
    const heys = new HeysBot({token: process.env.HEYS_BOT_TOKEN, mongo_uri: process.env.HEYS_BOT_DB_URI});
    heys.start();
  }

async function ping() {
  const res = await fetch(process.env.SERVER_URL);
  console.log(await res.text());
}
  
bootstrap();

ping();
setInterval(ping, 1000*60*3) // ping every 3 minutes