import { InlineKeyboardMarkup } from 'telegram-typings';
import { ICallbackKeyboardContext, IRequestsContext } from '.';
import { fetchDescription } from '../anilist/requests/descriptions';
import { fetchGenres } from '../anilist/requests/genres';
import { handleMenu } from './formatting/menu';
import { aboutKeyboard, airingAnimeKeyboard, cancelledAnimeKeyboard, cancelledMangaKeyboard, completedAnimeKeyboard, completedMangaKeyboard,
countdownKeyboard, guideKeyboard, languageBackKeyboard, languageKeyboard, menuKeyboard, notifyKeyboard, publishingMangaKeyboard,
readlistKeyboard, soonAnimeKeyboard, soonMangaKeyboard, timeKeyboard, userKeyboard, watchlistKeyboard } from './keyboard';

const truncateMessage = (input: string): string => {
    const max = 196;

    return (max < input.length) ? `${input.substring(0, max)}...` : input;
};

const animeKeyboard = ({ request, translation }: ICallbackKeyboardContext): InlineKeyboardMarkup => {
    if ('ANIME-SOON' === request) {
        return soonAnimeKeyboard({ translation });
    } if ('ANIME-AIRING' === request) {
        return airingAnimeKeyboard({ translation });
    } if ('ANIME-COMPLETED' === request) {
        return completedAnimeKeyboard({ translation });
    } if ('ANIME-CANCELLED' === request) {
        return cancelledAnimeKeyboard({ translation });
    }

    return watchlistKeyboard({ translation });
};

const mangaKeyboard = ({ request, translation }: ICallbackKeyboardContext): InlineKeyboardMarkup => {
    if ('MANGA-SOON' === request) {
        return soonMangaKeyboard({ translation });
    } if ('MANGA-COMPLETED' === request) {
        return completedMangaKeyboard({ translation });
    } if ('MANGA-CANCELLED' === request) {
        return cancelledMangaKeyboard({ translation });
    } if ('MANGA-PUBLISHING' === request) {
        return publishingMangaKeyboard({ translation });
    }

    return readlistKeyboard({ translation });
};

export const handleCallback = async ({ id, request, field, translation, dbStatus }: IRequestsContext): Promise<string> => {
    const lang = translation.locale().split('-')[0];

    if (false === dbStatus && ('en' !== lang || 'LIST' === field)) {
        return translation.t('dbDown');
    } if ('MENU' === field) {
        return handleMenu({ request, translation });
    } if ('GENRES' === field) {
        return fetchGenres({ id, request, translation }).then(truncateMessage);
    } if ('DESCRIPTION' === field) {
        return fetchDescription({ id, request, translation }).then(truncateMessage);
    }

    return translation.t('notAvailable');
};

export const callbackKeyboard = ({ request, translation }: ICallbackKeyboardContext): InlineKeyboardMarkup => {
    const kind = request.split('-');

    if ('ANIME' === kind[0]) {
        return animeKeyboard({ request, translation });
    } if ('MANGA' === kind[0]) {
        return mangaKeyboard({ request, translation });
    } if ('LANGUAGE' === kind[0] && kind.length > 1) {
        return languageBackKeyboard({ translation });
    } if ('TIME' === request) {
        return timeKeyboard({ translation });
    } if ('USER' === request) {
        return userKeyboard({ translation });
    } if ('GUIDE' === request) {
        return guideKeyboard({ translation });
    } if ('ABOUT' === request) {
        return aboutKeyboard({ translation });
    } if ('NOTIFY' === request) {
        return notifyKeyboard({ translation });
    } if ('LANGUAGE' === request) {
        return languageKeyboard({ translation });
    } if ('READLIST' === request) {
        return readlistKeyboard({ translation });
    } if ('WATCHLIST' === request) {
        return watchlistKeyboard({ translation });
    } if ('COUNTDOWN' === request) {
        return countdownKeyboard({ translation });
    }

    return menuKeyboard({ translation });
};
