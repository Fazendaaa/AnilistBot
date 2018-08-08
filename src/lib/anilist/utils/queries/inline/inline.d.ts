import { MediaTitle, CoverImage, FuzzyDateInt, MediaFormat, MediaStatus } from '../../../index';

interface MediaPageContent {
    id: number;
    season: string;
    volumes: number;
    duration: number;
    episodes: number;
    chapters: number;
    isAdult: boolean;
    title: MediaTitle;
    popularity: number;
    status: MediaStatus;
    format: MediaFormat;
    averageScore: number;
    genres: Array<string>;
    endDate: FuzzyDateInt;
    coverImage: CoverImage;
    startDate: FuzzyDateInt;
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
