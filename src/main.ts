import { config } from 'dotenv';
import { menuExtra, startExtra } from 'extra';
import { toInlineArticle } from 'inline';
import { connect, set } from 'mongoose';
import { join } from 'path';
import removeMD from 'remove-markdown';
import { allSearch, notFoundSearch } from 'searches';
import Telegraf from 'telegraf';
import { IBotContext, KindRequest } from 'telegraf-bot-typings';
import I18n from 'telegraf-i18n';
import { fetchPage, sanitize } from 'telegraf-parse';
import { getSessionKey, loadLanguages } from 'telegraf-redis';
import RedisSession from 'telegraf-session-redis';
// tslint:disable: no-submodule-imports -- Just using it this way because of lack of support yet -- my intention is to work on it.
import session from 'telegraf/session';
import { UserCache } from 'user-cache';
import { anilistStage, locationStage } from './lib/telegram/stage/stage';

config();

const bot = new Telegraf(process.env.BOT_KEY);
const internationalization = new I18n({
    useSession: true,
    allowMissing: true,
    defaultLanguage: 'en',
    sessionName: 'session',
    directory: join(__dirname, '../others/locales')
});
const redisStorage = new RedisSession({
    getSessionKey,
    property: 'redis',
    store: {
        host: process.env.TELEGRAM_SESSION_HOST,
        port: process.env.TELEGRAM_SESSION_PORT
    }
});
export const redisClient = redisStorage.client;
const userCache = new UserCache();

let dbStatus = false;

connect(process.env.MONGODB_URI).then(() => {
    // https://stackoverflow.com/a/51918795/7092954
    set('useCreateIndex', true);
    set('useFindAndModify', false);

    console.log('DB connected.');

    dbStatus = true;
}).catch(err => {
    console.error(err);

    dbStatus = false;
});

redisStorage.client.on('connect', () => {
    console.log('Redis connected.');
    loadLanguages();
}).on('error', console.error);

bot.startPolling();

bot.use(session());
bot.use(Telegraf.log());
bot.use(redisStorage.middleware());
bot.use(internationalization.middleware());

bot.use(userCache.middleware());
bot.use(anilistStage.middleware());
bot.use(locationStage.middleware());

bot.catch(console.error);

bot.start(async ({ i18n, replyWithMarkdown }: IBotContext) => replyWithMarkdown(i18n.t('start'), startExtra(i18n)));

bot.on('inline_query', async ({ i18n, answerInlineQuery, inlineQuery }: IBotContext) => {
    const perPage = 20;
    const page = fetchPage(inlineQuery.offset);
    const search = sanitize(inlineQuery.query);
    let next_offset = (page + 1).toString();
    let results = await allSearch({ translation: i18n, search, page, perPage }).then(toInlineArticle);

    if (0 === results.length) {
        next_offset = null;
        results = toInlineArticle(notFoundSearch({ translation: i18n, search }));
    }

    return answerInlineQuery(results, { next_offset });
});

bot.on('callback_query', async ({ i18n, callbackQuery, scene }: IBotContext) => {
    const kind = <KindRequest> callbackQuery.data.split('/')[0];

    if ('ANILIST' === kind) {
        return scene.enter('Anilist');
    }

    // const request = <AllRequests> data[1];
    // const id = parseInt(data[2], 10);
    // const response = await handleCallback({ translation: i18n, user: from.id, id, request, field, dbStatus });

    // if ('MENU' !== field) {
    //     return answerCbQuery(response, true);
    // }

    // await answerCbQuery(i18n.t('loading'));

    // if ('LOCATION-ASK' === request) {
    //     return replyWithMarkdown(response, askLocationExtra());
    // } if ('LOCATION-SEND' === request) {
    //     return replyWithMarkdown(response, sendLocationExtra(i18n));
    // }

    // return editMessageText(response, callbackExtra({ translation: i18n, dbStatus, request }));
});

bot.on('text', async ({ i18n, message, replyWithMarkdown, scene }: IBotContext) => {
    const { text, reply_to_message } = message;
    const { type } = message.chat;

    // This bot doesn't listen to group messages, but this proves it.
    if ('private' !== type) {
        return false;
    } if (i18n.t('menu') === text.toLowerCase()) {
        await replyWithMarkdown(i18n.t('menuGreetings'), startExtra(i18n));

        return replyWithMarkdown(i18n.t('menuOptions'), menuExtra(i18n));
    } if (i18n.t('help') === text.toLowerCase()) {
        return replyWithMarkdown(i18n.t('helpOptions'), startExtra(i18n));
    } if (removeMD(i18n.t('askLocationOptions')) === reply_to_message.text) {
        return scene.enter('Location');
    }

    return i18n.t('notAvailable');
});
