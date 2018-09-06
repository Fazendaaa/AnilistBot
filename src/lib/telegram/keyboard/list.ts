import { Markup } from 'telegraf';
import { I18n } from 'telegraf-i18n';
import { InlineKeyboardMarkup } from 'telegram-typings';

export const readlistKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('publishingButton'), 'MENU/MANGA-RELEASING'),
        Markup.callbackButton(translation.t('soonButton'), 'MENU/MANGA-SOON'),
        Markup.callbackButton(translation.t('completedButton'), 'MENU/MANGA-COMPLETED'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MENU/MANGA-CANCELLED')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/MANGA-MORE-INFO')
    ];
    const thirdLine = [
        Markup.callbackButton('<', 'MENU/MENU')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const soonMangaKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MENU/MANGA-ALL'),
        Markup.callbackButton(translation.t('publishingButton'), 'MENU/MANGA-RELEASING'),
        Markup.callbackButton(translation.t('completedButton'), 'MENU/MANGA-COMPLETED'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MENU/MANGA-CANCELLED')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/MANGA-MORE-INFO')
    ];
    const thirdLine = [
        Markup.callbackButton('<', 'MENU/MENU')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const watchlistKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('airingButton'), 'MENU/ANIME-RELEASING'),
        Markup.callbackButton(translation.t('soonButton'), 'MENU/ANIME-SOON'),
        Markup.callbackButton(translation.t('completedButton'), 'MENU/ANIME-COMPLETED'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MENU/ANIME-CANCELLED')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/ANIME-MORE-INFO')
    ];
    const thirdLine = [
        Markup.callbackButton('<', 'MENU/MENU')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const soonAnimeKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MENU/ANIME-ALL'),
        Markup.callbackButton(translation.t('airingButton'), 'MENU/ANIME-RELEASING'),
        Markup.callbackButton(translation.t('completedButton'), 'MENU/ANIME-COMPLETED'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MENU/ANIME-CANCELLED')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/ANIME-MORE-INFO')
    ];
    const thirdLine = [
        Markup.callbackButton('<', 'MENU/MENU')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const airingAnimeKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MENU/ANIME-ALL'),
        Markup.callbackButton(translation.t('soonButton'), 'MENU/ANIME-SOON'),
        Markup.callbackButton(translation.t('completedButton'), 'MENU/ANIME-COMPLETED'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MENU/ANIME-CANCELLED')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/ANIME-MORE-INFO')
    ];
    const thirdLine = [
        Markup.callbackButton('<', 'MENU/MENU')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const completedMangaKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MENU/MANGA-ALL'),
        Markup.callbackButton(translation.t('soonButton'), 'MENU/MANGA-SOON'),
        Markup.callbackButton(translation.t('publishingButton'), 'MENU/MANGA-RELEASING'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MENU/MANGA-CANCELLED')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/MANGA-MORE-INFO')
    ];
    const thirdLine = [
        Markup.callbackButton('<', 'MENU/MENU')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const cancelledMangaKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MENU/MANGA-ALL'),
        Markup.callbackButton(translation.t('publishingButton'), 'MENU/MANGA-RELEASING'),
        Markup.callbackButton(translation.t('soonButton'), 'MENU/MANGA-SOON'),
        Markup.callbackButton(translation.t('completedButton'), 'MENU/COMPLETED-MANGA')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/MANGA-MORE-INFO')
    ];
    const thirdLine = [
        Markup.callbackButton('<', 'MENU/MENU')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const completedAnimeKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MENU/ANIME-ALL'),
        Markup.callbackButton(translation.t('airingButton'), 'MENU/ANIME-RELEASING'),
        Markup.callbackButton(translation.t('soonButton'), 'MENU/ANIME-SOON'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MENU/ANIME-CANCELLED')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/ANIME-MORE-INFO')
    ];
    const thirdLine = [
        Markup.callbackButton('<', 'MENU/MENU')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const cancelledAnimeKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MENU/ANIME-ALL'),
        Markup.callbackButton(translation.t('airingButton'), 'MENU/ANIME-RELEASING'),
        Markup.callbackButton(translation.t('soonButton'), 'MENU/ANIME-SOON'),
        Markup.callbackButton(translation.t('completedButton'), 'MENU/ANIME-COMPLETED')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/ANIME-MORE-INFO')
    ];
    const thirdLine = [
        Markup.callbackButton('<', 'MENU/MENU')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const publishingMangaKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MENU/MANGA-ALL'),
        Markup.callbackButton(translation.t('soonButton'), 'MENU/MANGA-SOON'),
        Markup.callbackButton(translation.t('completedButton'), 'MENU/MANGA-COMPLETED'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MENU/MANGA-CANCELLED')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/MANGA-MORE-INFO')
    ];
    const thirdLine = [
        Markup.callbackButton('<', 'MENU/MENU')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};
