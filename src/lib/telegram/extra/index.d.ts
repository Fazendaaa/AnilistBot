import { I18n } from 'telegraf-i18n';
import { LocationRequest, ListFilterRequest } from 'telegraf-bot-typings';

export interface IMediaExtraContext {
    readonly translation: I18n;
    readonly filter: ListFilterRequest;
}

export interface ILocationExtraContext {
    readonly translation: I18n;
    readonly request: LocationRequest;
}
