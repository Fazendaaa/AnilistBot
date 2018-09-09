import { I18n } from 'telegraf-i18n';
import { ListRequest, TimeRequest, LanguageRequest, NotifyRequests, ListFilterRequest, MenuRequest, UserRequest } from '..';
import { IListTitle } from '../../anilist/queries';
import { MediaStatus, IMediaTitle } from '../../anilist';
import { IAllSubscriptionResponse } from '../../database/subscriptions';

interface IMenuCommonContext {
    readonly translation: I18n;
    readonly request: ListFilterRequest;
}

interface IMenuBasicContext {
    readonly user: number;
    readonly translation: I18n;
    readonly request: ListFilterRequest;
}

export interface IMenuContext {
    readonly id: number;
    readonly user: number;
    readonly translation: I18n;
    readonly request: ListFilterRequest;
}

export interface IHandleCounter {
    readonly id: number;
    readonly translation: I18n;
}

export interface IInfoContext {
    readonly siteUrl: string;
    readonly translation: I18n;
    readonly title: IMediaTitle;
    readonly countryOfOrigin: string;
}

export interface IToPrintContext {
    readonly translation: I18n;
    readonly filterBy: MediaStatus;
    readonly response: IListTitle[];
}

export interface INativeContext {
    readonly native: string;
    readonly translation: I18n;
    readonly countryOfOrigin: string;
}

export interface IMediaRequestContext {
    readonly user: number;
    readonly translation: I18n;
    readonly status: MediaStatus | null;
}

export interface IMenuTimeContext {
    readonly id: number;
    readonly user: number;
    readonly translation: I18n;
    readonly request: TimeRequest;
}

export interface IHandleLanguage {
    readonly id: number;
    readonly translation: I18n;
    readonly request: UserRequest | LanguageRequest;
}

export interface IHandleUserKeyboard {
    readonly translation: I18n;
    readonly request: UserRequest | LanguageRequest;
}

export interface IMenuNotifyContext {
    readonly id: number;
    readonly user: number;
    readonly translation: I18n;
    readonly request: NotifyRequests;
}

export interface IUserTTFInfo {
    time: Date;
    notify: boolean;
    language: string;
    timezone: string;
    anime: IAllSubscriptionResponse[];
    manga: IAllSubscriptionResponse[];
}

export interface IHandleMedia {
    readonly id: number;
    readonly user: IUserTTFInfo;
    readonly list: ListRequest;
    readonly translation: I18n;
    readonly filter: ListFilterRequest;
}

export interface IHandleUserData {
    readonly id: number;
    readonly translation: I18n;
}

export interface IHandleUser {
    readonly id: number;
    readonly translation: I18n;
    readonly request: UserRequest | LanguageRequest;
}

export interface IHandleMediaKeyboard {
    readonly list: ListRequest;
    readonly translation: I18n;
    readonly filter: ListFilterRequest;
}

export interface IMenuAnimeContext extends IMenuBasicContext { }

export interface IMenuMangaContext extends IMenuBasicContext { }
