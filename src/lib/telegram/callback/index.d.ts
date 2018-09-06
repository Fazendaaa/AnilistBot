import { I18n } from 'telegraf-i18n';
import { ListRequest } from 'telegraf-bot-typings';

export interface ISubscriptionContext {
    readonly id: number;
    readonly user: number;
    readonly translation: I18n;
}

export interface IListContext {
    readonly id: number;
    readonly user: number;
    readonly translation: I18n;
    readonly request: ListRequest;
}
