import { I18n } from 'telegraf-i18n';
import { MediaType } from '..';
import { AllRequests, RequestsFiled } from '../../telegram';

export interface IDataContext {
    readonly id: number;
    readonly translation: I18n;
    readonly request: AllRequests;
}

export interface ITranslateDescriptionContext {
    readonly id: number;
    readonly to: string;
    readonly message: string;
    readonly request: AllRequests;
}

export interface ITranslateGenresContext {
    readonly id: number;
    readonly to: string;
    readonly request: MediaType;
    readonly message: Array<string>;
}
