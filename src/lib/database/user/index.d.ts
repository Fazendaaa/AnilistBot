import { Document } from 'mongoose';
import { MediaStatus, IMediaTitle } from '../../anilist';
import { I18n } from 'telegraf-i18n';

type errorFunction = (res: Error) => void;

type successAllFunction = (res: IDBUser[]) => void;

type successFunction = (res: IDBUser) => void;

export interface IDBUser extends Document {
    time: Date;
    notify: boolean;
    counter: number;
    language: string;
    timezone: string;
    readonly _id: number;
}

export interface IDBUserInfo {
    readonly time: Date;
    readonly _id: number;
    readonly notify: boolean;
    readonly counter: number;
    readonly language: string;
    readonly timezone: string;
}

export interface ILanguageContext {
    readonly id: number;
    readonly language: string;
}

export interface IUserContext {
    readonly id: number;
    readonly error: errorFunction;
    readonly success: successFunction;
}

export interface IUserAllContext {
    readonly error: errorFunction;
    readonly success: successAllFunction;
}

export interface IUserTimeContext {
    readonly id: number;
    readonly time: number;
}

export interface IUserNotifyContext {
    readonly id: number;
    readonly notify: boolean;
}

export interface IUserLanguageContext {
    readonly id: number;
    readonly language: string;
}

export interface IUserTimezoneContext {
    readonly id: number;
    readonly timezone: string;
}

export interface IUserAnimeContext {
    readonly user: number;
    readonly translation: I18n;
    readonly status: MediaStatus | null;
}

export interface IUserMangaContext {
    readonly user: number;
    readonly translation: I18n;
    readonly status: MediaStatus | null;
}

export interface IToPrintContext {
    readonly siteUrl: string;
    readonly translation: I18n;
    readonly title: IMediaTitle;
    readonly countryOfOrigin: string;
}

export interface INativeContext {
    readonly native: string;
    readonly translation: I18n;
    readonly countryOfOrigin: string;
}
