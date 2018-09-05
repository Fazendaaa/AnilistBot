import { AllRequests } from 'telegraf-bot-typings';
import { I18n } from 'telegraf-i18n';

interface IMediaKeyboardContext {
    readonly id: number;
    readonly type: AllRequests;
    readonly translation: I18n;
}
