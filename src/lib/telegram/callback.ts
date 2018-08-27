import { ReplyKeyboardMarkup } from 'telegram-typings';
import { fetchDescription } from '../anilist/requests/descriptions';
import { fetchGenres } from '../anilist/requests/genres';
import { RequestsContext, CallbackKeyboardContext } from '.';
import { guideMenu, readlistMenu, userMenu, watchlistMenu, countdownMenu } from './formatting/menu';
import { userKeyboard, guideKeyboard, readlistKeyboard, watchlistKeyboard, countdownKeyboard } from './keyboard';

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
    } if ('MENU' === field) {
        return userMenu({ translation });
    } if ('GUIDE' === field) {
        return guideMenu({ translation });
    } if ('READLIST' === field) {
        return readlistMenu({ translation });
    } if ('WATCHLIST' === field) {
        return watchlistMenu({ translation });
    }

    return countdownMenu({ translation });
};

export const callbackKeyboard = ({ field, translation }: CallbackKeyboardContext): ReplyKeyboardMarkup => {
    if ('MENU' === field) {
        return userKeyboard({ translation });
    } if ('GUIDE' === field) {
        return guideKeyboard({ translation });
    } if ('READLIST' === field) {
        return readlistKeyboard({ translation });
    } if ('WATCHLIST' === field) {
        return watchlistKeyboard({ translation });
    }

    return countdownKeyboard({ translation });
};
