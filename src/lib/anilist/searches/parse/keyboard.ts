import { InlineKeyboardMarkup } from 'telegram-typings';
import { I18n } from 'telegraf-i18n';
import { AllTypes } from '../..';
const markup = require('telegraf').Markup;

interface KeyboardContext {
    id: number;
    type: AllTypes;
    translation: I18n;
}

export const mediaKeyboard = ({ id, translation, type }: KeyboardContext): InlineKeyboardMarkup => {
    const list = ('ANIME' === type) ? markup.callbackButton(translation.t('buttonWatchlist'), `list/${id}/watch`)
                                    : markup.callbackButton(translation.t('buttonReadlist'), `list/${id}/read`);

    return markup.inlineKeyboard([
        markup.callbackButton(translation.t('buttonDescription'), `description/${id}/${type}`),
        markup.callbackButton(translation.t('buttonGenres'), `genres/${id}/${type}`),
        list
    ]);
};

export const charactersKeyboard = ({ id, translation, type }: KeyboardContext): InlineKeyboardMarkup => {
    return markup.inlineKeyboard([
        markup.callbackButton(translation.t('buttonDescription'), `description/${id}/${type}`)
    ]);
};

export const staffKeyboard = ({ id, translation, type }: KeyboardContext): InlineKeyboardMarkup => {
    return markup.inlineKeyboard([
        markup.callbackButton(translation.t('buttonDescription'), `description/${id}/${type}`)
    ]);
};
