import { config } from 'dotenv';
import telegraf from 'telegraf';
import { fetchAnime } from './lib/anilist/search';

config();

const bot = new telegraf(<string> process.env.BOT_KEY);

bot.start(({ replyWithMarkdown }) => {
    fetchAnime().then(console.log);

    replyWithMarkdown('Lorem.');
});

bot.startPolling();
