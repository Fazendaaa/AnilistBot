import { I18n } from 'telegraf-i18n';
import { IMedia, ICharacters } from '../../queries';
import { ICoverImage, MediaStatus, MediaFormat, IMediaTitle, MediaSeason, IMediaRanking, IMediaTrailer, MediaSource,
IFuzzyDateInt, ICharacterName, IAiringSchedule, IMediaExternalLink, IStaffName, IStudioConnection } from '../../';

export interface ICharacterMessage {
    readonly translation: I18n;
    readonly characters: ICharacters;
}

export interface IAdultContext {
    readonly isAdult: boolean,
    readonly translation: I18n;
}

export interface IVolumesContext {
    readonly volumes: number;
    readonly translation: I18n;
}

export interface IAverageContext {
    readonly translation: I18n;
    readonly averageScore: number;
}

export interface IEpisodesContext {
    readonly episodes: number;
    readonly translation: I18n;
}

export interface IChaptersContext {
    readonly chapters: number;
    readonly translation: I18n;
}

export interface IDurationContext {
    readonly duration: number;
    readonly translation: I18n;
}

export interface IStartDateContext {
    readonly startDate: IFuzzyDateInt;
    readonly translation: I18n;
    readonly status: MediaStatus;
}

export interface IEndDateContext {
    readonly endDate: IFuzzyDateInt;
    readonly translation: I18n;
    readonly status: MediaStatus;
}

export interface ITrailerContext {
    readonly translation: I18n;
    readonly trailer: IMediaTrailer;
}

export interface IMediaImageContext {
    readonly bannerImage: string;
    readonly coverImage: ICoverImage;
}

export interface IRakingContext {
    readonly translation: I18n;
    readonly rankings: Array<IMediaRanking>;
}

export interface ISeasonContext {
    readonly translation: I18n;
    readonly season: MediaSeason;
}

export interface IStatusContext {
    readonly translation: I18n;
    readonly status: MediaStatus;
}

export interface IAllTitleContext {
    readonly title: IMediaTitle;
    readonly translation: I18n;
    readonly countryOfOrigin: string;
}

export interface IAllTitleResponse {
    readonly romaji: string;
    readonly native: string;
    readonly english: string;
}

export interface ISourceContext {
    readonly translation: I18n;
    readonly source: MediaSource;
}

export interface IFormatContext {
    readonly translation: I18n;
    readonly format: MediaFormat;
}

export interface IKindContext {
    readonly translation: I18n;
    readonly source: MediaSource;
    readonly format: MediaFormat;
}

export interface ICharactersNameContext {
    readonly translation: I18n;
    readonly name: ICharacterName;
}

export interface ICharactersNameResponse {
    readonly name: string;
    readonly native: string;
    readonly alternative: string;    
}

export interface INextAiringEpisodeContext {
    readonly translation: I18n;
    readonly nextAiringEpisode: IAiringSchedule;
}

export interface IExternalLinksContext {
    readonly translation: I18n;
    readonly externalLinks: Array<IMediaExternalLink>;
}

export interface IStaffNameContext {
    readonly name: IStaffName;
    readonly translation: I18n;
}

export interface IStudiosNameContext {
    readonly name: string;
    readonly translation: I18n;
}

export interface IStudiosContext {
    readonly translation: I18n;
    readonly studios: IStudioConnection;
}
