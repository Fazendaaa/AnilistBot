import { Markup } from 'telegraf';
import { ReplyKeyboardMarkup } from 'telegram-typings';
import { KeyboardContext } from '.';

export const countdownKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    return Markup.inlineKeyboard([
        Markup.callbackButton(translation.t('backButton'), 'MENU/MENU-BACK/0')
    ]);
};

export const aboutKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    return Markup.inlineKeyboard([
        Markup.callbackButton(translation.t('backButton'), 'MENU/GUIDE-BACK/0')
    ]);
};

export const notifyKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    return Markup.inlineKeyboard([
        Markup.callbackButton(translation.t('backButton'), 'MENU/USER-BACK/0')
    ]);
};

export const timeKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    return Markup.inlineKeyboard([
        Markup.callbackButton(translation.t('backButton'), 'MENU/USER-BACK/0')
    ]);
};

export const guideKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    return Markup.inlineKeyboard([
        Markup.callbackButton(translation.t('backButton'), 'MENU/MENU-BACK/0'),
        Markup.callbackButton(translation.t('aboutButton'), 'MENU/ABOUT/0')
    ]);
};

export const userKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('notifyButton'), 'MENU/NOTIFY/0'),
        Markup.callbackButton(translation.t('timeButton'), 'MENU/TIME/0')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('backButton'), 'MENU/MENU-BACK/0')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine ]);
};

export const menuKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('userButton'), 'MENU/USER/0'),
        Markup.callbackButton(translation.t('countdownButton'), 'MENU/COUNTDOWN/0'),
        Markup.callbackButton(translation.t('guideButton'), 'MENU/GUIDE/0')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('watchlistButton'), 'MENU/WATCHLIST/0'),
        Markup.callbackButton(translation.t('readlistButton'), 'MENU/READLIST/0')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine]);
};

// I  know that publishing is only to manga and airing to anime, but even so is they have their following data type just
// to not break the pattern.
export const readlistKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('publishingButton'), 'MENU/MANGA-PUBLISHING/0'),
        Markup.callbackButton(translation.t('soonButton'), 'MENU/MANGA-SOON/0'),
        Markup.callbackButton(translation.t('completedButton'), 'MENU/MANGA-COMPLETED/0'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MENU/MANGA-CANCELLED/0')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/MANGA-MORE-INFO/0')
    ];
    const thirdLine = [
        Markup.callbackButton(translation.t('backButton'), 'MENU/MENU-BACK/0')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
};

export const publishingMangaKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MENU/MANGA-ALL/0'),
        Markup.callbackButton(translation.t('soonButton'), 'MENU/MANGA-SOON/0'),
        Markup.callbackButton(translation.t('completedButton'), 'MENU/MANGA-COMPLETED/0'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MENU/MANGA-CANCELLED/0')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/MANGA-MORE-INFO/0')
    ];
    const thirdLine = [
        Markup.callbackButton(translation.t('backButton'), 'MENU/MENU-BACK/0')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const soonMangaKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MENU/MANGA-ALL/0'),
        Markup.callbackButton(translation.t('publishingButton'), 'MENU/MANGA-PUBLISHING/0'),
        Markup.callbackButton(translation.t('completedButton'), 'MENU/MANGA-COMPLETED/0'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MENU/MANGA-CANCELLED/0')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/MANGA-MORE-INFO/0')
    ];
    const thirdLine = [
        Markup.callbackButton(translation.t('backButton'), 'MENU/MENU-BACK/0')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const completedMangaKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MENU/MANGA-ALL/0'),
        Markup.callbackButton(translation.t('soonButton'), 'MENU/MANGA-SOON/0'),
        Markup.callbackButton(translation.t('publishingButton'), 'MENU/MANGA-PUBLISHING/0'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MENU/MANGA-CANCELLED/0')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/MANGA-MORE-INFO/0')
    ];
    const thirdLine = [
        Markup.callbackButton(translation.t('backButton'), 'MENU/MENU-BACK/0')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const cancelledMangaKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MENU/MANGA-ALL/0'),
        Markup.callbackButton(translation.t('publishingButton'), 'MENU/MANGA-PUBLISHING/0'),
        Markup.callbackButton(translation.t('soonButton'), 'MENU/MANGA-SOON/0'),
        Markup.callbackButton(translation.t('completedButton'), 'MENU/COMPLETED-MANGA/0')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/MANGA-MORE-INFO/0')
    ];
    const thirdLine = [
        Markup.callbackButton(translation.t('backButton'), 'MENU/MENU-BACK/0')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const watchlistKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('airingButton'), 'MENU/ANIME-AIRING/0'),
        Markup.callbackButton(translation.t('soonButton'), 'MENU/ANIME-SOON/0'),
        Markup.callbackButton(translation.t('completedButton'), 'MENU/ANIME-COMPLETED/0'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MENU/ANIME-CANCELLED/0')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/ANIME-MORE-INFO/0')
    ];
    const thirdLine = [
        Markup.callbackButton(translation.t('backButton'), 'MENU/MENU-BACK/0')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
};

export const airingAnimeKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MENU/ANIME-ALL/0'),
        Markup.callbackButton(translation.t('soonButton'), 'MENU/ANIME-SOON/0'),
        Markup.callbackButton(translation.t('completedButton'), 'MENU/ANIME-COMPLETED/0'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MENU/ANIME-CANCELLED/0')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/ANIME-MORE-INFO/0')
    ];
    const thirdLine = [
        Markup.callbackButton(translation.t('backButton'), 'MENU/MENU-BACK/0')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const soonAnimeKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MENU/ANIME-ALL/0'),
        Markup.callbackButton(translation.t('airingButton'), 'MENU/ANIME-AIRING/0'),
        Markup.callbackButton(translation.t('completedButton'), 'MENU/ANIME-COMPLETED/0'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MENU/ANIME-CANCELLED/0')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/ANIME-MORE-INFO/0')
    ];
    const thirdLine = [
        Markup.callbackButton(translation.t('backButton'), 'MENU/MENU-BACK/0')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const completedAnimeKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MENU/ANIME-ALL/0'),
        Markup.callbackButton(translation.t('airingButton'), 'MENU/ANIME-AIRING/0'),
        Markup.callbackButton(translation.t('soonButton'), 'MENU/ANIME-SOON/0'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MENU/ANIME-CANCELLED/0')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/ANIME-MORE-INFO/0')
    ];
    const thirdLine = [
        Markup.callbackButton(translation.t('backButton'), 'MENU/MENU-BACK/0')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const cancelledAnimeKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MENU/ANIME-ALL/0'),
        Markup.callbackButton(translation.t('airingButton'), 'MENU/ANIME-AIRING/0'),
        Markup.callbackButton(translation.t('soonButton'), 'MENU/ANIME-SOON/0'),
        Markup.callbackButton(translation.t('completedButton'), 'MENU/ANIME-COMPLETED/0')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/ANIME-MORE-INFO/0')
    ];
    const thirdLine = [
        Markup.callbackButton(translation.t('backButton'), 'MENU/MENU-BACK/0')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};
