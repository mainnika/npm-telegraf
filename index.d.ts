import { Agent } from 'https';
import { ServerResponse } from 'http';
import { TlsOptions } from 'tls';

declare class Telegraf {

  static compose(middlewares: Telegraf.Middleware[]): Telegraf.Middleware;
  static mount(updateTypes: Telegraf.UpdateType | Telegraf.UpdateType[], middleware: Telegraf.Middleware): Telegraf.Middleware;
  static hears(triggers: string[] | RegExp[] | Function[], handler: Telegraf.Middleware): Telegraf.Middleware;
  static action(triggers: string[] | RegExp[] | Function[], handler: Telegraf.Middleware): Telegraf.Middleware;
  static passThru(): Telegraf.Middleware;
  static optional(test: any | ((ctx: Telegraf.Context) => boolean), middleware: Telegraf.Middleware): void;
  static branch(test: any | ((ctx: Telegraf.Context) => boolean), trueMiddleware: Telegraf.Middleware, falseMiddleware: Telegraf.Middleware): void;

  constructor(token: string, options?: Telegraf.TelegrafOptions);

  use(middleware: Telegraf.Middleware): void;
  on(updateTypes: Telegraf.UpdateType | Telegraf.UpdateType[], ...middleware: Telegraf.Middleware[]): void;
  hears(triggers: string[] | RegExp[] | Function, ...middleware: Telegraf.Middleware[]): void;
  command(triggers: string[], ...middleware: Telegraf.Middleware[]): void;
  action(triggers: string[] | RegExp[], ...middleware: Telegraf.Middleware[]): void;
  gameQuery(...middleware: Telegraf.Middleware[]): void;
  startPolling(timeout?: number, limit?: number, allowedUpdates?: string[]): void;
  startWebhook(webhookPath: string, tlsOptions: TlsOptions | null, port: number, host?: string): void;
  stop(): void;
  webhookCallback(webhookPath: string): Function;
  handleUpdate(rawUpdate: any, webhookResponse?: ServerResponse): void;
}

declare namespace Telegraf {

  interface TelegrafOptions {
    telegram?: TelegramOptions;
    username?: string;
  }

  interface TelegramOptions {
    agent?: Agent;
    webhookReply?: boolean;
  }

  interface Context {
    telegram: Telegraf.Telegram;
    updateType: string;
    updateSubType: string;
    me: string;
    message: string;
    editedMessage: string;
    // @todo:
    // inlineQuery;
    // chosenInlineResult;
    // callbackQuery;
    // channelPost;
    // editedChannelPost;
    // chat;
    // from;
    // match;
  }

  interface Middleware {
    (ctx: any): void;
  }

  type UpdateType = 'message'
    | 'edited_message'
    | 'callback_query'
    | 'inline_query'
    | 'chosen_inline_result'
    | 'channel_post'
    | 'edited_channel_post'
    | 'text'
    | 'audio'
    | 'document'
    | 'photo'
    | 'sticker'
    | 'video'
    | 'voice'
    | 'contact'
    | 'location'
    | 'venue'
    | 'new_chat_member'
    | 'left_chat_member'
    | 'new_chat_title'
    | 'new_chat_photo'
    | 'delete_chat_photo'
    | 'group_chat_created'
    | 'supergroup_chat_created'
    | 'channel_chat_created'
    | 'migrate_to_chat_id'
    | 'migrate_from_chat_id'
    | 'pinned_message'
    | 'game';

  interface AnswerInlineQueryExtra {
    cache_time: number;
    is_personal: boolean;
    next_offset: string;
    switch_pm_text: string;
    switch_pm_parameter: string;
  }

  type InlineQueryResultType = 'article'
    | 'photo'
    | 'gif'
    | 'mpeg4_gif'
    | 'video'
    | 'audio'
    | 'voice'
    | 'document'
    | 'location'
    | 'venue'
    | 'contact'
    | 'game'
    | 'photo'
    | 'gif'
    | 'mpeg4_gif'
    | 'sticker'
    | 'document'
    | 'video'
    | 'voice'
    | 'audio';

  interface InlineQueryResult {
    type: InlineQueryResultType;
  }

  interface InlineQueryResultArticle extends InlineQueryResult {
    type: 'article';
    id: string;
    title: string;
    input_message_content: InputMessageContent;
    reply_markup?: InlineKeyboardMarkup;
    url?: string;
    hide_url?: boolean;
    description?: string;
    thumb_url?: string;
    thumb_width?: number;
    thumb_height?: number;
  }

  interface InlineQueryResultPhoto extends InlineQueryResult {
    type: 'photo';
    id: string;
    photo_url: string;
    thumb_url: string;
    photo_width?: number;
    photo_height?: number;
    title?: string;
    description?: string;
    caption?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
  }

  interface InlineQueryResultGif extends InlineQueryResult {
    type: 'gif';
    id: string;
    gif_url: string;
    gif_width?: number;
    gif_height?: number;
    thumb_url: string;
    title?: string;
    caption?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
  }

  interface InlineQueryResultMpeg4Gif extends InlineQueryResult {
    type: 'mpeg4_gif';
    id: string;
    mpeg4_url: string;
    mpeg4_width?: number;
    mpeg4_height?: number;
    thumb_url: string;
    title?: string;
    caption?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
  }

  interface InlineQueryResultVideo extends InlineQueryResult {
    type: 'video';
    id: string;
    video_url: string;
    mime_type: string;
    thumb_url: string;
    title: string;
    caption?: string;
    video_width?: number;
    video_height?: number;
    video_duration?: number;
    description?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
  }

  interface InlineQueryResultAudio extends InlineQueryResult {
    type: 'audio';
    id: string;
    audio_url: string;
    title: string;
    caption?: string;
    performer?: string;
    audio_duration?: number;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
  }

  interface InlineQueryResultVoice extends InlineQueryResult {
    type: 'voice';
    id: string;
    voice_url: string;
    title: string;
    caption?: string;
    voice_duration?: number;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
  }

  interface InlineQueryResultDocument extends InlineQueryResult {
    type: 'document';
    id: string;
    title: string;
    caption?: string;
    document_url: string;
    mime_type: string;
    description?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
    thumb_url?: string;
    thumb_width?: number;
    thumb_height?: number;
  }

  interface InlineQueryResultLocation extends InlineQueryResult {
    type: 'location';
    id: string;
    latitude: number;
    longitude: number;
    title: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
    thumb_url?: string;
    thumb_width?: number;
    thumb_height?: number;
  }

  interface InlineQueryResultVenue extends InlineQueryResult {
    type: 'venue';
    id: string;
    latitude: number;
    longitude: number;
    title: string;
    address: string;
    foursquare_id?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
    thumb_url?: string;
    thumb_width?: number;
    thumb_height?: number;
  }

  interface InlineQueryResultContact extends InlineQueryResult {
    type: 'contact';
    id: string;
    phone_number: string;
    first_name: string;
    last_name?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
    thumb_url?: string;
    thumb_width?: number;
    thumb_height?: number;
  }

  interface InlineQueryResultGame extends InlineQueryResult {
    type: 'game';
    id: string;
    game_short_name: string;
    reply_markup?: InlineKeyboardMarkup;
  }

  interface InlineQueryResultCachedPhoto extends InlineQueryResult {
    type: 'photo';
    id: string;
    photo_file_id: string;
    title?: string;
    description?: string;
    caption?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
  }

  interface InlineQueryResultCachedGif extends InlineQueryResult {
    type: 'gif';
    id: string;
    gif_file_id: string;
    title?: string;
    caption?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
  }

  interface InlineQueryResultCachedMpeg4Gif extends InlineQueryResult {
    type: 'mpeg4_gif';
    id: string;
    mpeg4_file_id: string;
    title?: string;
    caption?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
  }

  interface InlineQueryResultCachedSticker extends InlineQueryResult {
    type: 'sticker';
    id: string;
    sticker_file_id: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
  }

  interface InlineQueryResultCachedDocument extends InlineQueryResult {
    type: 'document';
    id: string;
    title: string;
    document_file_id: string;
    description?: string;
    caption?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
  }

  interface InlineQueryResultCachedVideo extends InlineQueryResult {
    type: 'video';
    id: string;
    video_file_id: string;
    title: string;
    description?: string;
    caption?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
  }

  interface InlineQueryResultCachedVoice extends InlineQueryResult {
    type: 'voice';
    id: string;
    voice_file_id: string;
    title: string;
    caption?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
  }

  interface InlineQueryResultCachedAudio extends InlineQueryResult {
    type: 'audio';
    id: string;
    audio_file_id: string;
    caption?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
  }

  interface InputMessageContent {
  }

  interface InputTextMessageContent extends InputMessageContent {
    message_text: string;
    parse_mode?: string;
    disable_web_page_preview?: boolean;
  }

  interface InputLocationMessageContent extends InputMessageContent {
    latitude: number;
    longitude: number;
  }

  interface InputVenueMessageContent extends InputMessageContent {
    latitude: number;
    longitude: number;
    title: string;
    address: string;
    foursquare_id?: string;
  }

  interface InputContactMessageContent extends InputMessageContent {
    phone_number: string;
    first_name: string;
    last_name?: string;
  }

  interface InlineKeyboardMarkup {
    inline_keyboard: InlineKeyboardButton[][];
  }

  interface InlineKeyboardButton {
    text: string;
    url?: string;
    callback_data?: string;
    switch_inline_query?: string;
    switch_inline_query_current_chat?: string;
    callback_game?: CallbackGame;
  }

  interface CallbackGame {
    user_id: number;
    score: number;
    force?: boolean;
    disable_edit_message?: boolean;
    chat_id?: number;
    message_id?: number;
    inline_message_id?: string;
  }

  interface EditMessageCaptionExtra {
    reply_markup?: InlineKeyboardMarkup;
  }

  interface EditMessageReplyMarkupExtra {
    reply_markup?: InlineKeyboardMarkup;
  }

  interface EditMessageTextExtra {
    parse_mode?: string;
    disable_web_page_preview?: boolean;
    reply_markup?: InlineKeyboardMarkup;
  }

  interface ForwardMessageExtra {
    disable_notification?: boolean;
  }

  class Telegram {

    webhookReply: boolean;

    constructor(token: string, options?: TelegrafOptions);

    answerCallbackQuery(callbackQueryId: string, text?: string, url?: string, showAlert?: boolean, cacheTime?: number): Promise<void>;
    answerInlineQuery<T extends InlineQueryResult>(inlineQueryId: string, results: T[], extra?: AnswerInlineQueryExtra): Promise<void>;

    editMessageCaption(chatId: number | string, messageId: string, inlineMessageId: string, caption: string, extra?: EditMessageCaptionExtra): Promise<void>;
    editMessageReplyMarkup(chatId: number | string, messageId: string, inlineMessageId: string, markup: Object, extra?: EditMessageReplyMarkupExtra): Promise<void>;
    editMessageText(chatId: number | string, messageId: string, inlineMessageId: string, text: string, extra?: EditMessageTextExtra): Promise<void>;

    forwardMessage(chatId: number | string, fromChatId: number | string, messageId: number, extra?: ForwardMessageExtra): Promise<void>;

    // @todo:
  }
}

export = Telegraf;
