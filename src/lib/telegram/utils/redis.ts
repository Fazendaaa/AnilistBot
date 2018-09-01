import { redisClient } from 'main';
import { Context } from 'telegraf';
import { IRedisUserLanguage, PromiseFunction } from '.';
import { IDBUser } from '../../database/user';
import { userAll } from '../../database/user/user';

const generateKey = (id: number): string => `${id}:${id}`;

export const redisUserLanguage = async ({ id, language }: IRedisUserLanguage): Promise<boolean> => {
    return new Promise((resolve: PromiseFunction, reject: PromiseFunction) => {
        redisClient.set(generateKey(id), JSON.stringify({ language }), (err: Error) => {
            if (null !== err) {
                console.error(err);

                reject(false);
            }

            resolve(false);
        });
    });
};

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

const __loadLanguages = (users: IDBUser[]): boolean => {
    users.map(({ _id, language }) => {
        if (null !== language) {
            redisUserLanguage({ id: _id, language });
        }
    });

    return true;
};

export const loadLanguages = async (): Promise<void> => userAll({ success: __loadLanguages, error: () => false });
