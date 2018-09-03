import { I18n } from 'telegraf-i18n';
import { AllRequests } from 'telegraf-bot-typings';
import { DBManga, DBAnime } from '../../database';

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
