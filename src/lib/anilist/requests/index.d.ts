import { I18n } from 'telegraf-i18n';
import { AnilistObject, MediaType } from '..';

export interface IDataContext {
    readonly id: number;
    readonly translation: I18n;
    readonly request: AnilistObject;
}

export interface ITranslateDescriptionContext {
    readonly id: number;
    readonly to: string;
    readonly message: string;
    readonly request: AnilistObject;
}

export interface ITranslateGenresContext {
    readonly id: number;
    readonly to: string;
    readonly request: MediaType;
    readonly message: Array<string>;
}
