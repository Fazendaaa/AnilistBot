import { MediaTitle, CoverImage, FuzzyDateInt, MediaFormat, MediaStatus, MediaTrailer, MediaSource, AiringSchedule, MediaRanking, MediaExternalLink } from '../../../index';

interface MediaPageContent {
    id: number;
    season: string;
    volumes: number;
    siteUrl: string;
    duration: number;
    episodes: number;
    chapters: number;
    isAdult: boolean;
    title: MediaTitle;
    status: MediaStatus;
    format: MediaFormat;
    source: MediaSource;
    description: string;
    bannerImage: string;
    averageScore: number;
    genres: Array<string>;
    endDate: FuzzyDateInt;
    trailer: MediaTrailer;
    coverImage: CoverImage;
    rankings: MediaRanking;
    startDate: FuzzyDateInt;
    countryOfOrigin: string;
    externalLinks: MediaExternalLink;
    nextAiringEpisode: AiringSchedule;
}

interface Page {
    media: Array<MediaPageContent>;
}

interface Data {
    Page: Page;
}

export interface QueryPageContent {
    data: Data;
}
