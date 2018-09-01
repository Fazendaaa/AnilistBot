import { RedisClient } from 'redis';
import { Context } from 'telegraf';
import { IRedisUserLanguage } from '.';
import { IDBUser } from '../../database/user';
import { User } from '../../database/user/model';

const addUserLanguage = async ({ key, language, client }: IRedisUserLanguage): Promise<boolean> => {
    return new Promise((resolve: (a: boolean) => void, reject: (a: boolean) => void) => {
        client.set(key, JSON.stringify({ language }), (err: Error) => {
            if (null !== err) {
                console.error(err);

                reject(false);
            }

            resolve(true);
        });
    });
};

const __loadLanguages = (client: RedisClient, users: IDBUser[]): boolean => {
    users.map(({ _id, language }) => {
        if (null !== language) {
            addUserLanguage({ key: `${_id}:${_id}`, language, client });
        }
    });

    return true;
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

export const loadLanguages = async (client: RedisClient): Promise<boolean> => {
    const curriedLoadLanguages = ((users: IDBUser[]) => __loadLanguages(client, users));

    return User.find({}).then(curriedLoadLanguages).catch(() => false);
};
