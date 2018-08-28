import { Markup } from 'telegraf';
import { InlineKeyboardMarkup } from 'telegram-typings';
import { KeyboardContext } from '.';

export const mediaKeyboard = ({ id, translation, type }: KeyboardContext): InlineKeyboardMarkup => {
    const list = ('ANIME' === type) ? Markup.callbackButton(translation.t('buttonWatchlist'), `LIST/WATCH/${id}`)
                                    : Markup.callbackButton(translation.t('buttonReadlist'), `LIST/READ/${id}`);

    return Markup.inlineKeyboard([
        Markup.callbackButton(translation.t('buttonDescription'), `DESCRIPTION/${type}/${id}`),
        Markup.callbackButton(translation.t('buttonGenres'), `GENRES/${type}/${id}`),
        list
    ]);
};

export const charactersKeyboard = ({ id, translation, type }: KeyboardContext): InlineKeyboardMarkup => {
    return Markup.inlineKeyboard([
        Markup.callbackButton(translation.t('buttonDescription'), `DESCRIPTION/${type}/${id}`)
    ]);
};

export const staffKeyboard = ({ id, translation, type }: KeyboardContext): InlineKeyboardMarkup => {
    return Markup.inlineKeyboard([
        Markup.callbackButton(translation.t('buttonDescription'), `DESCRIPTION/${type}/${id}`)
    ]);
};
