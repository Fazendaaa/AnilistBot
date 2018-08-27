import { I18n } from 'telegraf-i18n';
import { AllRequests } from '..';

export interface MenuContext {
    readonly translation: I18n;
    readonly type: AllRequests;
}
