import { IMediaTitle, ICoverImage, IFuzzyDateInt, MediaFormat, MediaStatus, IMediaTrailer, MediaSource, IAiringSchedule, IMediaRanking,
IMediaExternalLink, MediaSeason, MediaType, ICharacterName, ICharacterImage, IStaffName, StaffLanguage, IStaffImage, IStudioConnection
} from '..';

interface IMedia {
    readonly id: number;
    readonly type: MediaType;
    readonly volumes: number;
    readonly siteUrl: string;
    readonly duration: number;
    readonly episodes: number;
    readonly chapters: number;
    readonly isAdult: boolean;
    readonly title: IMediaTitle;
    readonly season: MediaSeason;
    readonly status: MediaStatus;
    readonly format: MediaFormat;
    readonly source: MediaSource;
    readonly bannerImage: string;
    readonly averageScore: number;
    readonly genres: Array<string>;
    readonly endDate: IFuzzyDateInt;
    readonly trailer: IMediaTrailer;
    readonly coverImage: ICoverImage;
    readonly startDate: IFuzzyDateInt;
    readonly countryOfOrigin: string;
    readonly studios: IStudioConnection;
    readonly rankings: Array<IMediaRanking>;
    readonly nextAiringEpisode: IAiringSchedule;
    readonly externalLinks: Array<IMediaExternalLink>;
}

export interface ICharacters {
    readonly id: number;
    readonly siteUrl: string;
    readonly name: ICharacterName;
    readonly image: ICharacterImage;
}

export interface IStudios {
    readonly id: number;
    readonly name: string;
    readonly siteUrl: string;
}

export interface IStaff {
    readonly id: number;
    readonly name: IStaffName;
    readonly siteUrl: string;
    readonly image: IStaffImage;
    readonly language: StaffLanguage;
}

export interface IMediaPage {
    readonly media: Array<IMedia>;
}

export interface ICharactersPage {
    readonly characters: Array<ICharacters>;
}

export interface IStudiosPage {
    readonly studios: Array<IStudios>;
}

export interface IStaffPage {
    readonly staff: Array<IStaff>;
}

export interface IMediaData {
    readonly Page: IMediaPage;
}

export interface ICharactersData {
    readonly Page: ICharactersPage;
}

export interface IStudiosData {
    readonly Page: IStudiosPage;
}

export interface IStaffData {
    readonly Page: IStaffPage;
}

export interface IMediaQueryPage {
    readonly data: IMediaData;
}

export interface ICharactersQueryPage {
    readonly data: ICharactersData;
}

export interface IStudiosQueryPage {
    readonly data: IStudiosData;
}

export interface IStaffQueryPage {
    readonly data: IStaffData;
}

interface IDescription {
    readonly description: string;
}

interface IMediaDescription {
    readonly Media: IDescription;
}

interface IGenres {
    readonly genres: Array<string>;
}

interface INextEpisode {
    readonly nextAiringEpisode: IAiringSchedule;
}

interface ITitleStatus {
    readonly title: IMediaTitle;
    readonly status: MediaStatus;
}

interface IMediaGenres {
    readonly Media: IGenres;
}

interface IMediaNextEpisode {
    readonly Media: INextEpisode;
}

interface IMediaTitleStatus {
    readonly Media: ITitleStatus;
}

export interface IRequestsDescription {
    readonly data: IMediaDescription;
}

export interface IRequestsGenres {
    readonly data: IMediaGenres;
}

export interface IRequestNextEpisode {
    readonly data: IMediaNextEpisode;
}

export interface IRequestTitleStatus {
    readonly data: IMediaTitleStatus;
}
