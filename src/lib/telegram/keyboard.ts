import { Markup } from 'telegraf';
import { InlineKeyboardMarkup } from 'telegram-typings';
import { IKeyboardContext } from '.';

export const languageBackKeyboard = ({ translation }: IKeyboardContext): InlineKeyboardMarkup => {
    return Markup.inlineKeyboard([
        Markup.callbackButton(translation.t('backButton'), 'MENU/USER/0')
    ]);
};

export const notifyBackKeyboard = ({ translation }: IKeyboardContext): InlineKeyboardMarkup => {
    return Markup.inlineKeyboard([
        Markup.callbackButton(translation.t('backButton'), 'MENU/USER/0')
    ]);
};

export const countdownKeyboard = ({ translation }: IKeyboardContext): InlineKeyboardMarkup => {
    return Markup.inlineKeyboard([
        Markup.callbackButton(translation.t('backButton'), 'MENU/MENU/0')
    ]);
};

export const aboutKeyboard = ({ translation }: IKeyboardContext): InlineKeyboardMarkup => {
    return Markup.inlineKeyboard([
        Markup.callbackButton(translation.t('backButton'), 'MENU/GUIDE/0')
    ]);
};

export const timeKeyboard = ({ translation }: IKeyboardContext): InlineKeyboardMarkup => {
    return Markup.inlineKeyboard([
        Markup.callbackButton(translation.t('backButton'), 'MENU/USER/0')
    ]);
};

export const guideKeyboard = ({ translation }: IKeyboardContext): InlineKeyboardMarkup => {
    return Markup.inlineKeyboard([
        Markup.callbackButton(translation.t('backButton'), 'MENU/MENU/0'),
        Markup.callbackButton(translation.t('aboutButton'), 'MENU/ABOUT/0')
    ]);
};

export const notifyKeyboard = ({ translation }: IKeyboardContext): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('enableButton'), 'MENU/NOTIFY-ENABLE/0'),
        Markup.callbackButton(translation.t('disableButton'), 'MENU/NOTIFY-DISABLE/0')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('backButton'), 'MENU/USER/0')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine]);
};

export const userKeyboard = ({ translation }: IKeyboardContext): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('languageButton'), 'MENU/LANGUAGE/0'),
        Markup.callbackButton(translation.t('notifyButton'), 'MENU/NOTIFY/0'),
        Markup.callbackButton(translation.t('timeButton'), 'MENU/TIME/0')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('backButton'), 'MENU/MENU/0')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine ]);
};

export const menuKeyboard = ({ translation }: IKeyboardContext): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('userButton'), 'MENU/USER/0'),
        Markup.callbackButton(translation.t('countdownButton'), 'MENU/COUNTDOWN/0'),
        Markup.callbackButton(translation.t('guideButton'), 'MENU/GUIDE/0')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('watchlistButton'), 'MENU/WATCHLIST/0'),
        Markup.callbackButton(translation.t('readlistButton'), 'MENU/READLIST/0')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine ]);
};

// I  know that publishing is only to manga and airing to anime, but even so is they have their following data type just
// to not break the pattern.
export const readlistKeyboard = ({ translation }: IKeyboardContext): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('publishingButton'), 'MENU/MANGA-PUBLISHING/0'),
        Markup.callbackButton(translation.t('soonButton'), 'MENU/MANGA-SOON/0'),
        Markup.callbackButton(translation.t('completedButton'), 'MENU/MANGA-COMPLETED/0'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MENU/MANGA-CANCELLED/0')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/MANGA-MORE-INFO/0')
    ];
    const thirdLine = [
        Markup.callbackButton(translation.t('backButton'), 'MENU/MENU/0')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
};

export const publishingMangaKeyboard = ({ translation }: IKeyboardContext): InlineKeyboardMarkup => {
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
        Markup.callbackButton(translation.t('backButton'), 'MENU/MENU/0')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
};

export const soonMangaKeyboard = ({ translation }: IKeyboardContext): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MENU/MANGA-ALL/0'),
        Markup.callbackButton(translation.t('publishingButton'), 'MENU/MANGA-PUBLISHING/0'),
        Markup.callbackButton(translation.t('completedButton'), 'MENU/MANGA-COMPLETED/0'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MENU/MANGA-CANCELLED/0')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/MANGA-MORE-INFO/0')
    ];
    const thirdLine = [
        Markup.callbackButton(translation.t('backButton'), 'MENU/MENU/0')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
};

export const completedMangaKeyboard = ({ translation }: IKeyboardContext): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MENU/MANGA-ALL/0'),
        Markup.callbackButton(translation.t('soonButton'), 'MENU/MANGA-SOON/0'),
        Markup.callbackButton(translation.t('publishingButton'), 'MENU/MANGA-PUBLISHING/0'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MENU/MANGA-CANCELLED/0')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/MANGA-MORE-INFO/0')
    ];
    const thirdLine = [
        Markup.callbackButton(translation.t('backButton'), 'MENU/MENU/0')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
};

export const cancelledMangaKeyboard = ({ translation }: IKeyboardContext): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MENU/MANGA-ALL/0'),
        Markup.callbackButton(translation.t('publishingButton'), 'MENU/MANGA-PUBLISHING/0'),
        Markup.callbackButton(translation.t('soonButton'), 'MENU/MANGA-SOON/0'),
        Markup.callbackButton(translation.t('completedButton'), 'MENU/COMPLETED-MANGA/0')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/MANGA-MORE-INFO/0')
    ];
    const thirdLine = [
        Markup.callbackButton(translation.t('backButton'), 'MENU/MENU/0')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
};

export const watchlistKeyboard = ({ translation }: IKeyboardContext): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('airingButton'), 'MENU/ANIME-AIRING/0'),
        Markup.callbackButton(translation.t('soonButton'), 'MENU/ANIME-SOON/0'),
        Markup.callbackButton(translation.t('completedButton'), 'MENU/ANIME-COMPLETED/0'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MENU/ANIME-CANCELLED/0')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/ANIME-MORE-INFO/0')
    ];
    const thirdLine = [
        Markup.callbackButton(translation.t('backButton'), 'MENU/MENU/0')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
};

export const airingAnimeKeyboard = ({ translation }: IKeyboardContext): InlineKeyboardMarkup => {
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
        Markup.callbackButton(translation.t('backButton'), 'MENU/MENU/0')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
};

export const soonAnimeKeyboard = ({ translation }: IKeyboardContext): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MENU/ANIME-ALL/0'),
        Markup.callbackButton(translation.t('airingButton'), 'MENU/ANIME-AIRING/0'),
        Markup.callbackButton(translation.t('completedButton'), 'MENU/ANIME-COMPLETED/0'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MENU/ANIME-CANCELLED/0')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/ANIME-MORE-INFO/0')
    ];
    const thirdLine = [
        Markup.callbackButton(translation.t('backButton'), 'MENU/MENU/0')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
};

export const completedAnimeKeyboard = ({ translation }: IKeyboardContext): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MENU/ANIME-ALL/0'),
        Markup.callbackButton(translation.t('airingButton'), 'MENU/ANIME-AIRING/0'),
        Markup.callbackButton(translation.t('soonButton'), 'MENU/ANIME-SOON/0'),
        Markup.callbackButton(translation.t('cancelledButton'), 'MENU/ANIME-CANCELLED/0')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/ANIME-MORE-INFO/0')
    ];
    const thirdLine = [
        Markup.callbackButton(translation.t('backButton'), 'MENU/MENU/0')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
};

export const cancelledAnimeKeyboard = ({ translation }: IKeyboardContext): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('allButton'), 'MENU/ANIME-ALL/0'),
        Markup.callbackButton(translation.t('airingButton'), 'MENU/ANIME-AIRING/0'),
        Markup.callbackButton(translation.t('soonButton'), 'MENU/ANIME-SOON/0'),
        Markup.callbackButton(translation.t('completedButton'), 'MENU/ANIME-COMPLETED/0')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('moreInfoButton'), 'MENU/ANIME-MORE-INFO/0')
    ];
    const thirdLine = [
        Markup.callbackButton(translation.t('backButton'), 'MENU/MENU/0')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
};

export const languageKeyboard = ({ translation }: IKeyboardContext): InlineKeyboardMarkup => {
    const languages = [
        Markup.callbackButton(translation.t('enButton'), 'MENU/LANGUAGE-ENGLISH/0'),
        Markup.callbackButton(translation.t('ptButton'), 'MENU/LANGUAGE-PORTUGUESE/0'),
        Markup.callbackButton(translation.t('idButton'), 'MENU/LANGUAGE-INDONESIAN/0'),
        Markup.callbackButton(translation.t('nlButton'), 'MENU/LANGUAGE-DUTCH/0'),
        Markup.callbackButton(translation.t('esButton'), 'MENU/LANGUAGE-SPANISH/0'),
        Markup.callbackButton(translation.t('itButton'), 'MENU/LANGUAGE-DEUTSCH/0'),
        Markup.callbackButton(translation.t('deButton'), 'MENU/LANGUAGE-FRENCH/0'),
        Markup.callbackButton(translation.t('frButton'), 'MENU/LANGUAGE-RUSSIAN/0'),
        Markup.callbackButton(translation.t('ruButton'), 'MENU/LANGUAGE-FRENCH/0'),
        Markup.callbackButton(translation.t('zhButton'), 'MENU/LANGUAGE-CHINESE/0'),
        Markup.callbackButton(translation.t('jpButton'), 'MENU/LANGUAGE-JAPANESE/0')
    ];
    const back = [
        Markup.callbackButton(translation.t('backButton'), 'MENU/USER/0')
    ];

    return Markup.inlineKeyboard(languages.concat(back).map(line => [ line ]));
};
