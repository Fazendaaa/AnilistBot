import { I18n } from 'telegraf-i18n';
import { MediaType } from '..';

export type AllRequests = 'READ' |
                          'ANIME' |
                          'WATCH' |
                          'MANGA' |
                          'STAFF' |
                          'STUDIO' |
                          'CHARACTER'

export type RequestsFiled = 'LIST' |
                            'GENRES' |
                            'DESCRIPTION'

export interface RequestsContext {
    readonly id: number;
    readonly type: AllRequests;
    readonly translation: I18n;
    readonly field: RequestsFiled;
}

export interface DataContext {
    readonly id: number;
    readonly type: AllRequests;
    readonly translation: I18n;
}

export interface TranslateDescriptionContext {
    readonly id: number;
    readonly to: string;
    readonly message: string;
    readonly type: AllRequests;
}

export interface TranslateGenresContext {
    readonly id: number;
    readonly to: string;
    readonly type: MediaType;
    readonly message: Array<string>;
}
