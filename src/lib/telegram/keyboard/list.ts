import { CallbackButton, Markup } from 'telegraf';
import { I18n } from 'telegraf-i18n';
import { InlineKeyboardMarkup } from 'telegram-typings';
import { IHandleMediaButton, IMoreKeyboard } from '.';
import { IListTitle } from '../../anilist/queries';

const handleMediaButton = ({ kind, title }: IHandleMediaButton): CallbackButton => {
    const { id } = title;
    const { native, english, romaji } = title.title;
    let button = '';

    if (null !== native) {
        button = native;
    } if (null !== romaji) {
        button = romaji;
    } if (null !== english) {
        button = english;
    }

    return Markup.callbackButton(button, `MORE/${kind}/${id}`);
};

export const watchlistMoreInfoKeyboard = (animes: IListTitle[]): InlineKeyboardMarkup => {
    const content = animes.map((title: IListTitle) => [ handleMediaButton({ kind: 'ANIME', title }) ]);

    content.push([ Markup.callbackButton('<', 'MEDIA/WATCH/ALL') ]);

    return Markup.inlineKeyboard(content);
};

export const readlistMoreInfoKeyboard = (mangas: IListTitle[]): InlineKeyboardMarkup => {
    const content = mangas.map((title: IListTitle) => [handleMediaButton({ kind: 'MANGA', title })]);

    content.push([ Markup.callbackButton('<', 'MEDIA/READ/ALL') ]);

    return Markup.inlineKeyboard(content);
};

export const animeMoreKeyboard = ({ id, translation }: IMoreKeyboard): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('buttonDescription'), `ANILIST/ANIME/DESCRIPTION/${id}`),
        Markup.callbackButton(translation.t('buttonGenres'), `ANILIST/ANIME/GENRES/${id}`),
        Markup.callbackButton(translation.t('buttonRemove'), `LIST/WATCH/UNSUBSCRIBE/${id}`)
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('buttonNotify'), `LIST/WATCH/NOTIFY/${id}`)
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine ]);
};

export const mangaMoreKeyboard = ({ id, translation }: IMoreKeyboard): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('buttonDescription'), `ANILIST/MANGA/DESCRIPTION/${id}`),
        Markup.callbackButton(translation.t('buttonGenres'), `ANILIST/MANGA/GENRES/${id}`),
        Markup.callbackButton(translation.t('buttonRemove'), `LIST/READ/UNSUBSCRIBE/${id}`)
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('buttonNotify'), `LIST/READ/NOTIFY/${id}`)
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine ]);
};

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

    return Markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
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

    return Markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
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
