import { I18n } from 'telegraf-i18n';
import { ContextMessageUpdate } from 'telegraf';
import { InlineKeyboardMarkup } from 'telegram-typings';
import RedisSession from 'telegraf-session-redis';
import { MediaStatus } from '../anilist';

export type Period = 'AM' |
                     'PM'

export type KindRequest = 'LIST' |
                          'MENU' |
                          'SOURCE' |
                          'ANILIST'

export type MenuRequest = 'USER' |
                          'MENU' |
                          'MORE' |
                          'ABOUT' |
                          'GUIDE' |
                          'MEDIA' |
                          'COUNTER' |
                          'LOCATION' |
                          'COUNTDOWN' |
                          'RECOMMENDATION'
                          
export type UserRequest = 'ALL' |
                          'TIME' |
                          'NOTIFY' |
                          'LANGUAGE'

export type TimeRequest = Period |
                          'HOUR' |
                          'PERIOD'

export type NotifyRequests = 'ENABLE' |
                             'DISABLE'

export type ListRequest = 'READ' |
                          'WATCH'

export type ListAction = 'NOTIFY' |
                         'SUBSCRIBE' |
                         'UNSUBSCRIBE'

export type LocationRequest = 'ASK' |
                              'SEND' |
                              'REMOVE' |
                              'CONFIRM'

export type LocationConfirmRequest = 'NO' |
                                     'YES'

export type ListFilterRequest = 'ALL' |
                                'MORE-INFO' |
                                MediaStatus

export type LanguageRequest = 'DUTCH' |
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
    language: string;
}

interface Scene {
    readonly state: Object;
    readonly enter: (sceneId: string, defaultState?, silent?: boolean) => Scene;
    readonly reenter: (...args) => Scene;
    readonly leave: (...args) => Scene;
}

export interface IBotContext extends ContextMessageUpdate {
    readonly i18n: I18n;
    readonly scene: Scene;
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
}

export interface IKeyboardContext {
    readonly translation: I18n;
    readonly request: UserRequest;
}

export interface ICallbackKeyboardContext {
    readonly dbStatus: boolean;
    readonly translation: I18n;
}

export interface IMinimumInline {
    readonly title: string;
    readonly thumb_url: string;
    readonly description: string;
    readonly message_text: string;
    readonly reply_markup?: InlineKeyboardMarkup;
}
