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
    return markup.inlineKeyboard([
        markup.callbackButton(translation.t('notAvailable'), 'MENU/READLIST/0')
    ]);
};

export const guideKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    return markup.inlineKeyboard([
        markup.callbackButton(translation.t('notAvailable'), 'MENU/READLIST/0')
    ]);
};

export const readlistKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    return markup.inlineKeyboard([
        markup.callbackButton(translation.t('notAvailable'), 'MENU/READLIST/0')
    ]);
};

export const watchlistKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    return markup.inlineKeyboard([
        markup.callbackButton(translation.t('notAvailable'), 'MENU/READLIST/0')
    ]);
};

export const countdownKeyboard = ({ translation }: KeyboardContext): ReplyKeyboardMarkup => {
    return markup.inlineKeyboard([
        markup.callbackButton(translation.t('notAvailable'), 'MENU/READLIST/0')
    ]);
};
