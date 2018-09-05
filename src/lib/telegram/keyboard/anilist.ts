import { Markup } from 'telegraf';
import { InlineKeyboardMarkup } from 'telegram-typings';
import { ICharacterKeyboardContext, IMediaKeyboardContext, IStaffKeyboardContext } from '.';

export const staffKeyboard = ({ id, translation }: IStaffKeyboardContext): InlineKeyboardMarkup => {
    return Markup.inlineKeyboard([
        Markup.callbackButton(translation.t('buttonDescription'), `ANILIST/STAFF/DESCRIPTION/${id}`)
    ]);
};

export const characterKeyboard = ({ id, translation }: ICharacterKeyboardContext): InlineKeyboardMarkup => {
    return Markup.inlineKeyboard([
        Markup.callbackButton(translation.t('buttonDescription'), `ANILIST/CHARACTER/DESCRIPTION/${id}`)
    ]);
};

export const mediaKeyboard = ({ id, translation, kind }: IMediaKeyboardContext): InlineKeyboardMarkup => {
    const list = ('ANIME' === kind) ? Markup.callbackButton(translation.t('buttonWatchlist'), `LIST/WATCH/${id}`)
        : Markup.callbackButton(translation.t('buttonReadlist'), `LIST/READ/${id}`);

    return Markup.inlineKeyboard([
        Markup.callbackButton(translation.t('buttonDescription'), `ANILIST/${kind}/DESCRIPTION/${id}`),
        Markup.callbackButton(translation.t('buttonGenres'), `ANILIST/${kind}/GENRES/${id}`),
        list
    ]);
};
