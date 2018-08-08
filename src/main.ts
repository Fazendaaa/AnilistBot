import { config } from 'dotenv';
import { join } from 'path';
import telegraf from 'telegraf';
import telegrafI18n from 'telegraf-i18n';
import { searchContent } from './lib/anilist/inline/search';
import { BotContext } from '.';
import { sanitize } from './lib/utils/parse';
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
    const query = sanitize({ message: inlineQuery.query });
    const searched = await searchContent({ query, translation: i18n });
    const results = toInlineArticle(searched);

    answerInlineQuery(results);
});
