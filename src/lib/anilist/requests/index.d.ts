import { I18n } from 'telegraf-i18n';
import { AnilistObject } from '..';

export interface IDataContext {
    readonly id: number;
    readonly translation: I18n;
    readonly content: AnilistObject;
}

export interface ITranslateDescriptionContext {
    readonly id: number;
    readonly to: string;
    readonly message: string;
    readonly content: AnilistObject;
}

export interface ITranslateGenresContext {
    readonly id: number;
    readonly to: string;
    readonly content: AnilistObject;
    readonly message: Array<string>;
}

export interface INewReleaseContext {
    readonly id: number;
    readonly content: 'ANIME' | 'MANGA';
}

export interface ISelectQuery {
    readonly id: number;
    readonly content: AnilistObject;
}
