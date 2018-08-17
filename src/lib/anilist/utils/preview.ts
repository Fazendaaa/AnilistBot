import moment from 'moment';
import { AdultContext, VolumesContext, AverageContext, EpisodesContext, ChaptersContext, SeasonContext, StatusContext, FormatContext, ImageContext, AllTitleContext, AllTitleResponse, RakingContext, TrailerContext, SourceContext, DurationContext, DateContext, TitleContext } from '.';

const dateFormat = 'MMMM Do YYYY';

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

export const durationPreview = ({ duration, translation }: DurationContext): string => {
    return (null !== duration) ? translation.t('duration', { duration }) : '';
};

export const startDatePreview = ({ date, status, translation }: DateContext): string => {
    if (null === date || 'NOT_YET_RELEASED' === status) {
        return '';
    }

    return translation.t('startDate', { startDate: moment(date).locale(translation.locale()).format(dateFormat) });
};

export const endDatePreview = ({ date, status, translation }: DateContext): string => {
    if (null === date || 'NOT_YET_RELEASED' === status || 'RELEASING' === status) {
        return '';
    }

    return translation.t('endDate', { endDate: moment(date).locale(translation.locale()).format(dateFormat) });
};

export const trailerPreview = ({ trailer, translation }: TrailerContext): string => {
    if (null === trailer) {
        return '';
    }
    
    // assuming that ALL of the videos are coming from YouTube, need to handle other cases.
    return translation.t('trailer', { trailer: `${trailer.site}.com/watch?v=${trailer.id}` });
};

export const titlePreview = ({ title, translation }: TitleContext): string => {
    if (null !== title.english) {
        return title.english;
    } if (null !== title.native) {
        return title.native
    } if (null !== title.romaji) {
        return title.romaji;
    }

    return translation.t('notAvailable');
};

export const imagePreview = ({ coverImage, bannerImage, isInline = false }: ImageContext): string => {
    if (null !== bannerImage && false === isInline) {
        return bannerImage;
    } if (null !== coverImage.large) {
        return coverImage.large;
    } if (null !== coverImage.medium) {
        return coverImage.medium;
    }

    return 'https://raw.githubusercontent.com/Fazendaaa/AnilistBot/master/others/img/error/error.png';
};

export const rankingPreview = ({ rankings, translation }: RakingContext): string => {
    if (null !== rankings && 0 < rankings.length) {
        const best = rankings.sort((a, b) => a.rank - b.rank)[0];
        const type = translation.t(best.type.toLowerCase());

        return translation.t('ranking', { type, ranking: best.rank });
    }

    return '';
};

export const seasonPreview = ({ season, translation }: SeasonContext): string => {
    let kind = translation.t('winter');

    if (null === season) {
        return '';
    } if ('FALL' === season) {
        kind = translation.t('fall');
    } if ('SPRING' === season) {
        kind = translation.t('spring');
    } if ('SUMMER' === season) {
        kind = translation.t('summer');
    }

    return translation.t('season', { season: kind });
};

export const statusPreview = ({ status, translation }: StatusContext): string => {
    let kind = translation.t('cancelled');

    if (null === status) {
        return '';
    } if ('FINISHED' === status) {
        kind = translation.t('finished');
    } if ('RELEASING' === status) {
        kind = translation.t('releasing');
    } if ('NOT_YET_RELEASED' === status) {
        kind = translation.t('notYetReleased');
    }

    return translation.t('status', { status: kind });
};

export const allTitlePreview = ({ title, translation, countryOfOrigin }: AllTitleContext): AllTitleResponse => {
    let native = '';
    let romaji = '';

    if (null !== title.native && 'JP' === countryOfOrigin) {
        native = translation.t('japan', { japan: title.native });
    } if (null !== title.native && 'CN' === countryOfOrigin) {
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

export const sourcePreview = ({ source, translation }: SourceContext): string => {
    if (null === source) {
        return '';
    } if ('MANGA' === source) {
        return translation.t('manga');
    } if ('OTHER' === source) {
        return translation.t('other');
    } if ('ORIGINAL' === source) {
        return translation.t('original');
    } if ('VIDEO_GAME' === source) {
        return translation.t('videoGame');
    } if ('LIGHT_NOVEL' === source) {
        return translation.t('lightNovel');
    }

    return translation.t('visualNovel');
};

export const formatPreview = ({ format, translation }: FormatContext): string => {
    if (null === format) {
        return '';
    } if ('TV' === format) {
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
