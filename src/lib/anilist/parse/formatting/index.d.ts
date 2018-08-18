import { I18n } from 'telegraf-i18n';
import { Media, Characters } from '../../queries/searches';
import { CoverImage, MediaStatus, MediaFormat, MediaTitle, MediaSeason, MediaRanking, MediaTrailer, MediaSource,
FuzzyDateInt, CharacterName } from '../..';

interface CharacterMessage {
    readonly translation: I18n;
    readonly characters: Characters;
}

export interface AdultContext {
    readonly isAdult: boolean,
    readonly translation: I18n;
}

export interface VolumesContext {
    readonly volumes: number;
    readonly translation: I18n;
}

export interface AverageContext {
    readonly translation: I18n;
    readonly averageScore: number;
}

export interface EpisodesContext {
    readonly episodes: number;
    readonly translation: I18n;
}

export interface ChaptersContext {
    readonly chapters: number;
    readonly translation: I18n;
}

export interface DurationContext {
    readonly duration: number;
    readonly translation: I18n;
}

export interface StartDateContext {
    readonly startDate: FuzzyDateInt;
    readonly translation: I18n;
    readonly status: MediaStatus;
}

export interface EndDateContext {
    readonly endDate: FuzzyDateInt;
    readonly translation: I18n;
    readonly status: MediaStatus;
}

export interface TrailerContext {
    readonly translation: I18n;
    readonly trailer: MediaTrailer;
}

export interface MediaImageContext {
    readonly bannerImage: string;
    readonly coverImage: CoverImage;
}

export interface RakingContext {
    readonly translation: I18n;
    readonly rankings: Array<MediaRanking>;
}

export interface SeasonContext {
    readonly translation: I18n;
    readonly season: MediaSeason;
}

export interface StatusContext {
    readonly translation: I18n;
    readonly status: MediaStatus;
}

export interface AllTitleContext {
    readonly title: MediaTitle;
    readonly translation: I18n;
    readonly countryOfOrigin: string;
}

export interface AllTitleResponse {
    readonly romaji: string;
    readonly native: string;
    readonly english: string;
}

export interface SourceContext {
    readonly translation: I18n;
    readonly source: MediaSource;
}

export interface FormatContext {
    readonly translation: I18n;
    readonly format: MediaFormat;
}

export interface KindContext {
    readonly translation: I18n;
    readonly source: MediaSource;
    readonly format: MediaFormat;
}

export interface KindResponse {
    readonly kind: string;
}

export interface CharactersNameContext {
    readonly translation: I18n;
    readonly name: CharacterName;
}

export interface CharactersNameResponse {
    readonly name: string;
    readonly native: string;
    readonly alternative: string;    
}
