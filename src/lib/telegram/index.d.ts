import { I18n } from "telegraf-i18n";
import { ContextMessageUpdate } from "telegraf";

export type AllRequests = 'READ' |
                          'USER' |
                          'TIME' |
                          'GUIDE' |
                          'ANIME' |
                          'WATCH' |
                          'MANGA' |
                          'STAFF' |
                          'ABOUT' |
                          'STUDIO' |
                          'NOTIFY' |
                          'READLIST' |
                          'CHARACTER' |
                          'COUNTDOWN' |
                          'WATCHLIST' |
                          'BACK-MENU' |
                          'BACK-USER' |
                          'ALL-ANIME' |
                          'ALL-MANGA' |
                          'BACK-GUIDE' |
                          'SOON-ANIME' |
                          'SOON-MANGA' |
                          'AIRING-ANIME' |
                          'CANCELLED-ANIME' |
                          'CANCELLED-MANGA' |
                          'COMPLETED-ANIME' |
                          'COMPLETED-MANGA' |
                          'MORE-INFO-ANIME' |
                          'MORE-INFO-MANGA' |
                          'PUBLISHING-MANGA'

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
    readonly translation: I18n;
    readonly request: AllRequests;
    readonly field: RequestsFiled;
}

export interface CallbackKeyboardContext {
    readonly translation: I18n;
    readonly request: AllRequests;
}
