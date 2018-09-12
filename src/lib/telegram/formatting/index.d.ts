import { I18n } from 'telegraf-i18n';
import { IMedia, ICharacters } from '../../anilist/queries';
import { ICoverImage, MediaStatus, MediaFormat, IMediaTitle, MediaSeason, IMediaRanking, IMediaTrailer, MediaSource, IFuzzyDateInt,
ICharacterName, IAiringSchedule, IMediaExternalLink, IStaffName, IStudioConnection, IMediaStreamingEpisode } from '../../anilist';

export interface ICharacterMessage {
    readonly language: string;
    readonly translation: I18n;
    readonly characters: ICharacters;
}

export interface IAdultContext {
    readonly language: string;
    readonly isAdult: boolean,
    readonly translation: I18n;
}

export interface IVolumesContext {
    readonly language: string;
    readonly volumes: number;
    readonly translation: I18n;
}

export interface IAverageContext {
    readonly language: string;
    readonly translation: I18n;
    readonly averageScore: number;
}

export interface INewContentContext {
    readonly language: string;
    readonly episodes: number;
    readonly translation: I18n;
    readonly nextAiringEpisode: IAiringSchedule;
}

export interface IChaptersContext {
    readonly language: string;
    readonly chapters: number;
    readonly translation: I18n;
}

export interface IDurationContext {
    readonly language: string;
    readonly duration: number;
    readonly translation: I18n;
}

export interface IStartDateContext {
    readonly language: string;
    readonly translation: I18n;
    readonly status: MediaStatus;
    readonly startDate: IFuzzyDateInt;
}

export interface IEndDateContext {
    readonly language: string;
    readonly translation: I18n;
    readonly status: MediaStatus;
    readonly endDate: IFuzzyDateInt;
}

export interface ITrailerContext {
    readonly language: string;
    readonly translation: I18n;
    readonly trailer: IMediaTrailer;
}

export interface IMediaImageContext {
    readonly bannerImage: string;
    readonly coverImage: ICoverImage;
}

export interface IRakingContext {
    readonly language: string;
    readonly translation: I18n;
    readonly rankings: Array<IMediaRanking>;
}

export interface ISeasonContext {
    readonly language: string;
    readonly translation: I18n;
    readonly season: MediaSeason;
}

export interface IStatusContext {
    readonly language: string;
    readonly translation: I18n;
    readonly status: MediaStatus;
}

export interface IAllTitleContext {
    readonly language: string;
    readonly translation: I18n;
    readonly title: IMediaTitle;
    readonly countryOfOrigin: string;
}

export interface IAllTitleResponse {
    readonly romaji: string;
    readonly native: string;
    readonly english: string;
}

export interface ISourceContext {
    readonly language: string;
    readonly translation: I18n;
    readonly source: MediaSource;
}

export interface IFormatContext {
    readonly language: string;
    readonly translation: I18n;
    readonly format: MediaFormat;
}

export interface IKindContext {
    readonly language: string;
    readonly translation: I18n;
    readonly source: MediaSource;
    readonly format: MediaFormat;
}

export interface IStreamingEpisodesContext {
    readonly language: string;
    readonly translation: I18n;
    readonly streamingEpisodes: IMediaStreamingEpisode[];
}

export interface ICharactersNameContext {
    readonly language: string;
    readonly translation: I18n;
    readonly name: ICharacterName;
}

export interface ICharactersNameResponse {
    readonly name: string;
    readonly native: string;
    readonly language: string;
    readonly alternative: string;
}

export interface INextAiringEpisodeContext {
    readonly language: string;
    readonly translation: I18n;
    readonly nextAiringEpisode: IAiringSchedule;
}

export interface IExternalLinksContext {
    readonly language: string;
    readonly translation: I18n;
    readonly externalLinks: Array<IMediaExternalLink>;
}

export interface IStaffNameContext {
    readonly language: string;
    readonly name: IStaffName;
    readonly translation: I18n;
}

export interface IStudiosNameContext {
    readonly name: string;
    readonly language: string;
    readonly translation: I18n;
}

export interface IStudiosContext {
    readonly language: string;
    readonly translation: I18n;
    readonly studios: IStudioConnection;
}

export interface IParsingLinks {
    readonly language: string;
    readonly translation: I18n;
}
