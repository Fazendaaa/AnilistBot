import { I18n } from "telegraf-i18n";
import { ContextMessageUpdate } from "telegraf";

export interface BotContext extends ContextMessageUpdate {
    readonly i18n: I18n;
}

export interface TelegramContext {
    readonly message: string;
    readonly translation?: I18n;
}
