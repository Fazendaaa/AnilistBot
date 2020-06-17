// tslint:disable: no-submodule-imports -- Just using it this way because of lack of support yet -- my intention is to work on it.
import { config } from 'dotenv';
import { startExtra } from 'extra';
import { toInlineArticle } from 'inline';
import { connect, set } from 'mongoose';
import { join } from 'path';
import { allSearch, notFoundSearch } from 'searches';
import Telegraf from 'telegraf';
import { IBotContext, KindRequest, ListAction, ListRequest } from 'telegraf-bot-typings';
import I18n from 'telegraf-i18n';
import { fetchPage, sanitize } from 'telegraf-parse';
import { getSessionKey } from 'telegraf-redis';
import RedisSession from 'telegraf-session-redis';
import session from 'telegraf/session';
import { UserCache } from 'user-cache';
import { AnilistObject, AnilistRequest } from './lib/anilist';
import { counterSchedule } from './lib/schedule/counter';
import { mediaSchedule, userSchedule } from './lib/schedule/notifications';
import { anilistCallback } from './lib/telegram/callback/anilist';
import { listCallback } from './lib/telegram/callback/list';
import { userStage } from './lib/telegram/stage';

config();

const bot = new Telegraf(process.env.BOT_KEY);
export const userSessionLimit = 60;
const redisStorage = new RedisSession({
    getSessionKey,
    property: 'redis',
    ttl: userSessionLimit,
    store: {
        port: null,
        host: null,
        url: process.env.REDIS_URL
    }
});
export const internationalization = new I18n({
    useSession: true,
    allowMissing: true,
    defaultLanguage: 'en',
    sessionName: 'session',
    directory: join(__dirname, '../others/locales')
});
const userCache = new UserCache();

let dbStatus = false;

connect(<string> process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    // https://stackoverflow.com/a/51918795/7092954
    set('useCreateIndex', true);
    set('useFindAndModify', false);

    userSchedule();
    mediaSchedule();
    counterSchedule();

    dbStatus = true;
}).catch(err => {
    console.error(err);

    dbStatus = false;
});

redisStorage.client.on('connect', console.log).on('error', console.error);

bot.startPolling();

bot.use(session());
bot.use(Telegraf.log());
bot.use(redisStorage.middleware());
bot.use(internationalization.middleware());

bot.use(userCache.middleware());
bot.use(userStage.middleware());

bot.catch(console.error);

bot.start(async ({ i18n, replyWithMarkdown, replyWithVideo }: IBotContext) => {
    await replyWithMarkdown(i18n.t('start'), startExtra(i18n));

    return replyWithVideo('https://raw.githubusercontent.com/Fazendaaa/AnilistBot/master/others/gif/intro.gif');
});

bot.help(async ({ i18n, replyWithMarkdown, replyWithVideo }: IBotContext) => {
    await replyWithMarkdown(i18n.t('helpOptions'), startExtra(i18n));

    return replyWithVideo('https://raw.githubusercontent.com/Fazendaaa/AnilistBot/master/others/gif/help.gif');
});

bot.on('inline_query', async ({ i18n, answerInlineQuery, inlineQuery }: IBotContext) => {
    const translation = i18n;
    const page = fetchPage(inlineQuery.offset);
    const search = sanitize(inlineQuery.query);
    const next_offset = (page + 1).toString();

    allSearch({ translation, search, page })
        .then(toInlineArticle)
        .catch(() => {
            if ('1' === next_offset) {
                return toInlineArticle(notFoundSearch({ translation, search }));
            }

            return null;
        })
        .then(async (results) => answerInlineQuery(results, { next_offset }));
});

bot.on('callback_query', async ({ i18n, from, scene, answerCbQuery, callbackQuery, replyWithMarkdown }: IBotContext) => {
    const data = callbackQuery.data.split('/');
    const kind = <KindRequest> data[0];
    const common = { translation: i18n, dbStatus };

    if ('ANILIST' === kind) {
        return answerCbQuery(await anilistCallback({
            ...common,
            id: parseInt(data[3], 10),
            content: <AnilistObject> data[1],
            request: <AnilistRequest> data[2]
        }), true);
    } if ('LIST' === kind) {
        return answerCbQuery(await listCallback({
            ...common,
            user: from.id,
            id: parseInt(data[3], 10),
            action: <ListAction> data[2],
            request: <ListRequest> data[1]
        }), true);
    } if ('SOURCE' === kind) {
        return replyWithMarkdown(i18n.t('sourceOptions'));
    } if ('MENU' === kind) {
        return scene.enter('Menu');
    }

    return answerCbQuery(i18n.t('deprecated'), true);
});

bot.on('text', async ({ i18n, scene, message, replyWithMarkdown, replyWithVideo }: IBotContext) => {
    const { text } = message;
    const { type } = message.chat;

    // This bot doesn't listen to group messages, but this proves it.
    if ('private' !== type) {
        return false;
    } if (i18n.t('menu') === text.toLowerCase()) {
        return scene.enter('Menu');
    } if (i18n.t('help') === text.toLowerCase()) {
        await replyWithMarkdown(i18n.t('helpOptions'), startExtra(i18n));

        return replyWithVideo('https://raw.githubusercontent.com/Fazendaaa/AnilistBot/master/others/gif/help.gif');
    }

    return i18n.t('notAvailable');
});
