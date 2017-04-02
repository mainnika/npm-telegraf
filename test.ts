/// <reference path="bundle.d.ts" />

import { Telegram } from 'telegraf';
import * as Telegraf from 'telegraf';

const telegram: Telegram = new Telegram('token');
const telegraf: Telegraf = new Telegraf('token', { telegram });

telegraf.on('message', (ctx: Telegraf.Context) =>  {
  return ctx.reply('Hey there!');
});

telegraf.on(['sticker', 'photo'], (ctx: Telegraf.Context) =>  {
  console.log(ctx.message);
  return ctx.reply('Cool!');
});
