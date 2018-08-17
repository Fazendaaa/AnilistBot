import { I18n } from 'telegraf-i18n';

export interface SearchContext {
    readonly page: number;
    readonly query: string;
    readonly perPage: number;
    readonly translation: I18n;
}
