import { InlineKeyboardMarkup } from 'telegram-typings';
import { I18n } from 'telegraf-i18n';
import { AllRequests } from '../../requests';
const markup = require('telegraf').Markup;

interface KeyboardContext {
    id: number;
    type: AllRequests;
    translation: I18n;
}

export const mediaKeyboard = ({ id, translation, type }: KeyboardContext): InlineKeyboardMarkup => {
    const list = ('ANIME' === type) ? markup.callbackButton(translation.t('buttonWatchlist'), `LIST/WATCH/${id}`)
                                    : markup.callbackButton(translation.t('buttonReadlist'), `LIST/READ/${id}`);

    return markup.inlineKeyboard([
        markup.callbackButton(translation.t('buttonDescription'), `DESCRIPTION/${type}/${id}`),
        markup.callbackButton(translation.t('buttonGenres'), `GENRES/${type}/${id}`),
        list
    ]);
};

export const charactersKeyboard = ({ id, translation, type }: KeyboardContext): InlineKeyboardMarkup => {
    return markup.inlineKeyboard([
        markup.callbackButton(translation.t('buttonDescription'), `DESCRIPTION/${type}/${id}`)
    ]);
};

export const staffKeyboard = ({ id, translation, type }: KeyboardContext): InlineKeyboardMarkup => {
    return markup.inlineKeyboard([
        markup.callbackButton(translation.t('buttonDescription'), `DESCRIPTION/${type}/${id}`)
    ]);
};
