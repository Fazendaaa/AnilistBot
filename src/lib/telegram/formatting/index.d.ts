import { I18n } from 'telegraf-i18n';
import { AllRequests } from '..';

interface IMenuCommonContext {
    readonly translation: I18n;
    readonly request: AllRequests;
}

export interface IMenuContext {
    readonly user: number;
    readonly translation: I18n;
    readonly request: AllRequests;
}

export interface IMenuUserContext {
    readonly user: number;
    readonly translation: I18n;
}

export interface IMenuAnimeContext extends IMenuCommonContext { }

export interface IMenuMangaContext extends IMenuCommonContext { }

export interface IMenuLanguageContext extends IMenuContext { }

export interface IMenuNotifyContext extends IMenuContext { }

export interface IMenuTimeContext extends IMenuCommonContext { }
