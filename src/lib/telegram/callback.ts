import { ReplyKeyboardMarkup } from 'telegram-typings';
import { CallbackKeyboardContext, RequestsContext } from '.';
import { fetchDescription } from '../anilist/requests/descriptions';
import { fetchGenres } from '../anilist/requests/genres';
import { handleMenu } from './formatting/menu';
import { aboutKeyboard, airingAnimeKeyboard, cancelledAnimeKeyboard, cancelledMangaKeyboard, completedAnimeKeyboard,
completedMangaKeyboard, countdownKeyboard, guideKeyboard, menuKeyboard, notifyKeyboard, publishingMangaKeyboard,
readlistKeyboard, soonAnimeKeyboard,  soonMangaKeyboard, timeKeyboard, userKeyboard, watchlistKeyboard
} from './keyboard';

const truncateMessage = (input: string): string => {
    const max = 196;

    return (max < input.length) ? `${input.substring(0, max)}...` : input;
};

export const handleCallback = async ({ id, request, field, translation }: RequestsContext): Promise<string> => {
    if ('GENRES' === field) {
        return fetchGenres({ id, request, translation }).then(truncateMessage);
    } if ('DESCRIPTION' === field) {
        return fetchDescription({ id, request, translation }).then(truncateMessage);
    } if ('LIST' === field) {
        return translation.t('notAvailable');
    }

    return handleMenu({ request, translation });
};

export const callbackKeyboard = ({ request, translation }: CallbackKeyboardContext): ReplyKeyboardMarkup => {
    if ('TIME' === request) {
        return timeKeyboard({ translation });
    } if ('ABOUT' === request) {
        return aboutKeyboard({ translation });
    } if ('NOTIFY' === request) {
        return notifyKeyboard({ translation });
    } if ('COUNTDOWN' === request) {
        return countdownKeyboard({ translation });
    } if ('SOON-MANGA' === request) {
        return soonMangaKeyboard({ translation });
    } if ('SOON-ANIME' === request) {
        return soonAnimeKeyboard({ translation });
    } if ('AIRING-ANIME' === request) {
        return airingAnimeKeyboard({ translation });
    } if ('COMPLETED-MANGA' === request) {
        return completedMangaKeyboard({ translation });
    } if ('CANCELLED-MANGA' === request) {
        return cancelledMangaKeyboard({ translation });
    } if ('COMPLETED-ANIME' === request) {
        return completedAnimeKeyboard({ translation });
    } if ('CANCELLED-ANIME' === request) {
        return cancelledAnimeKeyboard({ translation });
    } if ('PUBLISHING-MANGA' === request) {
        return publishingMangaKeyboard({ translation });
    } if ('USER' === request || 'BACK-USER' === request) {
        return userKeyboard({ translation });
    } if ('GUIDE' === request || 'BACK-GUIDE' === request) {
        return guideKeyboard({ translation });
    } if ('READLIST' === request || 'ALL-MANGA' === request || 'MORE-INFO-MANGA' === request) {
        return readlistKeyboard({ translation });
    } if ('WATCHLIST' === request || 'ALL-ANIME' === request || 'MORE-INFO-ANIME' === request) {
        return watchlistKeyboard({ translation });
    }

    return menuKeyboard({ translation });
};
