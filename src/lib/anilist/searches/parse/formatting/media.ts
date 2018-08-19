import moment from 'moment';
import { AdultContext, VolumesContext, AverageContext, EpisodesContext, ChaptersContext, SeasonContext, StatusContext,
FormatContext, MediaImageContext, AllTitleContext, AllTitleResponse, RakingContext, TrailerContext, SourceContext,
DurationContext, KindContext, StartDateContext, EndDateContext, NextAiringEpisodeContext, ExternalLinksContext
} from '.';
import { errorPng } from '../../../utils/common';
import { I18n } from 'telegraf-i18n';
import { MediaExternalLink } from '../../..';

const dateFormat = 'MMMM Do YYYY';

const toDuration = (input: number): string => {
    if (60 < input) {
        const hour = Math.trunc(input / 60);
        const min = input % 60;

        return `${hour}h${min}min`;
    }
    
    return `${input}min`;
};

const __parsingLinks = (translation: I18n, acc, { site, url }: MediaExternalLink): string => {
    let name = site;

    if ('Official Site' === site) {
        name = translation.t('officialSite');
    }

    return acc + `\t\t • [${name}](${url})\n`;
};

const parsingLinks = ({ externalLinks, translation }: ExternalLinksContext): string => {
    const curriedParsingLinks = ((acc: string, cur: MediaExternalLink) => __parsingLinks(translation, acc, cur));

    return externalLinks.reduce(curriedParsingLinks, '');
};

export const toNextAiring = ({ nextAiringEpisode, translation }: NextAiringEpisodeContext): string => {
    const { timeUntilAiring } = nextAiringEpisode;
    const oneHour = 60 * 60;
    const oneDay = 24 * oneHour;
    const min = timeUntilAiring % 60;
    const hour = timeUntilAiring % oneHour;

    if (oneDay < timeUntilAiring) {
        const days = timeUntilAiring % oneDay;

        return `${days}${(1 === days) ? translation.t('day') : translation.t('days')} - ${hour}h${min}min`;
    } if (oneHour < timeUntilAiring) {
        return `${hour}h${min}min`;
    }

    return `${timeUntilAiring}min`;
};

export const mediaIsAdult = ({ isAdult, translation }: AdultContext): string => {
    return (true === isAdult) ? translation.t('isAdult') : '';
};

export const mediaVolumes = ({ volumes, translation }: VolumesContext): string => {
    return (null !== volumes) ? translation.t('volumes', { volumes }) : '';
};

export const mediaAverage = ({ averageScore, translation }: AverageContext): string => {
    return (null !== averageScore) ? translation.t('averageScore', { averageScore }) : '';
};

export const mediaEpisodes = ({ episodes, translation }: EpisodesContext): string => {
    return (null !== episodes) ? translation.t('episodes', { episodes }) : '';
};

export const mediaChapters = ({ chapters, translation }: ChaptersContext): string => {
    return (null !== chapters) ? translation.t('chapters', { chapters }) : '';
};

export const mediaDuration = ({ duration, translation }: DurationContext): string => {
    return (null !== duration) ? translation.t('duration', { duration: toDuration(duration) }) : '';
};

export const mediaNextAiringEpisode = ({ nextAiringEpisode, translation }: NextAiringEpisodeContext): string => {
    if (null === nextAiringEpisode || null === nextAiringEpisode.timeUntilAiring) {
        return   '';
    }
    
    return translation.t('nextAiringEpisode', { timeUntilAiring: toNextAiring({ nextAiringEpisode, translation }) });
};

export const mediaExternalLinks = ({ externalLinks, translation }: ExternalLinksContext): string => {
    if (null === externalLinks) {
        return '';
    }

    return translation.t('externalLinks', { externalLinks: parsingLinks({ externalLinks, translation }) });
};

export const mediaStartDate = ({ startDate, status, translation }: StartDateContext): string => {
    if (null === startDate || 'NOT_YET_RELEASED' === status) {
        return '';
    }

    return translation.t('startDate', { startDate: moment(startDate).locale(translation.locale()).format(dateFormat) });
};

export const mediaEndDate = ({ endDate, status, translation }: EndDateContext): string => {
    if (null === endDate || 'NOT_YET_RELEASED' === status || 'RELEASING' === status) {
        return '';
    }

    return translation.t('endDate', { endDate: moment(endDate).locale(translation.locale()).format(dateFormat) });
};

export const mediaTrailer = ({ trailer, translation }: TrailerContext): string => {
    if (null === trailer) {
        return '';
    }
    
    // assuming that ALL of the videos are coming from YouTube, need to handle other cases.
    return translation.t('trailer', { trailer: `${trailer.site}.com/watch?v=${trailer.id}` });
};

export const mediaImage = ({ coverImage, bannerImage }: MediaImageContext): string => {
    if (null !== bannerImage) {
        return bannerImage;
    } if (null !== coverImage.large) {
        return coverImage.large;
    } if (null !== coverImage.medium) {
        return coverImage.medium;
    }

    return errorPng;
};

export const mediaRanking = ({ rankings, translation }: RakingContext): string => {
    if (null !== rankings && 0 < rankings.length) {
        const best = rankings.sort((a, b) => a.rank - b.rank)[0];
        const type = translation.t(best.type.toLowerCase());

        return translation.t('ranking', { type, ranking: best.rank });
    }

    return '';
};

export const mediaSeason = ({ season, translation }: SeasonContext): string => {
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

export const mediaStatus = ({ status, translation }: StatusContext): string => {
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

export const mediaAllTitle = ({ title, translation, countryOfOrigin }: AllTitleContext): AllTitleResponse => {
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

export const mediaSource = ({ source, translation }: SourceContext): string => {
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

export const mediaFormat = ({ format, translation }: FormatContext): string => {
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

export const mediaKind = ({ format, source, translation }: KindContext): string => {
    const first = mediaFormat({ format, translation });
    const second = mediaSource({ source, translation });
    let kind = '';

    if ('' !== first) {
        kind += first;
    } if ('' !== second) {
        kind += translation.t('from') + second;
    } if ('' !== kind) {
        kind += '\n';
    }

    return kind;
};
