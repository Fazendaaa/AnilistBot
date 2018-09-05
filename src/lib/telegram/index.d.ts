import { I18n } from 'telegraf-i18n';
import { ContextMessageUpdate } from 'telegraf';
import { InlineKeyboardMarkup } from 'telegram-typings';
import RedisSession from 'telegraf-session-redis';
import { MediaStatus } from '../anilist';

export type Period = 'AM' | 'PM'

export type KindRequest = 'LIST' |
                          'MENU' |
                          'ANILIST'

export type MenuRequest = 'USER' |
                          'ABOUT' |
                          'GUIDE' |
                          'COUNTER' |
                          'COUNTDOWN'

export type UerRequest = 'TIME' |
                         'NOTIFY' |
                         'LOCATION' |
                         'LANGUAGE'

export type TimeRequest = Period |
                          'VALUE' |
                          'PERIOD'

export type NotifyRequests = 'ENABLE' |
                             'DISABLE'

export type ListRequest = 'READ' |
                          'WATCH'

export type LocationRequest = 'ASK' |
                              'SEND'

export type ListFilterRequest = 'ALL' |
                                'MORE-INFO' |
                                MediaStatus

export type LanguageRequest = 'DUTCH' |
                              'FARSI' |
                              'FRENCH' |
                              'FRENCH' |
                              'ARABIC' |
                              'ENGLISH' |
                              'SPANISH' |
                              'DEUTSCH' |
                              'RUSSIAN' |
                              'CHINESE' |
                              'ITALIAN' |
                              'JAPANESE' |
                              'PORTUGUESE' |
                              'INDONESIAN'

interface IMyRedis extends RedisSession {
    readonly language: string;
}

export interface IBotContext extends ContextMessageUpdate {
    readonly i18n: I18n;
    readonly scene: any;
    readonly redis: IMyRedis;
}

export interface ITelegramContext {
    readonly message: string;
    readonly translation: I18n;
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
    readonly field: KindRequest;
    // readonly request: AllRequests;
}

export interface IKeyboardContext {
    readonly translation: I18n;
    readonly request: UerRequest;
}

export interface ICallbackKeyboardContext {
    readonly dbStatus: boolean;
    readonly translation: I18n;
    // readonly request: AllRequests;
}

export interface IMinimumInline {
    readonly title: string;
    readonly thumb_url: string;
    readonly description: string;
    readonly message_text: string;
    readonly reply_markup?: InlineKeyboardMarkup;
}
