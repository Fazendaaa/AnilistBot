import { config } from 'dotenv';
import { join } from 'path';
import telegraf from 'telegraf';
import telegrafI18n from 'telegraf-i18n';
import { searchInline } from './lib/anilist/inline/search';
import { BotContext } from './index';
import { sanitize } from './lib/telegram/utils/parse';
import { toInlineArticle } from './lib/telegram/inline';

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
    const searched = await searchInline({ query, page: offset, perPage: pageLimit, translation: i18n });
    const results = toInlineArticle(searched);

    answerInlineQuery(results, { next_offset });
});
