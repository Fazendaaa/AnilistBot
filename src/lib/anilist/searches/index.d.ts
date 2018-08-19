import { I18n } from 'telegraf-i18n';
import { Characters, Media, Studios, Staff } from '../queries/searches';

export interface SearchContext {
    readonly page: number;
    readonly query: string;
    readonly perPage: number;
    readonly translation: I18n;
}

export interface StaffContext {
    readonly staff: Staff;
    readonly translation: I18n;
}

export interface StudiosContext {
    readonly studios: Studios;
    readonly translation: I18n;
}

export interface CharactersContext {
    readonly translation: I18n;
    readonly characters: Characters;
}

export interface MediaContext {
    readonly media: Media;
    readonly translation: I18n;
}
