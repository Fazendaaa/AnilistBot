import { IBotContext, LanguageRequest, MenuRequest, UserRequest } from 'telegraf-bot-typings';
import { IHandleNext } from '.';
import { IDBUserInfo } from '../../database/user';
import { userInfo } from '../../database/user/user';
import { getLanguageCode } from '../parse/language';

/**
 * Just a setting user language if available.
 * TSLint disable is used here because of Telegraf's TS typings.
 */
export class UserCache {
    // tslint:disable-next-line: no-any
    public middleware(): any {
        // tslint:disable-next-line: no-any
        return async ({ redis, i18n, from, updateType, callbackQuery }: IBotContext, next: () => any) => {
            const { id } = from;

            if (null === redis.language || undefined === redis.language) {
                const { language } = <IDBUserInfo> await userInfo(id);

                redis.language = (null !== language) ? language : 'en';
            }

            i18n.locale(redis.language);

            return next().then(() => this.handleNext({ redis, updateType, callbackQuery }));
        };
    }

    private handleNext({ redis, updateType, callbackQuery }: IHandleNext): boolean {
        if ('callback_query' === updateType && undefined !== callbackQuery.data) {
            const data = callbackQuery.data.split('/');

            if ('USER' === <MenuRequest>data[0] && data.length === 3 && 'LANGUAGE' === <UserRequest>data[1]) {
                redis.language = getLanguageCode(<LanguageRequest> data[2]);
            }

            return true;
        }

        return false;
    }
}
