import { MediaTitle, CoverImage, FuzzyDateInt, MediaFormat, MediaStatus, MediaTrailer, MediaSource, AiringSchedule,
MediaRanking, MediaExternalLink, MediaSeason, MediaType, CharacterName, CharacterImage, StaffName, StaffLanguage, StaffImage } from '../..';

interface Media {
    readonly id: number;
    readonly type: MediaType;
    readonly volumes: number;
    readonly siteUrl: string;
    readonly duration: number;
    readonly episodes: number;
    readonly chapters: number;
    readonly isAdult: boolean;
    readonly title: MediaTitle;
    readonly season: MediaSeason;
    readonly status: MediaStatus;
    readonly format: MediaFormat;
    readonly source: MediaSource;
    readonly bannerImage: string;
    readonly averageScore: number;
    readonly genres: Array<string>;
    readonly endDate: FuzzyDateInt;
    readonly trailer: MediaTrailer;
    readonly coverImage: CoverImage;
    readonly startDate: FuzzyDateInt;
    readonly countryOfOrigin: string;
    readonly rankings: Array<MediaRanking>;
    readonly nextAiringEpisode: AiringSchedule;
    readonly externalLinks: Array<MediaExternalLink>;
}

interface Characters {
    readonly id: number;
    readonly siteUrl: string;
    readonly name: CharacterName;
    readonly image: CharacterImage;
}

interface Studios {
    readonly id: number;
    readonly name: string;
    readonly siteUrl: string;
}

interface Staff {
    readonly id: number;
    readonly name: StaffName;
    readonly siteUrl: string;
    readonly image: StaffImage;
    readonly language: StaffLanguage;
}

interface MediaPage {
    readonly media: Array<Media>;
}

interface CharactersPage {
    readonly characters: Array<Characters>;
}

interface StudiosPage {
    readonly studios: Array<Studios>;
}

interface StaffPage {
    readonly staff: Array<Staff>;
}

interface MediaData {
    readonly Page: MediaPage;
}

interface CharactersData {
    readonly Page: CharactersPage;
}

interface StudiosData {
    readonly Page: StudiosPage;
}

interface StaffData {
    readonly Page: StaffPage;
}

export interface MediaQueryPage {
    readonly data: MediaData;
}

export interface CharactersQueryPage {
    readonly data: CharactersData;
}

export interface StudiosQueryPage {
    readonly data: StudiosData;
}

export interface StaffQueryPage {
    readonly data: StaffData;
}
