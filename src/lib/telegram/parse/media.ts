import { IAnimeContext, IInfoContext, IMangaContext, IMediaRequestContext, INativeContext, IToPrintContext } from '.';
import { IListTitle } from '../../anilist/queries';
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

const toPrint = ({ response, filterBy, translation }: IToPrintContext): string => {
    let info = response;

    if (null !== filterBy) {
        info = response.filter(({ status }: IListTitle) => status === filterBy);
    }

    return info.map(({ status, ...remaining }: IListTitle) => handleInfo({ translation, ...remaining })).join('\n');
};

const fetchAnimeList = async ({ user, status, translation }: IMediaRequestContext): Promise<string> => {
    const allAnime = await Promise.all(user.map(async ({ content_id }) => animeSearchTitle(content_id)));

    return toPrint({ response: allAnime, filterBy: status, translation });
};

const fetchMangaList = async ({ user, status, translation }: IMediaRequestContext): Promise<string> => {
    const allManga = await Promise.all(user.map(async ({ content_id }) => mangaSearchTitle(content_id)));

    return toPrint({ response: allManga, filterBy: status, translation });
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
        return translation.t('readlistOptions', { manga: await fetchMangaList({ status: null, ...common}) });
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
