import { I18n } from 'telegraf-i18n';
import { CoverImage, MediaStatus, MediaFormat, MediaTitle, MediaSeason, MediaRanking, MediaTrailer, MediaSource, FuzzyDateInt } from '..';

export interface AdultContext {
    isAdult: boolean,
    translation: I18n;
}

export interface ImageContext {
    isInline?: boolean;
    bannerImage: string;
    coverImage: CoverImage;
}

export interface StatusContext {
    translation: I18n;
    status: MediaStatus;
}

export interface VolumesContext {
    volumes: number;
    translation: I18n;
}

export interface ChaptersContext {
    chapters: number;
    translation: I18n;
}

export interface FormatContext {
    translation: I18n;
    format: MediaFormat;
}

export interface EpisodesContext {
    episodes: number;
    translation: I18n;
}

export interface SeasonContext {
    translation: I18n;
    season: MediaSeason;
}

export interface AverageContext {
    average: number;
    translation: I18n;
}

export interface AllTitleContext {
    title: MediaTitle;
    translation: I18n;
    countryOfOrigin: string;
}

export interface AllTitleResponse {
    romaji: string;
    native: string;
    english: string;
}

export interface RakingContext {
    translation: I18n;
    rankings: Array<MediaRanking>;
}

export interface TrailerContext {
    translation: I18n;
    trailer: MediaTrailer;
}

export interface SourceContext {
    translation: I18n;
    source: MediaSource;
}

export interface DurationContext {
    duration: number;
    translation: I18n;
}

export interface DateContext {
    date: FuzzyDateInt;
    translation: I18n;
    status: MediaStatus;
}

export interface TitleContext {
    title: MediaTitle;
    translation: I18n;
}

export interface DescriptionContext {
    translation: I18n;
    source: MediaSource; 
    format: MediaFormat;
}

export interface KindContext {
    translation: I18n;
    source: MediaSource;
    format: MediaFormat;
}

export interface KindResponse {
    kind: string;
}
