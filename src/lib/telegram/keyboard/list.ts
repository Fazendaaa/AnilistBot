import { Markup } from 'telegraf';
import { I18n } from 'telegraf-i18n';
import { InlineKeyboardMarkup } from 'telegram-typings';

export const readlistKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('publishingButton'), 'MEDIA/READ/RELEASING'),
        Markup.callbackButton(translation.t('soonButton'), 'MEDIA/READ/NOT_YET_RELEASED'),
        Markup.callbackButton(translation.t('completedButton'), 'MEDIA/READ/FINISHED'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MEDIA/READ/CANCELLED')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MEDIA/READ/MORE-INFO')
    ];
    const thirdLine = [
        Markup.callbackButton('<', 'MENU/MENU')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const soonMangaKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MEDIA/READ/ALL'),
        Markup.callbackButton(translation.t('publishingButton'), 'MEDIA/READ/RELEASING'),
        Markup.callbackButton(translation.t('completedButton'), 'MEDIA/READ/FINISHED'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MEDIA/READ/CANCELLED')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MEDIA/READ/MORE-INFO')
    ];
    const thirdLine = [
        Markup.callbackButton('<', 'MENU/MENU')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const watchlistKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('airingButton'), 'MEDIA/WATCH/RELEASING'),
        Markup.callbackButton(translation.t('soonButton'), 'MEDIA/WATCH/NOT_YET_RELEASED'),
        Markup.callbackButton(translation.t('completedButton'), 'MEDIA/WATCH/FINISHED'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MEDIA/WATCH/CANCELLED')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MEDIA/WATCH/MORE-INFO')
    ];
    const thirdLine = [
        Markup.callbackButton('<', 'MENU/MENU')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const soonAnimeKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MEDIA/WATCH/ALL'),
        Markup.callbackButton(translation.t('airingButton'), 'MEDIA/WATCH/RELEASING'),
        Markup.callbackButton(translation.t('completedButton'), 'MEDIA/WATCH/FINISHED'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MEDIA/WATCH/CANCELLED')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MEDIA/WATCH/MORE-INFO')
    ];
    const thirdLine = [
        Markup.callbackButton('<', 'MENU/MENU')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const airingAnimeKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MEDIA/WATCH/ALL'),
        Markup.callbackButton(translation.t('soonButton'), 'MEDIA/WATCH/NOT_YET_RELEASED'),
        Markup.callbackButton(translation.t('completedButton'), 'MEDIA/WATCH/FINISHED'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MEDIA/WATCH/CANCELLED')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MEDIA/WATCH/MORE-INFO')
    ];
    const thirdLine = [
        Markup.callbackButton('<', 'MENU/MENU')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const completedMangaKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MEDIA/READ/ALL'),
        Markup.callbackButton(translation.t('soonButton'), 'MEDIA/READ/NOT_YET_RELEASED'),
        Markup.callbackButton(translation.t('publishingButton'), 'MEDIA/READ/RELEASING'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MEDIA/READ/CANCELLED')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MEDIA/READ/MORE-INFO')
    ];
    const thirdLine = [
        Markup.callbackButton('<', 'MENU/MENU')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const cancelledMangaKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MEDIA/READ/ALL'),
        Markup.callbackButton(translation.t('publishingButton'), 'MEDIA/READ/RELEASING'),
        Markup.callbackButton(translation.t('soonButton'), 'MEDIA/READ/NOT_YET_RELEASED'),
        Markup.callbackButton(translation.t('completedButton'), 'MENU/FINISHED-MANGA')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MEDIA/READ/MORE-INFO')
    ];
    const thirdLine = [
        Markup.callbackButton('<', 'MENU/MENU')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const completedAnimeKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MEDIA/WATCH/ALL'),
        Markup.callbackButton(translation.t('airingButton'), 'MEDIA/WATCH/RELEASING'),
        Markup.callbackButton(translation.t('soonButton'), 'MEDIA/WATCH/NOT_YET_RELEASED'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MEDIA/WATCH/CANCELLED')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MEDIA/WATCH/MORE-INFO')
    ];
    const thirdLine = [
        Markup.callbackButton('<', 'MENU/MENU')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const cancelledAnimeKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MEDIA/WATCH/ALL'),
        Markup.callbackButton(translation.t('airingButton'), 'MEDIA/WATCH/RELEASING'),
        Markup.callbackButton(translation.t('soonButton'), 'MEDIA/WATCH/NOT_YET_RELEASED'),
        Markup.callbackButton(translation.t('completedButton'), 'MEDIA/WATCH/FINISHED')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MEDIA/WATCH/MORE-INFO')
    ];
    const thirdLine = [
        Markup.callbackButton('<', 'MENU/MENU')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};

export const publishingMangaKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MEDIA/READ/ALL'),
        Markup.callbackButton(translation.t('soonButton'), 'MEDIA/READ/NOT_YET_RELEASED'),
        Markup.callbackButton(translation.t('completedButton'), 'MEDIA/READ/FINISHED'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MEDIA/READ/CANCELLED')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MEDIA/READ/MORE-INFO')
    ];
    const thirdLine = [
        Markup.callbackButton('<', 'MENU/MENU')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine]);
};
