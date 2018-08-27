import { I18n } from "telegraf-i18n";
import { ContextMessageUpdate } from "telegraf";

export type AllRequests = 'READ' |
                          'USER' |
                          'GUIDE' |
                          'ANIME' |
                          'WATCH' |
                          'MANGA' |
                          'STAFF' |
                          'STUDIO' |
                          'READLIST' |
                          'CHARACTER' |
                          'COUNTDOWN' |
                          'WATCHLIST'

export type RequestsFiled = 'LIST' |
                            'MENU' |
                            'GENRES' |
                            'DESCRIPTION'

export interface BotContext extends ContextMessageUpdate {
    readonly i18n: I18n;
}

export interface TelegramContext {
    readonly message: string;
    readonly translation?: I18n;
}

export interface KeyboardContext {
    readonly translation: I18n;
}

export interface RequestsContext {
    readonly id: number;
    readonly type: AllRequests;
    readonly translation: I18n;
    readonly field: RequestsFiled;
}

export interface CallbackKeyboardContext {
    readonly translation: I18n;
    readonly type: AllRequests;
}
