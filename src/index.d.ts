import { ContextMessageUpdate } from 'telegraf';
import { I18n } from 'telegraf-i18n';

export interface BotContext extends ContextMessageUpdate {
    i18n: I18n;
}
