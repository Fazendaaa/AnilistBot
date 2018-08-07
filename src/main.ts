import { config } from 'dotenv';
import { join } from 'path';
import telegraf from 'telegraf';
import telegrafI18n from 'telegraf-i18n';
import { fetchAnime } from './lib/anilist/search';

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

bot.start(({ replyWithMarkdown }) => {
    fetchAnime().then(console.log);

    replyWithMarkdown('Lorem.');
});
