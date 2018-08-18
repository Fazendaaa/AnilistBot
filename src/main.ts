import { config } from 'dotenv';
import { join } from 'path';
import telegraf from 'telegraf';
import telegrafI18n from 'telegraf-i18n';
import { allSearch } from './lib/anilist/searches/searches';
import { sanitize } from './lib/telegram/utils/parse';
import { toInlineArticle } from './lib/telegram/inline';
import { CallbackFiled } from './lib/anilist/callback/';
import { handleCallback } from './lib/anilist/callback/handle';
import { MediaType } from './lib/anilist';
import { BotContext } from './lib/telegram';

config();

const bot = new telegraf(<string>process.env.BOT_KEY);
const i18n = new telegrafI18n({
    useSession: true,
    allowMissing: true,
    defaultLanguage: 'en',
    sessionName: 'session',
    directory: join(__dirname, '../others/locales')
});

bot.startPolling();

bot.use(telegraf.log());
bot.use(i18n.middleware());

bot.catch(console.error);

bot.start(({ i18n, replyWithMarkdown }: BotContext) => replyWithMarkdown(i18n.t('start')));

bot.on('inline_query', async ({ i18n, answerInlineQuery, inlineQuery }: BotContext) => {
    const pageLimit = 20;
    const offset = parseInt(inlineQuery.offset, 10) || 0;
    const next_offset = (offset + pageLimit).toString();
    const query = sanitize({ message: inlineQuery.query });
    const searched = await allSearch({ query, page: offset, perPage: pageLimit, translation: i18n });
    const results = toInlineArticle(searched);

    answerInlineQuery(results, { next_offset });
});

bot.on('callback_query', async ({ i18n, callbackQuery, answerCbQuery }: BotContext) => {
    const data = callbackQuery.data.split('/');
    const id = parseInt(data[1], 10);
    const type = <MediaType> data[2];
    const field = <CallbackFiled> data[0];
    const response = await handleCallback({ id, type, field, translation: i18n });

    return await answerCbQuery(response, true);
});
