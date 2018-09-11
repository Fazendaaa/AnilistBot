import { I18n } from 'telegraf-i18n';
import { ListRequest, ListAction } from 'telegraf-bot-typings';
import { AnilistRequest, AnilistObject } from '../../anilist';

export interface ISubscriptionContext {
    readonly id: number;
    readonly user: number;
    readonly translation: I18n;
}

export interface IListContext {
    readonly id: number;
    readonly user: number;
    readonly dbStatus: boolean;
    readonly translation: I18n;
    readonly action: ListAction;
    readonly request: ListRequest;
}

export interface IHandleList {
    readonly id: number;
    readonly user: number;
    readonly translation: I18n;
    readonly action: ListAction;
}

export interface IAnilistContext {
    readonly id: number;
    readonly dbStatus: boolean;
    readonly translation: I18n;
    readonly content: AnilistObject;
    readonly request: AnilistRequest;
}
