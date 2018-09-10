import { I18n } from 'telegraf-i18n';
import { ListFilterRequest, TimeRequest, NotifyRequests, LanguageRequest, ListRequest, UserRequest, LocationRequest, LocationConfirmRequest } from 'telegraf-bot-typings';
import { IListTitle } from '../../anilist/queries';
import { IAllSubscriptionResponse } from '../../database/subscriptions';
import { IMediaTitle, IAiringSchedule } from '../../anilist';
import { IUserTTFInfo, ICityInfo } from '../scene';

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
    readonly value: LanguageRequest | NotifyRequests | number;
}

export interface IHandleLocation {
    readonly id: number;
    readonly translation: I18n;
    readonly request: LocationRequest;
    readonly confirm: LocationConfirmRequest;
}

export interface IHandleRemoveLocation {
    readonly id: number;
    readonly translation: I18n;
    readonly confirm: LocationConfirmRequest;
}

export interface ILocationData {
    readonly city: string;
    readonly country?: string;
    readonly province?: string;
}

export interface ITimeFormat {
    readonly time: Date;
    readonly timezone: string;
    readonly translation: I18n;
}

export interface IHandleCountdown {
    readonly id: number;
    readonly translation: I18n;
    readonly user: IUserTTFInfo;
}

export interface IHandleCountdownData {
    readonly translation: I18n;
    readonly user: IAllSubscriptionResponse[];
}

export interface ICountdownInfo {
    readonly index: number;
    readonly siteUrl: string;
    readonly translation: I18n;
    readonly title: IMediaTitle;
    readonly countryOfOrigin: string;
    readonly nextAiringEpisode: IAiringSchedule;
}
