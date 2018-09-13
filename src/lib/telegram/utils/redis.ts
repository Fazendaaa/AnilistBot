import { Context } from 'telegraf';

const generateKey = (id: number): string => `${id}:${id}`;

export const getSessionKey = ({ updateType, from, update }: Context): string => {
    if ('message' === updateType) {
        return generateKey(from.id);
    } if ('inline_query' === updateType) {
        return generateKey(update.inline_query.from.id);
    } if ('callback_query' === updateType) {
        return generateKey(update.callback_query.from.id);
    }

    return null;
};
