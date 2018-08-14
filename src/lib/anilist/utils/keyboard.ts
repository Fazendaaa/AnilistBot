import { InlineKeyboardMarkup } from 'telegram-typings';
import { I18n } from 'telegraf-i18n';
import { MediaType } from '..';
const markup = require('telegraf').Markup;

interface KeyboardContext {
    id: number;
    type: MediaType;
    translation: I18n;
}

export const inlineKeyboard = ({ id, translation, type }: KeyboardContext): InlineKeyboardMarkup => {
    const list = ('ANIME' === type) ? markup.callbackButton(translation.t('buttonWatchlist'), `list/${id}/watch`)
                                    : markup.callbackButton(translation.t('buttonReadlist'), `list/${id}/read`);

    return markup.inlineKeyboard([
        markup.callbackButton(translation.t('buttonDescription'), `description/${id}/${type}`),
        markup.callbackButton(translation.t('buttonGenres'), `genres/${id}/${type}`),
        markup.callbackButton(translation.t('buttonUsers'), `users/${id}/${type}`),
        list
    ]);
};
