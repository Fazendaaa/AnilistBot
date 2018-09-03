import { Markup } from 'telegraf';
import { I18n } from 'telegraf-i18n';
import { InlineKeyboardMarkup } from 'telegram-typings';
import { IPeriodContext, Period } from '.';

const calculatePeriod = ({ hour, period }: IPeriodContext): number => ('AM' === period) ? hour : hour + 12;

export const aboutKeyboard = (): InlineKeyboardMarkup => {
    return Markup.inlineKeyboard([
        Markup.callbackButton('<', 'MENU/GUIDE/0')
    ]);
};

export const timeBackKeyboard = (): InlineKeyboardMarkup => {
    return Markup.inlineKeyboard([
        Markup.callbackButton('<', 'MENU/USER/0')
    ]);
};

export const countdownKeyboard = (): InlineKeyboardMarkup => {
    return Markup.inlineKeyboard([
        Markup.callbackButton('<', 'MENU/MENU/0')
    ]);
};

export const notifyBackKeyboard = (): InlineKeyboardMarkup => {
    return Markup.inlineKeyboard([
        Markup.callbackButton('<', 'MENU/USER/0')
    ]);
};

export const counterBackKeyboard = (): InlineKeyboardMarkup => {
    return Markup.inlineKeyboard([
        Markup.callbackButton('<', 'MENU/MENU/0')
    ]);
};

export const languageBackKeyboard = (): InlineKeyboardMarkup => {
    return Markup.inlineKeyboard([
        Markup.callbackButton('<', 'MENU/USER/0')
    ]);
};

export const timeKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('timePeriodButton'), 'MENU/TIME-PERIOD/0')
    ];
    const secondLine = [
        Markup.callbackButton('<', 'MENU/USER/0')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine ]);
};

export const guideKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('aboutButton'), 'MENU/ABOUT/0')
    ];
    const secondLine = [
        Markup.callbackButton('<', 'MENU/MENU/0')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine ]);
};

export const notifyKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('enableButton'), 'MENU/NOTIFY-ENABLE/0'),
        Markup.callbackButton(translation.t('disableButton'), 'MENU/NOTIFY-DISABLE/0')
    ];
    const secondLine = [
        Markup.callbackButton('<', 'MENU/USER/0')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine ]);
};

export const locationKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('locationButton'), 'MENU/LOCATION/0')
    ];
    const secondLine = [
        Markup.callbackButton('<', 'MENU/USER/0')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine ]);
};

export const timePeriodKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('timePeriodMorningButton'), 'MENU/TIME-PERIOD-AM/0'),
        Markup.callbackButton(translation.t('timePeriodAfternoonButton'), 'MENU/TIME-PERIOD-PM/0')
    ];
    const secondLine = [
        Markup.callbackButton('<', 'MENU/TIME/0')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine ]);
};

export const userKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('languageButton'), 'MENU/LANGUAGE/0'),
        Markup.callbackButton(translation.t('notifyButton'), 'MENU/NOTIFY/0')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('timeButton'), 'MENU/TIME/0'),
        Markup.callbackButton(translation.t('locationButton'), 'MENU/LOCATION/0')
    ];
    const thirdLine = [
        Markup.callbackButton('<', 'MENU/MENU/0')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
};

export const menuKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('userButton'), 'MENU/USER/0'),
        Markup.callbackButton(translation.t('countdownButton'), 'MENU/COUNTDOWN/0'),
        Markup.callbackButton(translation.t('guideButton'), 'MENU/GUIDE/0')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('watchlistButton'), 'MENU/ANIME-LIST/0'),
        Markup.callbackButton(translation.t('readlistButton'), 'MENU/MANGA-LIST/0')
    ];
    const thirdLine = [
        Markup.callbackButton(translation.t('counterButton'), 'MENU/COUNTER/0')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
};

export const readlistKeyboard = (translation: I18n): InlineKeyboardMarkup => {
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
        Markup.callbackButton('<', 'MENU/MENU/0')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
};

export const soonMangaKeyboard = (translation: I18n): InlineKeyboardMarkup => {
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
        Markup.callbackButton('<', 'MENU/MENU/0')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
};

export const watchlistKeyboard = (translation: I18n): InlineKeyboardMarkup => {
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
        Markup.callbackButton('<', 'MENU/MENU/0')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
};

export const soonAnimeKeyboard = (translation: I18n): InlineKeyboardMarkup => {
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
        Markup.callbackButton('<', 'MENU/MENU/0')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
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

    return Markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
};

export const completedMangaKeyboard = (translation: I18n): InlineKeyboardMarkup => {
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
        Markup.callbackButton('<', 'MENU/MENU/0')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
};

export const cancelledMangaKeyboard = (translation: I18n): InlineKeyboardMarkup => {
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
        Markup.callbackButton('<', 'MENU/MENU/0')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
};

export const completedAnimeKeyboard = (translation: I18n): InlineKeyboardMarkup => {
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
        Markup.callbackButton('<', 'MENU/MENU/0')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
};

export const cancelledAnimeKeyboard = (translation: I18n): InlineKeyboardMarkup => {
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
        Markup.callbackButton('<', 'MENU/MENU/0')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
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

    return Markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
};

export const languageKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const languages = [
        Markup.callbackButton(translation.t('arButton'), 'MENU/LANGUAGE-ARABIC/0'),
        Markup.callbackButton(translation.t('zhButton'), 'MENU/LANGUAGE-CHINESE/0'),
        Markup.callbackButton(translation.t('nlButton'), 'MENU/LANGUAGE-DUTCH/0'),
        Markup.callbackButton(translation.t('enButton'), 'MENU/LANGUAGE-ENGLISH/0'),
        Markup.callbackButton(translation.t('frButton'), 'MENU/LANGUAGE-RUSSIAN/0'),
        Markup.callbackButton(translation.t('deButton'), 'MENU/LANGUAGE-FRENCH/0'),
        Markup.callbackButton(translation.t('idButton'), 'MENU/LANGUAGE-INDONESIAN/0'),
        Markup.callbackButton(translation.t('itButton'), 'MENU/LANGUAGE-DEUTSCH/0'),
        Markup.callbackButton(translation.t('jpButton'), 'MENU/LANGUAGE-JAPANESE/0'),
        Markup.callbackButton(translation.t('ptButton'), 'MENU/LANGUAGE-PORTUGUESE/0'),
        Markup.callbackButton(translation.t('ruButton'), 'MENU/LANGUAGE-FRENCH/0'),
        Markup.callbackButton(translation.t('esButton'), 'MENU/LANGUAGE-SPANISH/0')
    ];
    const back = [
        Markup.callbackButton('<', 'MENU/USER/0')
    ];

    return Markup.inlineKeyboard(languages.concat(back).map(line => [ line ]));
};

export const timeHourKeyboard = (period: Period): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton('1h', `MENU/TIME-HOUR-VALUE/${calculatePeriod({ hour: 1, period })}`),
        Markup.callbackButton('2h', `MENU/TIME-HOUR-VALUE/${calculatePeriod({ hour: 2, period })}`),
        Markup.callbackButton('3h', `MENU/TIME-HOUR-VALUE/${calculatePeriod({ hour: 3, period })}`)
    ];
    const secondLine = [
        Markup.callbackButton('4h', `MENU/TIME-HOUR-VALUE/${calculatePeriod({ hour: 4, period })}`),
        Markup.callbackButton('5h', `MENU/TIME-HOUR-VALUE/${calculatePeriod({ hour: 5, period })}`),
        Markup.callbackButton('6h', `MENU/TIME-HOUR-VALUE/${calculatePeriod({ hour: 6, period })}`)
    ];
    const thirdLine = [
        Markup.callbackButton('7h', `MENU/TIME-HOUR-VALUE/${calculatePeriod({ hour: 7, period })}`),
        Markup.callbackButton('8h', `MENU/TIME-HOUR-VALUE/${calculatePeriod({ hour: 8, period })}`),
        Markup.callbackButton('9h', `MENU/TIME-HOUR-VALUE/${calculatePeriod({ hour: 9, period })}`)
    ];
    const fourthLine = [
        Markup.callbackButton('10h', `MENU/TIME-HOUR-VALUE/${calculatePeriod({ hour: 10, period })}`),
        Markup.callbackButton('11h', `MENU/TIME-HOUR-VALUE/${calculatePeriod({ hour: 11, period })}`),
        Markup.callbackButton('12h', `MENU/TIME-HOUR-VALUE/${calculatePeriod({ hour: 12, period })}`)
    ];
    const fifthLine = [
        Markup.callbackButton('<', 'MENU/TIME-PERIOD/0')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine, fourthLine, fifthLine]);
};
