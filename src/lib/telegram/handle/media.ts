import { airingAnimeKeyboard, cancelledAnimeKeyboard, cancelledMangaKeyboard, completedAnimeKeyboard, completedMangaKeyboard,
publishingMangaKeyboard, readlistKeyboard, soonAnimeKeyboard, soonMangaKeyboard, watchlistKeyboard } from 'keyboard';
import { ICallbackKeyboardContext } from 'telegraf-bot-typings';
import { InlineKeyboardMarkup } from 'telegram-typings';
import { IInfoContext, IMediaRequestContext, IMenuAnimeContext, IMenuMangaContext, INativeContext, IToPrintContext } from '.';
import { IListTitle } from '../../anilist/queries';
import { animeSearchTitle, mangaSearchTitle } from '../../anilist/searches/title';
import { fetchUserAnime } from '../../database/user/user';

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

const fetchAnime = async ({ user, status, translation }: IMediaRequestContext): Promise<string> => {
    const fetched = await fetchUserAnime(user);
    const allAnime = await Promise.all(fetched.map(async ({ content_id }) => animeSearchTitle(content_id)));

    return toPrint({ response: allAnime, filterBy: status, translation });
};

const fetchManga = async ({ user, status, translation }: IMediaRequestContext): Promise<string> => {
    const fetched = await fetchUserAnime(user);
    const allManga = await Promise.all(fetched.map(async ({ content_id }) => mangaSearchTitle(content_id)));

    return toPrint({ response: allManga, filterBy: status, translation });
};

export const handleAnime = async ({ user, request, translation }: IMenuAnimeContext): Promise<string> => {
    const common = { user, translation };

    if ('ANIME-ALL' === request || 'ANIME-LIST' === request) {
        return translation.t('watchlistOptions', { anime: await fetchAnime({ ...common, status: null }) });
    } if ('ANIME-RELEASING' === request) {
        return translation.t('airingAnimeOptions', { anime: await fetchAnime({ ...common, status: 'RELEASING' }) });
    } if ('ANIME-COMPLETED' === request) {
        return translation.t('completedAnimeOptions', { anime: await fetchAnime({ ...common, status: 'FINISHED' }) });
    } if ('ANIME-CANCELLED' === request) {
        return translation.t('cancelledAnimeOptions', { anime: await fetchAnime({ ...common, status: 'CANCELLED' }) });
    } if ('ANIME-SOON' === request) {
        return translation.t('soonAnimeOptions', { anime: await fetchAnime({ ...common, status: 'NOT_YET_RELEASED' }) });
    }

    return translation.t('watchlistMoreInfoOptions');
};

export const handleManga = async ({ user, request, translation }: IMenuMangaContext): Promise<string> => {
    const common = { user, translation };

    if ('MANGA-ALL' === request || 'MANGA-LIST' === request) {
        return translation.t('readlistOptions', { manga: await fetchManga({ ...common, status: null }) });
    } if ('MANGA-COMPLETED' === request) {
        return translation.t('completedMangaOptions', { manga: await fetchManga({ ...common, status: 'FINISHED' }) });
    } if ('MANGA-CANCELLED' === request) {
        return translation.t('cancelledMangaOptions', { manga: await fetchManga({ ...common, status: 'CANCELLED' }) });
    } if ('MANGA-RELEASING' === request) {
        return translation.t('publishingMangaOptions', { manga: await fetchManga({ ...common, status: 'RELEASING' }) });
    } if ('MANGA-SOON' === request) {
        return translation.t('soonMangaOptions', { manga: await fetchManga({ ...common, status: 'NOT_YET_RELEASED' }) });
    }

    return translation.t('readlistMoreInfoOptions');
};

export const animeKeyboard = ({ request, translation }: ICallbackKeyboardContext): InlineKeyboardMarkup => {
    if ('ANIME-SOON' === request) {
        return soonAnimeKeyboard(translation);
    } if ('ANIME-RELEASING' === request) {
        return airingAnimeKeyboard(translation);
    } if ('ANIME-COMPLETED' === request) {
        return completedAnimeKeyboard(translation);
    } if ('ANIME-CANCELLED' === request) {
        return cancelledAnimeKeyboard(translation);
    }

    return watchlistKeyboard(translation);
};

export const mangaKeyboard = ({ request, translation }: ICallbackKeyboardContext): InlineKeyboardMarkup => {
    if ('MANGA-SOON' === request) {
        return soonMangaKeyboard(translation);
    } if ('MANGA-COMPLETED' === request) {
        return completedMangaKeyboard(translation);
    } if ('MANGA-CANCELLED' === request) {
        return cancelledMangaKeyboard(translation);
    } if ('MANGA-RELEASING' === request) {
        return publishingMangaKeyboard(translation);
    }

    return readlistKeyboard(translation);
};
