import { IBotContext } from 'telegraf-bot-typings';

export class UserLanguage {
    public middleware() {
        return ({ redis, i18n }: IBotContext, next) => {
            if (null !== redis.language || undefined !== redis.language) {
                i18n.locale(redis.language);
            }

            return next();
        };
    }
}
