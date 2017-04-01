import { Agent } from 'https';

export interface TelegrafOptions {
    telegram?: TelegramOptions;
    username?: string;
}

export interface TelegramOptions {
    agent?: Agent;
    webhookReply?: boolean;
}

export interface Context {
    telegram: Telegram;
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

export interface Middleware {
    (ctx: any): void;
}

export interface AnswerInlineQueryExtra {
    cache_time: number;
    is_personal: boolean;
    next_offset: string;
    switch_pm_text: string;
    switch_pm_parameter: string;
}

export type InlineQueryResultType = 'article'
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

export interface InlineQueryResult {
    type: InlineQueryResultType;
}

export interface InlineQueryResultArticle extends InlineQueryResult {
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

export interface InlineQueryResultPhoto extends InlineQueryResult {
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

export interface InlineQueryResultGif extends InlineQueryResult {
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

export interface InlineQueryResultMpeg4Gif extends InlineQueryResult {
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

export interface InlineQueryResultVideo extends InlineQueryResult {
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

export interface InlineQueryResultAudio extends InlineQueryResult {
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

export interface InlineQueryResultVoice extends InlineQueryResult {
    type: 'voice';
    id: string;
    voice_url: string;
    title: string;
    caption?: string;
    voice_duration?: number;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}

export interface InlineQueryResultDocument extends InlineQueryResult {
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

export interface InlineQueryResultLocation extends InlineQueryResult {
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

export interface InlineQueryResultVenue extends InlineQueryResult {
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

export interface InlineQueryResultContact extends InlineQueryResult {
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

export interface InlineQueryResultGame extends InlineQueryResult {
    type: 'game';
    id: string;
    game_short_name: string;
    reply_markup?: InlineKeyboardMarkup;
}

export interface InlineQueryResultCachedPhoto extends InlineQueryResult {
    type: 'photo';
    id: string;
    photo_file_id: string;
    title?: string;
    description?: string;
    caption?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedGif extends InlineQueryResult {
    type: 'gif';
    id: string;
    gif_file_id: string;
    title?: string;
    caption?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedMpeg4Gif extends InlineQueryResult {
    type: 'mpeg4_gif';
    id: string;
    mpeg4_file_id: string;
    title?: string;
    caption?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedSticker extends InlineQueryResult {
    type: 'sticker';
    id: string;
    sticker_file_id: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedDocument extends InlineQueryResult {
    type: 'document';
    id: string;
    title: string;
    document_file_id: string;
    description?: string;
    caption?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedVideo extends InlineQueryResult {
    type: 'video';
    id: string;
    video_file_id: string;
    title: string;
    description?: string;
    caption?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedVoice extends InlineQueryResult {
    type: 'voice';
    id: string;
    voice_file_id: string;
    title: string;
    caption?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedAudio extends InlineQueryResult {
    type: 'audio';
    id: string;
    audio_file_id: string;
    caption?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
}

export interface InputMessageContent {
}

export interface InputTextMessageContent extends InputMessageContent {
    message_text: string;
    parse_mode?: string;
    disable_web_page_preview?: boolean;
}

export interface InputLocationMessageContent extends InputMessageContent {
    latitude: number;
    longitude: number;
}

export interface InputVenueMessageContent extends InputMessageContent {
    latitude: number;
    longitude: number;
    title: string;
    address: string;
    foursquare_id?: string;
}

export interface InputContactMessageContent extends InputMessageContent {
    phone_number: string;
    first_name: string;
    last_name?: string;
}

export interface InlineKeyboardMarkup {
    inline_keyboard: InlineKeyboardButton[][];
}

export interface InlineKeyboardButton {
    text: string;
    url?: string;
    callback_data?: string;
    switch_inline_query?: string;
    switch_inline_query_current_chat?: string;
    callback_game?: CallbackGame;
}

export interface CallbackGame {
    user_id: number;
    score: number;
    force?: boolean;
    disable_edit_message?: boolean;
    chat_id?: number;
    message_id?: number;
    inline_message_id?: string;
}

export interface EditMessageCaptionExtra {
    reply_markup?: InlineKeyboardMarkup;
}

export interface EditMessageReplyMarkupExtra {
    reply_markup?: InlineKeyboardMarkup;
}

export interface EditMessageTextExtra {
    parse_mode?: string;
    disable_web_page_preview?: boolean;
    reply_markup?: InlineKeyboardMarkup;
}

export interface ForwardMessageExtra {
    disable_notification?: boolean;
}

export class Telegraf {

    constructor(token: string, options?: TelegrafOptions);

    command(command: string, middleware: Middleware): void;
    on(type: string, middleware: Middleware): void;
    startPolling(): void;

    // @todo:
}

export class Telegram {

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
