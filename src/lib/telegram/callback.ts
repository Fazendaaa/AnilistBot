import { ReplyKeyboardMarkup } from 'telegram-typings';
import { fetchDescription } from '../anilist/requests/descriptions';
import { fetchGenres } from '../anilist/requests/genres';
import { RequestsContext, CallbackKeyboardContext } from '.';
import { handleMenu } from './formatting/menu';
import { userKeyboard, guideKeyboard, readlistKeyboard, watchlistKeyboard, countdownKeyboard,
menuKeyboard, aboutKeyboard, notifyKeyboard, timeKeyboard, publishingMangaKeyboard, soonMangaKeyboard, completedMangaKeyboard, cancelledMangaKeyboard, airingAnimeKeyboard, soonAnimeKeyboard, completedAnimeKeyboard, cancelledAnimeKeyboard } from './keyboard';

const truncateMessage = (input: string): string => {
    const max = 196;

    return (max < input.length) ? input.substring(0, max) + '...' : input;
};

export const handleCallback = async ({ id, type, field, translation }: RequestsContext): Promise<string> => {
    if ('GENRES' === field) {
        return fetchGenres({ id, type, translation }).then(truncateMessage);
    } if ('DESCRIPTION' === field) {
        return fetchDescription({ id, type, translation }).then(truncateMessage);
    } if ('LIST' === field) {
        return translation.t('notAvailable');
    } 

    return handleMenu({ type, translation });
};

export const callbackKeyboard = ({ type, translation }: CallbackKeyboardContext): ReplyKeyboardMarkup => {
    if ('TIME' === type) {
        return timeKeyboard({ translation });
    } if ('ABOUT' === type) {
        return aboutKeyboard({ translation });
    } if ('NOTIFY' === type) {
        return notifyKeyboard({ translation });
    } if ('COUNTDOWN' === type) {
        return countdownKeyboard({ translation });
    } if ('SOON-MANGA' === type) {
        return soonMangaKeyboard({ translation });
    } if ('SOON-ANIME' === type) {
        return soonAnimeKeyboard({ translation });
    } if ('AIRING-ANIME' === type ) {
        return airingAnimeKeyboard({ translation });
    } if ('COMPLETED-MANGA' === type) {
        return completedMangaKeyboard({ translation });
    } if ('CANCELLED-MANGA' === type) {
        return cancelledMangaKeyboard({ translation });
    } if ('COMPLETED-ANIME' === type) {
        return completedAnimeKeyboard({ translation });
    } if ('CANCELLED-ANIME' === type) {
        return cancelledAnimeKeyboard({ translation });
    } if ('PUBLISHING-MANGA' === type) {
        return publishingMangaKeyboard({ translation });
    } if ('USER' === type || 'BACK-USER' === type) {
        return userKeyboard({ translation });
    } if ('GUIDE' === type || 'BACK-GUIDE' === type) {
        return guideKeyboard({ translation });
    } if ('READLIST' === type || 'ALL-MANGA' === type || 'MORE-INFO-MANGA' === type) {
        return readlistKeyboard({ translation });
    } if ('WATCHLIST' === type || 'ALL-ANIME' === type || 'MORE-INFO-ANIME' === type) {
        return watchlistKeyboard({ translation });
    } 

    return menuKeyboard({ translation });
};
