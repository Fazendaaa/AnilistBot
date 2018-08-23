import { config } from 'dotenv';
import { join } from 'path';
import { connect, connection, set } from 'mongoose';
import telegraf from 'telegraf';
import telegrafI18n from 'telegraf-i18n';
import { allSearch } from './lib/anilist/searches/searches';
import { sanitize } from './lib/telegram/utils/parse';
import { toInlineArticle } from './lib/telegram/inline';
import { RequestsFiled } from './lib/anilist/requests/';
import { handleRequests } from './lib/anilist/requests/handle';
import { MediaType } from './lib/anilist';
import { BotContext } from './lib/telegram';

config();

const bot = new telegraf(<string> process.env.BOT_KEY);
const i18n = new telegrafI18n({
    useSession: true,
    allowMissing: true,
    defaultLanguage: 'en',
    sessionName: 'session',
    directory: join(__dirname, '../others/locales')
});

let dbStatus = false;

connect(process.env.MONGODB_URI);

connection.on('open', () => {
    // https://stackoverflow.com/a/51918795/7092954
    set('useCreateIndex', true);
    set('useFindAndModify', false);

    console.log('DB connected.');

    dbStatus = true;
});

connection.on('error', () => {
    console.error.bind(console, 'connection error:');

    dbStatus = false;
});

bot.startPolling();

bot.use(telegraf.log());
bot.use(i18n.middleware());

bot.catch(console.error);

bot.start(({ i18n, replyWithMarkdown }: BotContext) => replyWithMarkdown(i18n.t('start')));

bot.on('inline_query', async ({ i18n, answerInlineQuery, inlineQuery }: BotContext) => {
    const perPage = 20;
    const page = parseInt(inlineQuery.offset, 10) || 0;
    const next_offset = (page + perPage).toString();
    const search = sanitize({ message: inlineQuery.query });
    const searched = await allSearch({ search, page, perPage, translation: i18n });
    const results = toInlineArticle(searched);

    answerInlineQuery(results, { next_offset });
});

bot.on('callback_query', async ({ i18n, callbackQuery, answerCbQuery }: BotContext) => {
    const data = callbackQuery.data.split('/');
    const id = parseInt(data[2], 10);
    const type = <MediaType> data[1];
    const field = <RequestsFiled> data[0];
    const response = await handleRequests({ id, type, field, translation: i18n });

    return await answerCbQuery(response, true);
});
