import { Markup } from 'telegraf';
import { IKeyboardContext } from 'telegraf-bot-typings';
import { I18n } from 'telegraf-i18n';
import { InlineKeyboardMarkup } from 'telegram-typings';

const readlistKeyboard = (translation: I18n): InlineKeyboardMarkup => {
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

const soonMangaKeyboard = (translation: I18n): InlineKeyboardMarkup => {
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

const watchlistKeyboard = (translation: I18n): InlineKeyboardMarkup => {
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

const soonAnimeKeyboard = (translation: I18n): InlineKeyboardMarkup => {
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

const airingAnimeKeyboard = (translation: I18n): InlineKeyboardMarkup => {
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

const completedMangaKeyboard = (translation: I18n): InlineKeyboardMarkup => {
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

const cancelledMangaKeyboard = (translation: I18n): InlineKeyboardMarkup => {
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

const completedAnimeKeyboard = (translation: I18n): InlineKeyboardMarkup => {
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

const cancelledAnimeKeyboard = (translation: I18n): InlineKeyboardMarkup => {
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

const publishingMangaKeyboard = (translation: I18n): InlineKeyboardMarkup => {
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

export const animeKeyboard = ({ request, translation }: IKeyboardContext): InlineKeyboardMarkup => {
    if ('ANIME-SOON' === request) {
        return soonAnimeKeyboard(translation);
    } if ('ANIME-RELEASING' === request) {
        return airingAnimeKeyboard(translation);
    } if ('ANIME-COMPLETED' === request) {
        return completedAnimeKeyboard(translation);
    } if ('ANIME-CANCELLED' === request) {
        return cancelledAnimeKeyboard(translation);
    }

    return watchlistKeyboard(translation);
};

export const mangaKeyboard = ({ request, translation }: IKeyboardContext): InlineKeyboardMarkup => {
    if ('MANGA-SOON' === request) {
        return soonMangaKeyboard(translation);
    } if ('MANGA-COMPLETED' === request) {
        return completedMangaKeyboard(translation);
    } if ('MANGA-CANCELLED' === request) {
        return cancelledMangaKeyboard(translation);
    } if ('MANGA-RELEASING' === request) {
        return publishingMangaKeyboard(translation);
    }

    return readlistKeyboard(translation);
};
