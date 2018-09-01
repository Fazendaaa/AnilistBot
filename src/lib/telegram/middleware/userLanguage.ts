import { IBotContext } from 'telegraf-bot-typings';

/**
 * Just a setting user language if available.
 */
export class UserLanguage {
    public middleware() {
        return ({ redis, i18n }: IBotContext, next: Function) => {
            if (null !== redis.language || undefined !== redis.language) {
                i18n.locale(redis.language);
            }

            return next();
        };
    }
}
