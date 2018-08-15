import { AdultContext, VolumesContext, AverageContext, EpisodesContext, ChaptersContext, SeasonContext, StatusContext, FormatContext, ImageContext, AllTitleContext, AllTitleResponse, RakingContext, TrailerContext } from '.';
import { MediaTitle } from '..';

export const isAdultPreview = ({ isAdult, translation }: AdultContext): string => {
    return (true === isAdult) ? translation.t('isAdult') : '';
};

export const volumesPreview = ({ volumes, translation }: VolumesContext): string => {
    return (null !== volumes) ? translation.t('volumes', { volumes }) : '';
};

export const averagePreview = ({ average, translation }: AverageContext): string => {
    return (null !== average) ? translation.t('average', { average }) : '';
};

export const episodesPreview = ({ episodes, translation }: EpisodesContext): string => {
    return (null !== episodes) ? translation.t('episodes', { episodes }) : '';
};

export const chaptersPreview = ({ chapters, translation }: ChaptersContext): string => {
    return (null !== chapters) ? translation.t('chapters', { chapters }) : '';
};

export const seasonPreview = ({ season, translation }: SeasonContext): string => {
    if ('FALL' === season) {
        return translation.t('season', { season: translation.t('fall') });
    } if ('SPRING' === season) {
        return translation.t('season', { season: translation.t('spring') });
    } if ('SUMMER' === season) {
        return translation.t('season', { season: translation.t('summer') });
    } if ('WINTER' === season) {
        return translation.t('season', { season: translation.t('winter') });
    }

    return '';
};

export const titlePreview = ({ english, native, romaji }: MediaTitle): string => {
    if (null !== english) {
        return english;
    } if (null !== native) {
        return native
    }

    return romaji;
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

export const imagePreview = ({ coverImage, bannerImage, isInline = false }: ImageContext): string => {
    if (null !== bannerImage && false === isInline) {
        return bannerImage;
    } if (null !== coverImage.large) {
        return coverImage.large;
    }

    return coverImage.medium;
};

export const allTitlePreview = ({ title, translation, countryOfOrigin }: AllTitleContext): AllTitleResponse => {
    let native = '';
    let romaji = '';

    if ('JP' === countryOfOrigin) {
        native = translation.t('japan', { japan: title.native });
    } if ('CN' === countryOfOrigin) {
        native = translation.t('chinese', { chinese: title.native });
    } if (null !== title.romaji && title.romaji !== title.english) {
        romaji = translation.t('romaji', { romaji: title.romaji });
    }

    return {
        native,
        romaji,
        english: (null !== title.english) ? translation.t('english', { english: title.english }) : ''
    };
};

export const rankingPreview = ({ rankings, translation }: RakingContext): string => {
    if (null !== rankings && 0 < rankings.length) {
        const best = rankings.sort((a, b) => a.rank - b.rank)[0];
        const type = translation.t(best.type.toLowerCase());

        return translation.t('ranking', { type, ranking: best.rank });
    }

    return '';
};

export const trailerPreview = ({ trailer, translation }: TrailerContext): string => {
    if (null !== trailer) {
        // assuming that ALL of the videos are coming from YouTube, need to handle other cases.
        return translation.t('trailer', { trailer: `${trailer.site}.com/watch?v=${trailer.id}`});
    }

    return '';
};
