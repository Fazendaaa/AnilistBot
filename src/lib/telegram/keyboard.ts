import { ReplyKeyboardMarkup } from 'telegram-typings';
import { KeyboardContext } from '.';
const markup = require('telegraf').Markup;

export const countdownKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    return markup.inlineKeyboard([
        markup.callbackButton(translation.t('backButton'), 'MENU/BACK-MENU/0')
    ]);
};

export const aboutKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    return markup.inlineKeyboard([
        markup.callbackButton(translation.t('backButton'), 'MENU/BACK-GUIDE/0')
    ]);
};

export const notifyKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    return markup.inlineKeyboard([
        markup.callbackButton(translation.t('backButton'), 'MENU/BACK-USER/0')
    ]);
};

export const timeKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    return markup.inlineKeyboard([
        markup.callbackButton(translation.t('backButton'), 'MENU/BACK-USER/0')
    ]);
};

export const guideKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    return markup.inlineKeyboard([
        markup.callbackButton(translation.t('backButton'), 'MENU/BACK-MENU/0'),
        markup.callbackButton(translation.t('aboutButton'), 'MENU/ABOUT/0')
    ]);
};

export const userKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    const firstLine = [
        markup.callbackButton(translation.t('notifyButton'), 'MENU/NOTIFY/0'),
        markup.callbackButton(translation.t('timeButton'), 'MENU/TIME/0')
    ];
    const secondLine = [
        markup.callbackButton(translation.t('backButton'), 'MENU/BACK-MENU/0')
    ];

    return markup.inlineKeyboard([ firstLine, secondLine ]);
};

export const menuKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    const firstLine = [
        markup.callbackButton(translation.t('userButton'), 'MENU/USER/0'),
        markup.callbackButton(translation.t('countdownButton'), 'MENU/COUNTDOWN/0'),
        markup.callbackButton(translation.t('guideButton'), 'MENU/GUIDE/0')
    ];
    const secondLine = [
        markup.callbackButton(translation.t('watchlistButton'), 'MENU/WATCHLIST/0'),
        markup.callbackButton(translation.t('readlistButton'), 'MENU/READLIST/0')
    ];

    return markup.inlineKeyboard([firstLine, secondLine]);
};

// I  know that publishing is only to manga and airing to anime, but even so is they have their following data type just
// to not break the pattern.
export const readlistKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    const firstLine = [
        markup.callbackButton(translation.t('publishingButton'), 'MENU/PUBLISHING-MANGA/0'),
        markup.callbackButton(translation.t('soonButton'), 'MENU/SOON-MANGA/0'),
        markup.callbackButton(translation.t('completedButton'), 'MENU/COMPLETED-MANGA/0'),
        markup.callbackButton(translation.t('cancelledButton'), 'MENU/CANCELLED-MANGA/0')
    ];
    const secondLine = [
        markup.callbackButton(translation.t('moreInfoButton'), 'MENU/MORE-INFO-MANGA/0')
    ];
    const thirdLine = [
        markup.callbackButton(translation.t('backButton'), 'MENU/BACK-MENU/0')
    ];

    return markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
};

export const publishingMangaKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    const firstLine = [
        markup.callbackButton(translation.t('allButton'), 'MENU/ALL-MANGA/0'),
        markup.callbackButton(translation.t('soonButton'), 'MENU/SOON-MANGA/0'),
        markup.callbackButton(translation.t('completedButton'), 'MENU/COMPLETED-MANGA/0'),
        markup.callbackButton(translation.t('cancelledButton'), 'MENU/CANCELLED-MANGA/0')
    ];
    const secondLine = [
        markup.callbackButton(translation.t('moreInfoButton'), 'MENU/MORE-INFO-MANGA/0')
    ];
    const thirdLine = [
        markup.callbackButton(translation.t('backButton'), 'MENU/BACK-MENU/0')
    ];

    return markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const soonMangaKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    const firstLine = [
        markup.callbackButton(translation.t('allButton'), 'MENU/ALL-MANGA/0'),
        markup.callbackButton(translation.t('publishingButton'), 'MENU/PUBLISHING-MANGA/0'),
        markup.callbackButton(translation.t('completedButton'), 'MENU/COMPLETED-MANGA/0'),
        markup.callbackButton(translation.t('cancelledButton'), 'MENU/CANCELLED-MANGA/0')
    ];
    const secondLine = [
        markup.callbackButton(translation.t('moreInfoButton'), 'MENU/MORE-INFO-MANGA/0')
    ];
    const thirdLine = [
        markup.callbackButton(translation.t('backButton'), 'MENU/BACK-MENU/0')
    ];

    return markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const completedMangaKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    const firstLine = [
        markup.callbackButton(translation.t('allButton'), 'MENU/ALL-MANGA/0'),
        markup.callbackButton(translation.t('soonButton'), 'MENU/SOON-MANGA/0'),
        markup.callbackButton(translation.t('publishingButton'), 'MENU/PUBLISHING-MANGA/0'),
        markup.callbackButton(translation.t('cancelledButton'), 'MENU/CANCELLED-MANGA/0')
    ];
    const secondLine = [
        markup.callbackButton(translation.t('moreInfoButton'), 'MENU/MORE-INFO-MANGA/0')
    ];
    const thirdLine = [
        markup.callbackButton(translation.t('backButton'), 'MENU/BACK-MENU/0')
    ];

    return markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const cancelledMangaKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    const firstLine = [
        markup.callbackButton(translation.t('allButton'), 'MENU/ALL-MANGA/0'),
        markup.callbackButton(translation.t('publishingButton'), 'MENU/PUBLISHING-MANGA/0'),
        markup.callbackButton(translation.t('soonButton'), 'MENU/SOON-MANGA/0'),
        markup.callbackButton(translation.t('completedButton'), 'MENU/COMPLETED-MANGA/0')
    ];
    const secondLine = [
        markup.callbackButton(translation.t('moreInfoButton'), 'MENU/MORE-INFO-MANGA/0')
    ];
    const thirdLine = [
        markup.callbackButton(translation.t('backButton'), 'MENU/BACK-MENU/0')
    ];

    return markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const watchlistKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    const firstLine = [
        markup.callbackButton(translation.t('airingButton'), 'MENU/AIRING-ANIME/0'),
        markup.callbackButton(translation.t('soonButton'), 'MENU/SOON-ANIME/0'),
        markup.callbackButton(translation.t('completedButton'), 'MENU/COMPLETED-ANIME/0'),
        markup.callbackButton(translation.t('cancelledButton'), 'MENU/CANCELLED-ANIME/0')
    ];
    const secondLine = [
        markup.callbackButton(translation.t('moreInfoButton'), 'MENU/MORE-INFO-ANIME/0')
    ];
    const thirdLine = [
        markup.callbackButton(translation.t('backButton'), 'MENU/BACK-MENU/0')
    ];

    return markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
};

export const airingAnimeKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    const firstLine = [
        markup.callbackButton(translation.t('allButton'), 'MENU/ALL-ANIME/0'),
        markup.callbackButton(translation.t('soonButton'), 'MENU/SOON-ANIME/0'),
        markup.callbackButton(translation.t('completedButton'), 'MENU/COMPLETED-ANIME/0'),
        markup.callbackButton(translation.t('cancelledButton'), 'MENU/CANCELLED-ANIME/0')
    ];
    const secondLine = [
        markup.callbackButton(translation.t('moreInfoButton'), 'MENU/MORE-INFO-ANIME/0')
    ];
    const thirdLine = [
        markup.callbackButton(translation.t('backButton'), 'MENU/BACK-MENU/0')
    ];

    return markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const soonAnimeKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    const firstLine = [
        markup.callbackButton(translation.t('allButton'), 'MENU/ALL-ANIME/0'),
        markup.callbackButton(translation.t('airingButton'), 'MENU/AIRING-ANIME/0'),
        markup.callbackButton(translation.t('completedButton'), 'MENU/COMPLETED-ANIME/0'),
        markup.callbackButton(translation.t('cancelledButton'), 'MENU/CANCELLED-ANIME/0')
    ];
    const secondLine = [
        markup.callbackButton(translation.t('moreInfoButton'), 'MENU/MORE-INFO-ANIME/0')
    ];
    const thirdLine = [
        markup.callbackButton(translation.t('backButton'), 'MENU/BACK-MENU/0')
    ];

    return markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const completedAnimeKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    const firstLine = [
        markup.callbackButton(translation.t('allButton'), 'MENU/ALL-ANIME/0'),
        markup.callbackButton(translation.t('airingButton'), 'MENU/AIRING-ANIME/0'),
        markup.callbackButton(translation.t('soonButton'), 'MENU/SOON-ANIME/0'),
        markup.callbackButton(translation.t('cancelledButton'), 'MENU/CANCELLED-ANIME/0')
    ];
    const secondLine = [
        markup.callbackButton(translation.t('moreInfoButton'), 'MENU/MORE-INFO-ANIME/0')
    ];
    const thirdLine = [
        markup.callbackButton(translation.t('backButton'), 'MENU/BACK-MENU/0')
    ];

    return markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const cancelledAnimeKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    const firstLine = [
        markup.callbackButton(translation.t('allButton'), 'MENU/ALL-ANIME/0'),
        markup.callbackButton(translation.t('airingButton'), 'MENU/AIRING-ANIME/0'),
        markup.callbackButton(translation.t('soonButton'), 'MENU/SOON-ANIME/0'),
        markup.callbackButton(translation.t('completedButton'), 'MENU/COMPLETED-ANIME/0')
    ];
    const secondLine = [
        markup.callbackButton(translation.t('moreInfoButton'), 'MENU/MORE-INFO-ANIME/0')
    ];
    const thirdLine = [
        markup.callbackButton(translation.t('backButton'), 'MENU/BACK-MENU/0')
    ];

    return markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};
