import { I18n } from 'telegraf-i18n';
import { AllRequests } from '..';

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

export interface IMenuTimeContext extends IMenuContext { }

export interface IMenuAnimeContext extends IMenuCommonContext { }

export interface IMenuMangaContext extends IMenuCommonContext { }

export interface IMenuNotifyContext extends IMenuBasicContext { }

export interface IMenuLanguageContext extends IMenuBasicContext { }
