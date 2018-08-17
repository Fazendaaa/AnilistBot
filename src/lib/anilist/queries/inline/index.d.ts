import { MediaTitle, CoverImage, FuzzyDateInt, MediaFormat, MediaStatus, MediaTrailer, MediaSource, AiringSchedule,
MediaRanking, MediaExternalLink, MediaSeason, MediaType } from '../..';

interface MediaPageInline {
    id: number;
    type: MediaType;
    volumes: number;
    siteUrl: string;
    duration: number;
    episodes: number;
    chapters: number;
    isAdult: boolean;
    title: MediaTitle;
    season: MediaSeason;
    status: MediaStatus;
    format: MediaFormat;
    source: MediaSource;
    bannerImage: string;
    averageScore: number;
    genres: Array<string>;
    endDate: FuzzyDateInt;
    trailer: MediaTrailer;
    coverImage: CoverImage;
    startDate: FuzzyDateInt;
    countryOfOrigin: string;
    rankings: Array<MediaRanking>;
    externalLinks: MediaExternalLink;
    nextAiringEpisode: AiringSchedule;
}

interface Page {
    media: Array<MediaPageInline>;
}

interface Data {
    Page: Page;
}

export interface QueryPageInline {
    data: Data;
}
