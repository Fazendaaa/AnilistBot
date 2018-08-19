import { I18n } from 'telegraf-i18n';
import { Media, Characters } from '../../queries/searches';
import { CoverImage, MediaFormat, MediaTitle, MediaSource, CharacterName, AiringSchedule } from '../..';

interface MediaMessage {
    readonly media: Media;
    readonly translation: I18n;
}

interface CharacterMessage {
    readonly translation: I18n;
    readonly characters: Characters;
}

export interface ImageContext {
    readonly bannerImage: string;
    readonly coverImage: CoverImage;
}

export interface TitleContext {
    readonly title: MediaTitle;
    readonly translation: I18n;
}

export interface MediaDescriptionContext {
    readonly title: MediaTitle;
    readonly translation: I18n;
    readonly source: MediaSource; 
    readonly format: MediaFormat;
    readonly nextAiringEpisode: AiringSchedule;
}

export interface CharacterDescriptionContext {
    readonly translation: I18n;
}

export interface NameContext {
    readonly translation: I18n;
    readonly name: CharacterName;
}
