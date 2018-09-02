import { InlineKeyboardMarkup } from 'telegram-typings';
import { ICallbackKeyboardContext, IRequestsContext } from '.';
import { fetchDescription } from '../anilist/requests/descriptions';
import { fetchGenres } from '../anilist/requests/genres';
import { handleMenu } from './formatting/menu';
import { aboutKeyboard, airingAnimeKeyboard, cancelledAnimeKeyboard, cancelledMangaKeyboard, completedAnimeKeyboard, completedMangaKeyboard,
countdownKeyboard, counterBackKeyboard, guideKeyboard, languageBackKeyboard, languageKeyboard, locationKeyboard, menuKeyboard,
notifyBackKeyboard, notifyKeyboard, publishingMangaKeyboard, readlistKeyboard, soonAnimeKeyboard, soonMangaKeyboard, timeHourKeyboard,
timeKeyboard, timePeriodKeyboard, userKeyboard, watchlistKeyboard } from './keyboard';

const truncateMessage = (input: string): string => {
    const max = 196;

    return (max < input.length) ? `${input.substring(0, max)}...` : input;
};

const handleNotifyKeyboard = ({ request, translation }: ICallbackKeyboardContext) => {
    return ('NOTIFY' === request) ? notifyKeyboard({ translation }) : notifyBackKeyboard({ translation });
};

const handleLanguageKeyboard = ({ request, translation }: ICallbackKeyboardContext) => {
    return ('LANGUAGE' === request) ? languageKeyboard({ translation }) : languageBackKeyboard({ translation });
};

const handleTimeKeyboard = ({ request, translation }: ICallbackKeyboardContext) => {
    if ('TIME-HOUR' === request) {
        return timeHourKeyboard({ translation });
    } if ('TIME-PERIOD' === request) {
        return timePeriodKeyboard({ translation });
    }

    return timeKeyboard({ translation });
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

export const handleCallback = async ({ id, user, request, field, translation, dbStatus }: IRequestsContext): Promise<string> => {
    const lang = translation.locale().split('-')[0];

    if (false === dbStatus && ('en' !== lang || 'LIST' === field)) {
        return translation.t('dbDown');
    } if ('MENU' === field) {
        return handleMenu({ user, request, translation });
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
    } if ('TIME' === kind[0]) {
        return handleTimeKeyboard({ request, translation });
    } if ('NOTIFY' === kind[0]) {
        return handleNotifyKeyboard({ request, translation });
    } if ('LANGUAGE' === kind[0]) {
        return handleLanguageKeyboard({ request, translation });
    }  if ('USER' === request) {
        return userKeyboard({ translation });
    } if ('GUIDE' === request) {
        return guideKeyboard({ translation });
    } if ('ABOUT' === request) {
        return aboutKeyboard({ translation });
    } if ('READLIST' === request) {
        return readlistKeyboard({ translation });
    } if ('LOCATION' === request) {
        return locationKeyboard({ translation });
    } if ('WATCHLIST' === request) {
        return watchlistKeyboard({ translation });
    } if ('COUNTDOWN' === request) {
        return countdownKeyboard({ translation });
    } if ('COUNTER' === request) {
        return counterBackKeyboard({ translation });
    }

    return menuKeyboard({ translation });
};
