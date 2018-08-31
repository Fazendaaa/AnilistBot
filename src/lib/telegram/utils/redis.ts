import { Context } from 'telegraf';
import { IDBUser } from '../../database/user';
import { User } from '../../database/user/model';

const userLanguagesToRedis = async (users: IDBUser[]): Promise<boolean> => {
    return false;
};

export const loadLanguages = async (): Promise<boolean> => User.find({}).then(userLanguagesToRedis).catch(() => false);

export const getSessionKey = (ctx: Context): string => {
    if ('message' === ctx.updateType) {
        return `${ctx.from.id}:${ctx.from.id}`;
    } if ('inline_query' === ctx.updateType) {
        return `${ctx.update.inline_query.from.id}:${ctx.update.inline_query.from.id}`;
    } if ('callback_query' === ctx.updateType) {
        return `${ctx.update.callback_query.from.id}:${ctx.update.callback_query.from.id}`;
    }

    return null;
};
