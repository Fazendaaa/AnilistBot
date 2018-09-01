import { redisClient } from 'main';
import { Context } from 'telegraf';
import { IRedisUserLanguage, PromiseFunction } from '.';
import { IDBUser } from '../../database/user';
import { userAll } from '../../database/user/user';

export const redisUserLanguage = async ({ id, language }: IRedisUserLanguage): Promise<boolean> => {
    return new Promise((resolve: PromiseFunction, reject: PromiseFunction) => {
        redisClient.set(`${id}:${id}`, JSON.stringify({ language }), (err: Error) => {
            if (null !== err) {
                console.error(err);

                reject(false);
            }

            resolve(false);
        });
    });
};

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

const __loadLanguages = (users: IDBUser[]): boolean => {
    users.map(({ _id, language }) => {
        if (null !== language) {
            redisUserLanguage({ id: _id, language });
        }
    });

    return true;
};

export const loadLanguages = async (): Promise<void> => userAll({ success: __loadLanguages, error: () => false });
