import { I18n } from 'telegraf-i18n';

export interface IUsersLanguage {
    [language: string]: number[];
}

export interface IReduceLanguage {
    readonly content_id: number;
    readonly kind: boolean;
}

export interface IUserMessage {
    readonly language: string;
    readonly translation: I18n;
}
