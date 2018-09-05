import { Markup } from 'telegraf';
import { I18n } from 'telegraf-i18n';
import { InlineKeyboardMarkup } from 'telegram-typings';
import { IMediaKeyboardContext } from '.';

export const mediaKeyboard = ({ id, translation, type }: IMediaKeyboardContext): InlineKeyboardMarkup => {
    const list = ('ANIME' === type) ? Markup.callbackButton(translation.t('buttonWatchlist'), `LIST/WATCH/${id}`)
        : Markup.callbackButton(translation.t('buttonReadlist'), `LIST/READ/${id}`);

    return Markup.inlineKeyboard([
        Markup.callbackButton(translation.t('buttonDescription'), `DESCRIPTION/${type}/${id}`),
        Markup.callbackButton(translation.t('buttonGenres'), `GENRES/${type}/${id}`),
        list
    ]);
};

export const charactersKeyboard = ({ id, translation, type }: IMediaKeyboardContext): InlineKeyboardMarkup => {
    return Markup.inlineKeyboard([
        Markup.callbackButton(translation.t('buttonDescription'), `DESCRIPTION/${type}/${id}`)
    ]);
};

export const staffKeyboard = ({ id, translation, type }: IMediaKeyboardContext): InlineKeyboardMarkup => {
    return Markup.inlineKeyboard([
        Markup.callbackButton(translation.t('buttonDescription'), `DESCRIPTION/${type}/${id}`)
    ]);
};

export const readlistKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('publishingButton'), 'MENU/MANGA-RELEASING/0'),
        Markup.callbackButton(translation.t('soonButton'), 'MENU/MANGA-SOON/0'),
        Markup.callbackButton(translation.t('completedButton'), 'MENU/MANGA-COMPLETED/0'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MENU/MANGA-CANCELLED/0')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/MANGA-MORE-INFO/0')
    ];
    const thirdLine = [
        Markup.callbackButton('<', 'MENU/MENU/0')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const soonMangaKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MENU/MANGA-ALL/0'),
        Markup.callbackButton(translation.t('publishingButton'), 'MENU/MANGA-RELEASING/0'),
        Markup.callbackButton(translation.t('completedButton'), 'MENU/MANGA-COMPLETED/0'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MENU/MANGA-CANCELLED/0')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/MANGA-MORE-INFO/0')
    ];
    const thirdLine = [
        Markup.callbackButton('<', 'MENU/MENU/0')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const watchlistKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('airingButton'), 'MENU/ANIME-RELEASING/0'),
        Markup.callbackButton(translation.t('soonButton'), 'MENU/ANIME-SOON/0'),
        Markup.callbackButton(translation.t('completedButton'), 'MENU/ANIME-COMPLETED/0'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MENU/ANIME-CANCELLED/0')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/ANIME-MORE-INFO/0')
    ];
    const thirdLine = [
        Markup.callbackButton('<', 'MENU/MENU/0')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const soonAnimeKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MENU/ANIME-ALL/0'),
        Markup.callbackButton(translation.t('airingButton'), 'MENU/ANIME-RELEASING/0'),
        Markup.callbackButton(translation.t('completedButton'), 'MENU/ANIME-COMPLETED/0'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MENU/ANIME-CANCELLED/0')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/ANIME-MORE-INFO/0')
    ];
    const thirdLine = [
        Markup.callbackButton('<', 'MENU/MENU/0')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const airingAnimeKeyboard = (translation: I18n): InlineKeyboardMarkup => {
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
        Markup.callbackButton('<', 'MENU/MENU/0')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const completedMangaKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MENU/MANGA-ALL/0'),
        Markup.callbackButton(translation.t('soonButton'), 'MENU/MANGA-SOON/0'),
        Markup.callbackButton(translation.t('publishingButton'), 'MENU/MANGA-RELEASING/0'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MENU/MANGA-CANCELLED/0')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/MANGA-MORE-INFO/0')
    ];
    const thirdLine = [
        Markup.callbackButton('<', 'MENU/MENU/0')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const cancelledMangaKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MENU/MANGA-ALL/0'),
        Markup.callbackButton(translation.t('publishingButton'), 'MENU/MANGA-RELEASING/0'),
        Markup.callbackButton(translation.t('soonButton'), 'MENU/MANGA-SOON/0'),
        Markup.callbackButton(translation.t('completedButton'), 'MENU/COMPLETED-MANGA/0')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/MANGA-MORE-INFO/0')
    ];
    const thirdLine = [
        Markup.callbackButton('<', 'MENU/MENU/0')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const completedAnimeKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MENU/ANIME-ALL/0'),
        Markup.callbackButton(translation.t('airingButton'), 'MENU/ANIME-RELEASING/0'),
        Markup.callbackButton(translation.t('soonButton'), 'MENU/ANIME-SOON/0'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MENU/ANIME-CANCELLED/0')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/ANIME-MORE-INFO/0')
    ];
    const thirdLine = [
        Markup.callbackButton('<', 'MENU/MENU/0')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const cancelledAnimeKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MENU/ANIME-ALL/0'),
        Markup.callbackButton(translation.t('airingButton'), 'MENU/ANIME-RELEASING/0'),
        Markup.callbackButton(translation.t('soonButton'), 'MENU/ANIME-SOON/0'),
        Markup.callbackButton(translation.t('completedButton'), 'MENU/ANIME-COMPLETED/0')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/ANIME-MORE-INFO/0')
    ];
    const thirdLine = [
        Markup.callbackButton('<', 'MENU/MENU/0')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const publishingMangaKeyboard = (translation: I18n): InlineKeyboardMarkup => {
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
        Markup.callbackButton('<', 'MENU/MENU/0')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};
