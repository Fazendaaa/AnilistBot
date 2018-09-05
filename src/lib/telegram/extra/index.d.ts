import { I18n } from 'telegraf-i18n';
import { AllRequests } from 'telegraf-bot-typings';

export interface IExtraContext {
    readonly translation: I18n;
    readonly request: AllRequests;
}
