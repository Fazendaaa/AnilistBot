import { ReplyKeyboardMarkup } from 'telegram-typings';
import { KeyboardContext } from '.';
const markup = require('telegraf').Markup;

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

    return markup.inlineKeyboard([ firstLine, secondLine ]);
};

export const userKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    const firstLine = [
        markup.callbackButton(translation.t('notifyButton'), 'MENU/READLIST/0'),
        markup.callbackButton(translation.t('timeButton'), 'MENU/READLIST/0')
    ];
    const secondLine = [
        markup.callbackButton(translation.t('backButton'), 'MENU/READLIST/0')
    ];

    return markup.inlineKeyboard([ firstLine, secondLine ]);
};

export const guideKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    return markup.inlineKeyboard([
        markup.callbackButton(translation.t('backButton'), 'MENU/READLIST/0'),
        markup.callbackButton(translation.t('aboutButton'), 'MENU/READLIST/0')
    ]);
};

export const readlistKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    const firstLine = [
        markup.callbackButton(translation.t('publishingButton'), 'MENU/READLIST/0'),
        markup.callbackButton(translation.t('soonButton'), 'MENU/READLIST/0'),
        markup.callbackButton(translation.t('completedButton'), 'MENU/READLIST/0'),
        markup.callbackButton(translation.t('cancelledButton'), 'MENU/READLIST/0')
    ];
    const secondLine = [
        markup.callbackButton(translation.t('moreInfoButton'), 'MENU/READLIST/0')
    ];
    const thirdLine = [
        markup.callbackButton(translation.t('backButton'), 'MENU/READLIST/0')
    ];

    return markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
};

export const watchlistKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    const firstLine = [
        markup.callbackButton(translation.t('airingButton'), 'MENU/READLIST/0'),
        markup.callbackButton(translation.t('soonButton'), 'MENU/READLIST/0'),
        markup.callbackButton(translation.t('completedButton'), 'MENU/READLIST/0'),
        markup.callbackButton(translation.t('cancelledButton'), 'MENU/READLIST/0')
    ];
    const secondLine = [
        markup.callbackButton(translation.t('moreInfoButton'), 'MENU/READLIST/0')
    ];
    const thirdLine = [
        markup.callbackButton(translation.t('backButton'), 'MENU/READLIST/0')
    ];

    return markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
};

export const countdownKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    return markup.inlineKeyboard([
        markup.callbackButton(translation.t('backButton'), 'MENU/READLIST/0')
    ]);
};

export const aboutKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    return markup.inlineKeyboard([
        markup.callbackButton(translation.t('backButton'), 'MENU/READLIST/0')
    ]);
};
