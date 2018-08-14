import { I18n } from 'telegraf-i18n';
import { CoverImage, MediaStatus, MediaFormat, MediaTitle } from '../index';

interface AdultContext {
    isAdult: boolean,
    translation: I18n;
}

interface ImageContext {
    isInline?: boolean;
    bannerImage: string;
    coverImage: CoverImage;
}

interface StatusContext {
    translation: I18n;
    status: MediaStatus;
}

interface VolumesContext {
    volumes: number;
    translation: I18n;
}

interface ChaptersContext {
    chapters: number;
    translation: I18n;
}

interface FormatContext {
    translation: I18n;
    format: MediaFormat;
}

interface EpisodesContext {
    episodes: number;
    translation: I18n;
}

interface SeasonContext {
    season: string;
    translation: I18n;
}

interface AverageContext {
    average: number;
    translation: I18n;
}

interface AllTitleContext {
    title: MediaTitle;
    translation: I18n;
    countryOfOrigin: string;
}

interface AllTitleResponse {
    romaji: string;
    native: string;
    english: string;
}

export const isAdultPreview = ({ isAdult, translation }: AdultContext): string => {
    return (true === isAdult) ? translation.t('isAdult') : '';
};

export const volumesPreview = ({ volumes, translation }: VolumesContext): string => {
    return (null !== volumes) ? translation.t('volumes', { volumes }) : '';
};

export const episodesPreview = ({ episodes, translation }: EpisodesContext): string => {
    return (null !== episodes) ? translation.t('episodes', { episodes }) : '';
};

export const chaptersPreview = ({ chapters, translation }: ChaptersContext): string => {
    return (null !== chapters) ? translation.t('chapters', { chapters }) : '';
};

export const seasonPreview = ({ season, translation }: SeasonContext): string => {
    return (null !== season) ? translation.t('season', { season }) : '';
};

export const averagePreview = ({ average, translation }: AverageContext): string => {
    return (null !== average) ? translation.t('average', { average }) : '';
};

export const titlePreview = ({ english, native, romaji }: MediaTitle): string => {
    if (null !== english) {
        return english;
    } if (null !== native) {
        return native
    }

    return romaji;
};

export const allTitlePreview = ({ title, translation, countryOfOrigin }: AllTitleContext): AllTitleResponse => {
    let native = '';

    if (null !== title.native && 'JP' === countryOfOrigin) {
        native = translation.t('japan', { japan: title.native });
    } if (null !== title.native && 'CN' === countryOfOrigin) {
        native = translation.t('chinese', { chinese: title.native });
    }

    return {
        native,
        romaji: (null !== title.romaji) ? translation.t('romaji', { romaji: title.romaji }) : '',
        english: (null !== title.english) ? translation.t('english', { english: title.english }) : ''
    };
};

export const imagePreview = ({ coverImage, bannerImage, isInline = false }: ImageContext): string => {
    if (null !== bannerImage && false === isInline) {
        return bannerImage;
    } if (null !== coverImage.large) {
        return coverImage.large;
    }

    return coverImage.medium;
};

export const statusPreview = ({ status, translation }: StatusContext): string => {
    if ('FINISHED' === status) {
        return translation.t('finished');
    } if ('RELEASING' === status) {
        return translation.t('releasing');
    } if ('NOT_YET_RELEASED' === status) {
        return translation.t('notYetReleased');
    }

    return translation.t('cancelled');
};

export const formatPreview = ({ format, translation }: FormatContext): string => {
    if ('TV' === format) {
        return translation.t('tv');
    } if ('OVA' === format) {
        return translation.t('OVA');
    } if ('ONA' === format) {
        return translation.t('ONA');
    } if ('MUSIC' === format) {
        return translation.t('music');
    } if ('MANGA' === format) {
        return translation.t('manga');
    } if ('NOVEL' === format) {
        return translation.t('novel');
    } if ('MOVIE' === format) {
        return translation.t('movie');
    } if ('SPECIAL' === format) {
        return translation.t('special');
    } if ('TV_SHORT' === format) {
        return translation.t('tvShort');
    }

    return translation.t('oneShot');
};
