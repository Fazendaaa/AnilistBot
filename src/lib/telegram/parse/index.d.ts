import { I18n } from 'telegraf-i18n';
import { ListFilterRequest } from 'telegraf-bot-typings';
import { IListTitle } from '../../anilist/queries';
import { IAllSubscriptionResponse } from '../../database/subscriptions';
import { IMediaTitle } from '../../anilist';

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
