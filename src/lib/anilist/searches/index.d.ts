import { I18n } from 'telegraf-i18n';
import { ICharacters, IMedia, IStudios, IStaff } from '../queries';
import { DocumentNode } from 'graphql';

export interface IAnilistContext {
    readonly page: number;
    readonly search: string;
    readonly perPage: number;
    readonly query: DocumentNode;
}

export interface ISearchContext {
    readonly page: number;
    readonly search: string;
    readonly perPage: number;
    readonly translation: I18n;
}

export interface IStaffContext {
    readonly staff: IStaff;
    readonly translation: I18n;
}

export interface IStudiosContext {
    readonly studios: IStudios;
    readonly translation: I18n;
}

export interface ICharactersContext {
    readonly translation: I18n;
    readonly characters: ICharacters;
}

export interface IMediaContext {
    readonly media: IMedia;
    readonly translation: I18n;
}
