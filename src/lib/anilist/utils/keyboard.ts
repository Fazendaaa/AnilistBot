import { InlineKeyboardMarkup } from 'telegram-typings';
import { I18n } from 'telegraf-i18n';
import { MediaFormat } from '..';
const markup = require('telegraf').Markup;

interface KeyboardContext {
    id: number;
    format: MediaFormat;
    translation: I18n;
}

export const inlineKeyboard = ({ id, translation, format }: KeyboardContext): InlineKeyboardMarkup => {
    let list = markup.callbackButton(translation.t('buttonWatchlist'), `watchlist/${id}`);
    
    if ('MANGA' === format || 'ONE_SHOT' === format) {
        list = markup.callbackButton(translation.t('buttonReadlist'), `readlist/${id}`);
    }                                 

    return markup.inlineKeyboard([
        markup.callbackButton(translation.t('buttonDescription'), `description/${id}`),
        markup.callbackButton(translation.t('buttonGenres'), `genres/${id}`),
        markup.callbackButton(translation.t('buttonUsers'), `users/${id}`),
        list
    ]);
};
