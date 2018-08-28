import { config } from 'dotenv';
import { connect, set } from 'mongoose';
import { join } from 'path';
import Telegraf from 'telegraf';
import I18n from 'telegraf-i18n';
import { allSearch } from './lib/anilist/searches/searches';
import { AllRequests, BotContext, RequestsFiled } from './lib/telegram';
import { callbackKeyboard, handleCallback } from './lib/telegram/callback';
import { toInlineArticle } from './lib/telegram/inline';
import { menuKeyboard } from './lib/telegram/keyboard';
import { isEditable } from './lib/telegram/utils/edit';
import { sanitize } from './lib/telegram/utils/parse';

config();

const bot = new Telegraf(process.env.BOT_KEY);
const internationalization = new I18n({
    useSession: true,
    allowMissing: true,
    defaultLanguage: 'en',
    sessionName: 'session',
    directory: join(__dirname, '../others/locales')
});

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

bot.startPolling();

bot.use(Telegraf.log());
bot.use(internationalization.middleware());

bot.catch(console.error);

bot.start(({ i18n, replyWithMarkdown }: BotContext) => replyWithMarkdown(i18n.t('start')));

bot.on('inline_query', async ({ i18n, answerInlineQuery, inlineQuery }: BotContext) => {
    const perPage = 20;
    const page = parseInt(inlineQuery.offset, 10) || 0;
    const next_offset = (page + perPage).toString();
    const search = sanitize({ message: inlineQuery.query });
    const searched = await allSearch({ search, page, perPage, translation: i18n });
    const results = toInlineArticle(searched);

    return answerInlineQuery(results, { next_offset });
});

bot.on('callback_query', async ({ i18n, callbackQuery, editMessageText, answerCbQuery }: BotContext) => {
    const data = callbackQuery.data.split('/');
    const id = parseInt(data[2], 10);
    const field = <RequestsFiled> data[0];
    const request = <AllRequests> data[1];
    const response = await handleCallback({ id, request, field, translation: i18n });

    if (isEditable(field)) {
        await answerCbQuery(i18n.t('loading'));

        return editMessageText(response, {
            parse_mode: 'Markdown',
            reply_markup: callbackKeyboard({ request, translation: i18n })
        });
    }

    return answerCbQuery(response, true);
});

bot.on('text', async ({ i18n, message, replyWithMarkdown }: BotContext) => {
    const { text } = message;
    const { type } = message.chat;

    if ('private' !== type) {
        return false;
    } if (i18n.t('menu') === text.toLowerCase()) {
        await replyWithMarkdown(i18n.t('menuGreetings'));

        return replyWithMarkdown(i18n.t('menuOptions'), { reply_markup: menuKeyboard({ translation: i18n }) });
    } if (i18n.t('help') === text.toLowerCase()) {
        return replyWithMarkdown(i18n.t('helpOptions'));
    }

    return i18n.t('notAvailable');
});
