/// <reference path="bundle.d.ts" />

import { Telegram } from 'telegraf';
import * as Telegraf from 'telegraf';

const telegraf: Telegraf = new Telegraf('token');

telegraf.on('message', (ctx) =>  {
  return ctx.reply('Hey there!');
});

telegraf.on(['sticker', 'photo'], (ctx) =>  {
  console.log(ctx.message);
  return ctx.reply('Cool!');
});
