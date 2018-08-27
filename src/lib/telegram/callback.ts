import { ReplyKeyboardMarkup } from 'telegram-typings';
import { fetchDescription } from '../anilist/requests/descriptions';
import { fetchGenres } from '../anilist/requests/genres';
import { RequestsContext, CallbackKeyboardContext } from '.';
import { handleMenu } from './formatting/menu';
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
    } 

    return handleMenu({ type, translation });
};

export const callbackKeyboard = ({ type, translation }: CallbackKeyboardContext): ReplyKeyboardMarkup => {
    if ('USER' === type) {
        return userKeyboard({ translation });
    } if ('GUIDE' === type) {
        return guideKeyboard({ translation });
    } if ('READLIST' === type) {
        return readlistKeyboard({ translation });
    } if ('WATCHLIST' === type) {
        return watchlistKeyboard({ translation });
    }

    return countdownKeyboard({ translation });
};
