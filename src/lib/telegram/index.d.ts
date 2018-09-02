import { I18n } from 'telegraf-i18n';
import { ContextMessageUpdate } from 'telegraf';
import { InlineKeyboardMarkup } from 'telegram-typings';
import RedisSession from 'telegraf-session-redis';

// I  know that publishing is only to manga and airing to anime, but even so is they have their following data type just
// to not break the pattern.
export type AllRequests = 'MENU' |
                          'READ' |
                          'USER' |
                          'TIME' |
                          'GUIDE' |
                          'ANIME' |
                          'WATCH' |
                          'MANGA' |
                          'STAFF' |
                          'ABOUT' |
                          'STUDIO' |
                          'NOTIFY' |
                          'COUNTER' |
                          'READLIST' |
                          'LOCATION' |
                          'LANGUAGE' |
                          'CHARACTER' |
                          'COUNTDOWN' |
                          'WATCHLIST' |
                          'ANIME-ALL' |
                          'MANGA-ALL' |
                          'ANIME-SOON' |
                          'MANGA-SOON' |
                          'TIME-PERIOD' |
                          'ANIME-AIRING' |
                          'NOTIFY-ENABLE' |
                          'NOTIFY-DISABLE' |
                          'TIME-PERIOD-AM' |
                          'TIME-PERIOD-PM' |
                          'LANGUAGE-DUTCH' |
                          'ANIME-CANCELLED' |
                          'MANGA-CANCELLED' |
                          'ANIME-COMPLETED' |
                          'MANGA-COMPLETED' |
                          'ANIME-MORE-INFO' |
                          'MANGA-MORE-INFO' |
                          'LANGUAGE-FRENCH' |
                          'LANGUAGE-FRENCH' |
                          'LANGUAGE-ARABIC' |
                          'TIME-HOUR-VALUE' |
                          'MANGA-PUBLISHING' |
                          'LANGUAGE-ENGLISH' |
                          'LANGUAGE-SPANISH' |
                          'LANGUAGE-DEUTSCH' |
                          'LANGUAGE-RUSSIAN' |
                          'LANGUAGE-CHINESE' |
                          'LANGUAGE-ITALIAN' |
                          'LANGUAGE-JAPANESE' |
                          'LANGUAGE-PORTUGUESE' |
                          'LANGUAGE-INDONESIAN'

export type RequestsFiled = 'LIST' |
                            'MENU' |
                            'GENRES' |
                            'DESCRIPTION'

export type Period = 'AM' | 'PM'

interface IMyRedis extends RedisSession {
    readonly language: string;
}

export interface IBotContext extends ContextMessageUpdate {
    readonly i18n: I18n;
    readonly redis: IMyRedis;
}

export interface ITelegramContext {
    readonly message: string;
    readonly translation?: I18n;
}

export interface IKeyboardHourContext {
    readonly period: Period;
}

export interface IPeriodContext {
    readonly hour: number;
    readonly period: Period;
}

export interface IRequestsContext {
    readonly id: number;
    readonly user: number;
    readonly dbStatus: boolean;
    readonly translation: I18n;
    readonly request: AllRequests;
    readonly field: RequestsFiled;
}

export interface ICallbackKeyboardContext {
    readonly translation: I18n;
    readonly request: AllRequests;
}

export interface IMinimumInline {
    title: string;
    thumb_url: string;
    description: string;
    message_text: string;
    reply_markup?: InlineKeyboardMarkup;
}
