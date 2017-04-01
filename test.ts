/// <reference path="bundle.d.ts" />

import { Telegram } from 'telegraf';
import * as Telegraf from 'telegraf';

const telegram: Telegram = new Telegram('token');
const telegraf: Telegraf = new Telegraf('token', { telegram });

telegraf.on('message', (ctx) =>  {
  return ctx.reply('Hey there!');
});

telegraf.on(['sticker', 'photo'], (ctx) =>  {
  console.log(ctx.message);
  return ctx.reply('Cool!');
});

telegram.answerInlineQuery('foo', [{ type: 'photo', id: '1', photo_url: 'foo', thumb_url: 'bar' }])
  .catch((_: any) => 'pass');

telegram.answerInlineQuery<Telegraf.InlineQueryResultAudio>('foo', [{ type: 'audio', id: '1', audio_url: 'foo', title: 'bar' }])
  .catch((_: any) => 'pass');


