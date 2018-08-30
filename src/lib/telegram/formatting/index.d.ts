import { I18n } from 'telegraf-i18n';
import { AllRequests } from '..';

export interface IMenuContext {
    readonly translation: I18n;
    readonly request: AllRequests;
}
