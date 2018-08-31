import { I18n } from 'telegraf-i18n';
import { IMedia, ICharacters, IStudios, IStaff } from '../queries';
import { ICoverImage, MediaFormat, IMediaTitle, MediaSource, ICharacterName, IAiringSchedule, IStaffName } from '..';
import { AllRequests } from '../../telegram';

interface IKeyboardContext {
    readonly id: number;
    readonly type: AllRequests;
    readonly translation: I18n;
}

export interface IMediaMessage {
    readonly media: IMedia;
    readonly translation: I18n;
}

export interface ICharacterMessage {
    readonly translation: I18n;
    readonly characters: ICharacters;
}

export interface IStudioMessage {
    readonly studios: IStudios;
    readonly translation: I18n;
}

export interface IStaffMessage {
    readonly staff: IStaff;
    readonly translation: I18n;
}

export interface IImageContext {
    readonly bannerImage: string;
    readonly coverImage: ICoverImage;
}

export interface ITitleContext {
    readonly title: IMediaTitle;
    readonly translation: I18n;
}

export interface IMediaDescriptionContext {
    readonly title: IMediaTitle;
    readonly translation: I18n;
    readonly source: MediaSource; 
    readonly format: MediaFormat;
    readonly nextAiringEpisode: IAiringSchedule;
}

export interface ICharacterDescriptionContext {
    readonly translation: I18n;
}

export interface IStudiosDescriptionContext {
    readonly translation: I18n;
}

export interface IStaffDescriptionContext {
    readonly translation: I18n;
}

export interface ICharactersNameContext {
    readonly translation: I18n;
    readonly name: ICharacterName;
}

export interface IStaffNameContext {
    readonly name: IStaffName;
    readonly translation: I18n;
}

export interface IStaffNameResponse {
    readonly name: string;
    readonly native: string;
}

export interface IStudiosNameContext {
    readonly name: string;
    readonly translation: I18n;
}
