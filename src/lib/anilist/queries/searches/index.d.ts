import { MediaTitle, CoverImage, FuzzyDateInt, MediaFormat, MediaStatus, MediaTrailer, MediaSource, AiringSchedule,
MediaRanking, MediaExternalLink, MediaSeason, MediaType, CharacterName, CharacterImage } from '../..';

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

interface MediaPage {
    readonly media: Array<Media>;
}

interface CharactersPage {
    readonly characters: Array<Characters>;
}

interface MediaData {
    readonly Page: MediaPage;
}

interface CharactersData {
    readonly Page: CharactersPage;
}

export interface MediaQueryPage {
    readonly data: MediaData;
}

export interface CharactersQueryPage {
    readonly data: CharactersData;
}
