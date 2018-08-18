import { MediaType } from '..';
import { I18n } from 'telegraf-i18n';

export type CallbackFiled = 'list' |
                            'genres' |
                            'description'

export interface CallbackContext {
    readonly id: number;
    readonly type: MediaType;
    readonly translation: I18n;
    readonly field: CallbackFiled;
}

export interface DataContext {
    readonly id: number;
    readonly type: MediaType;
    readonly translation: I18n;
}

export interface TranslateContext {
    readonly translation: I18n;
    readonly message: string | Array<string>;
}
