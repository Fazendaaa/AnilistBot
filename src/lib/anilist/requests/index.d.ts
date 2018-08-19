import { AllTypes } from '..';
import { I18n } from 'telegraf-i18n';

export type RequestsFiled = 'list' |
                            'genres' |
                            'description'

export interface RequestsContext {
    readonly id: number;
    readonly type: AllTypes;
    readonly translation: I18n;
    readonly field: RequestsFiled;
}

export interface DataContext {
    readonly id: number;
    readonly type: AllTypes;
    readonly translation: I18n;
}

export interface TranslateDescriptionContext {
    readonly id: number;
    readonly type: AllTypes;
    readonly message: string;
    readonly translation: I18n;
}

export interface TranslateGenresContext {
    readonly id: number;
    readonly translation: I18n;
    readonly message: Array<string>;
}
