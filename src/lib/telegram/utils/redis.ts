import { RedisClient } from 'redis';
import { Context } from 'telegraf';
import { IRedisUserLanguage } from '.';
import { IDBUser } from '../../database/user';
import { User } from '../../database/user/model';

const addUserLanguage = ({ key, language, client }: IRedisUserLanguage) => new Promise((resolve, reject) => {
    client.set(key, JSON.stringify({ language }), (err: Error) => {
        if (null !== err) {
            console.error(err);

            return reject(false);
        }

        resolve(true);
    });
});

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
    const users = <IDBUser[]> await User.find({});

    users.map(({ _id, language }) => {
        if (null !== language) {
            addUserLanguage({ key: `${_id}:${_id}`, language, client });
        }
    });

    return true;
};
