import { I18n } from 'telegraf-i18n';
import { AllRequests } from '..';
import { IListTitle } from '../../anilist/queries';
import { MediaStatus, IMediaTitle } from '../../anilist';

interface IMenuCommonContext {
    readonly translation: I18n;
    readonly request: AllRequests;
}

interface IMenuBasicContext {
    readonly user: number;
    readonly translation: I18n;
    readonly request: AllRequests;
}

export interface IMenuContext {
    readonly id: number;
    readonly user: number;
    readonly translation: I18n;
    readonly request: AllRequests;
}

export interface IMenuUserContext {
    readonly user: number;
    readonly translation: I18n;
}

export interface IListContext {
    readonly id: number;
    readonly user: number;
    readonly translation: I18n;
    readonly request: AllRequests;
}

export interface ISubscriptionContext {
    readonly id: number;
    readonly user: number;
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

export interface IMenuTimeContext extends IMenuContext { }

export interface IMenuAnimeContext extends IMenuBasicContext { }

export interface IMenuMangaContext extends IMenuBasicContext { }

export interface IMenuNotifyContext extends IMenuBasicContext { }

export interface IMenuLanguageContext extends IMenuBasicContext { }
