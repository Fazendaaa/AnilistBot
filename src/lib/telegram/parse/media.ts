import { toRoman } from 'roman-numerals';
import { IAnimeContext, ICountdownInfo, IHandleCountdownData, IHandleMediaMore, IInfoContext, IMangaContext, IMediaRequestContext,
INativeContext, IToPrintContext } from '.';
import { toNextAiring } from '../../anilist/formatting/media';
import { mediaMessage } from '../../anilist/parse/messageText';
import { IListTitle } from '../../anilist/queries';
import { mediaAnime, mediaManga } from '../../anilist/requests/media';
import { animeSearchTitle, mangaSearchTitle } from '../../anilist/searches/title';

const handleNative = ({ translation, native, countryOfOrigin }: INativeContext): string => {
    if ('JP' === countryOfOrigin) {
        return translation.t('japan', { japan: native });
    }

    return translation.t('chinese', { chinese: native });
};

const handleInfo = ({ translation, countryOfOrigin, title, siteUrl }: IInfoContext): string => {
    const { english, romaji, native } = title;
    let response = '';

    if (null !== native) {
        response += handleNative({ translation, native, countryOfOrigin });
    } if (null !== english) {
        response += translation.t('english', { english });
    } if (null !== romaji) {
        response += translation.t('romaji', { romaji });
    } if (null !== siteUrl) {
        response += translation.t('seeMore', { siteUrl });
    }

    return response;
};

const handleCountdownInfo = ({ index, nextAiringEpisode, translation, ...remaining }: ICountdownInfo): string => {
    const { timeUntilAiring, episode } = nextAiringEpisode;
    let response = '';

    response += `${toRoman(index + 1)}\n`;
    response += handleInfo({ translation, ...remaining });

    if (null !== episode) {
        response += translation.t('episode', { episode });
    } if (null !== timeUntilAiring) {
        response += translation.t('timeUntilAiring', { timeUntilAiring: toNextAiring({ nextAiringEpisode, translation }) });
    }

    return response;
};

const toPrint = ({ response, filterBy, translation }: IToPrintContext): string => {
    let info = response;

    if (null !== filterBy) {
        info = response.filter(({ status }: IListTitle) => status === filterBy);
    }

    return info.reduce((acc, { id, status, nextAiringEpisode, ...remaining }: IListTitle) => {
        return `${acc}${handleInfo({ translation, ...remaining })}\n`;
    }, '');
};

const fetchAnimeList = async ({ user, status, translation }: IMediaRequestContext): Promise<string> => {
    const allAnime = await Promise.all(user.map(async ({ content_id }) => animeSearchTitle(content_id)));

    return toPrint({ response: allAnime, filterBy: status, translation });
};

const fetchMangaList = async ({ user, status, translation }: IMediaRequestContext): Promise<string> => {
    const allManga = await Promise.all(user.map(async ({ content_id }) => mangaSearchTitle(content_id)));

    return toPrint({ response: allManga, filterBy: status, translation });
};

export const handleCountdownData = async ({ user, translation }: IHandleCountdownData): Promise<string> => {
    const allAnime = await Promise.all(user.map(async ({ content_id }) => animeSearchTitle(content_id)));
    const countdown = allAnime.filter(({ status }: IListTitle) => 'RELEASING' === status);
    const sorted = countdown.sort((a, b) => a.nextAiringEpisode.timeUntilAiring - b.nextAiringEpisode.timeUntilAiring);

    return sorted.reduce((acc, { id, status, ...remaining }: IListTitle, index) => {
        return `${acc}${handleCountdownInfo({ index, translation, ...remaining })}\n`;
    }, '');
};

export const handleAnime = async ({ user, filter, translation }: IAnimeContext): Promise<string> => {
    const common = { user, translation };

    if ('ALL' === filter) {
        return translation.t('watchlistOptions', { anime: await fetchAnimeList({ status: null, ...common }) });
    } if ('RELEASING' === filter) {
        return translation.t('airingAnimeOptions', { anime: await fetchAnimeList({ status: 'RELEASING', ...common }) });
    } if ('FINISHED' === filter) {
        return translation.t('completedAnimeOptions', { anime: await fetchAnimeList({ status: 'FINISHED', ...common }) });
    } if ('CANCELLED' === filter) {
        return translation.t('cancelledAnimeOptions', { anime: await fetchAnimeList({ status: 'CANCELLED', ...common }) });
    } if ('NOT_YET_RELEASED' === filter) {
        return translation.t('soonAnimeOptions', { anime: await fetchAnimeList({ status: 'NOT_YET_RELEASED', ...common }) });
    }

    return translation.t('watchlistMoreInfoOptions');
};

export const handleManga = async ({ user, filter, translation }: IMangaContext): Promise<string> => {
    const common = { user, translation };

    if ('ALL' === filter) {
        return translation.t('readlistOptions', { manga: await fetchMangaList({ status: null, ...common }) });
    } if ('FINISHED' === filter) {
        return translation.t('completedMangaOptions', { manga: await fetchMangaList({ status: 'FINISHED', ...common }) });
    } if ('CANCELLED' === filter) {
        return translation.t('cancelledMangaOptions', { manga: await fetchMangaList({ status: 'CANCELLED', ...common }) });
    } if ('RELEASING' === filter) {
        return translation.t('publishingMangaOptions', { manga: await fetchMangaList({ status: 'RELEASING', ...common }) });
    } if ('NOT_YET_RELEASED' === filter) {
        return translation.t('soonMangaOptions', { manga: await fetchMangaList({ status: 'NOT_YET_RELEASED', ...common }) });
    }

    return translation.t('readlistMoreInfoOptions');
};

export const handleMediaMore = async ({ content, request, translation }: IHandleMediaMore): Promise<string> => {
    const media = ('ANIME' === request) ? await mediaAnime(content) : await mediaManga(content);

    return mediaMessage({ media, translation });
};
