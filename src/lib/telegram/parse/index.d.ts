import { I18n } from 'telegraf-i18n';
import { ListFilterRequest, TimeRequest, NotifyRequests, LanguageRequest, ListRequest, UserRequest, LocationRequest } from 'telegraf-bot-typings';
import { IListTitle } from '../../anilist/queries';
import { IAllSubscriptionResponse } from '../../database/subscriptions';
import { IMediaTitle } from '../../anilist';
import { IUserTTFInfo } from '../scene';

export interface IInfoContext {
    readonly siteUrl: string;
    readonly translation: I18n;
    readonly title: IMediaTitle;
    readonly countryOfOrigin: string;
}

export interface IMediaRequestContext {
    readonly translation: I18n;
    readonly status: ListFilterRequest;
    readonly user: IAllSubscriptionResponse[];
}

export interface INativeContext {
    readonly native: string;
    readonly translation: I18n;
    readonly countryOfOrigin: string;
}

export interface IToPrintContext {
    readonly translation: I18n;
    readonly response: IListTitle[];
    readonly filterBy: ListFilterRequest;
}

export interface IAnimeContext {
    readonly translation: I18n;
    readonly filter: ListFilterRequest;
    readonly user: IAllSubscriptionResponse[];
}

export interface IMangaContext {
    readonly translation: I18n;
    readonly filter: ListFilterRequest;
    readonly user: IAllSubscriptionResponse[];
}

export interface IHandleTime {
    readonly id: number;
    readonly value: number;
    readonly translation: I18n;
    readonly request: TimeRequest;
}

export interface IHandleNotify {
    readonly id: number;
    readonly translation: I18n;
    readonly value: NotifyRequests;
}

export interface IHandleLanguage {
    readonly id: number;
    readonly translation: I18n;
    readonly value: LanguageRequest;
}

export interface IHandleUserData {
    readonly id: number;
    readonly translation: I18n;
}

export interface IHandleCounter {
    readonly id: number;
    readonly translation: I18n;
}

export interface IHandleMedia {
    readonly id: number;
    readonly user: IUserTTFInfo;
    readonly list: ListRequest;
    readonly translation: I18n;
    readonly filter: ListFilterRequest;
}

export interface IHandleUser {
    readonly id: number;
    readonly translation: I18n;
    readonly request: UserRequest | TimeRequest;
    readonly value: LanguageRequest | NotifyRequests | LocationRequest | number;
}

export interface IHandleLocation {
    readonly translation: I18n;
    readonly value: LocationRequest;
}
