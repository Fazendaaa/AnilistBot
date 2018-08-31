import { Context } from 'telegraf';

export const getSessionKey = (ctx: Context) => {
    if (undefined !== ctx.from && undefined !== ctx.chat) {
        return `${ctx.from.id}:${ctx.chat.id}`;
    } if ('inline_query' === ctx.updateType) {
        return `${ctx.update.update_id}:${ctx.update.inline_query.id}`;
    } if ('callback_query' === ctx.updateType) {
        return `${ctx.update.update_id}:${ctx.update.callback_query.id}`;
    }

    return null;
};
