import { Markup } from 'telegraf';
import { IPeriodContext, Period } from 'telegraf-bot-typings';
import { I18n } from 'telegraf-i18n';
import { InlineKeyboardMarkup } from 'telegram-typings';

const calculatePeriod = ({ hour, period }: IPeriodContext): number => ('AM' === period) ? hour : hour + 12;

export const aboutKeyboard = (): InlineKeyboardMarkup => Markup.inlineKeyboard([ Markup.callbackButton('<', 'MENU/GUIDE') ]);

export const timeBackKeyboard = (): InlineKeyboardMarkup => Markup.inlineKeyboard([ Markup.callbackButton('<', 'MENU/USER') ]);

export const countdownKeyboard = (): InlineKeyboardMarkup => Markup.inlineKeyboard([ Markup.callbackButton('<', 'MENU/MENU') ]);

export const notifyBackKeyboard = (): InlineKeyboardMarkup => Markup.inlineKeyboard([ Markup.callbackButton('<', 'MENU/USER') ]);

export const counterBackKeyboard = (): InlineKeyboardMarkup => Markup.inlineKeyboard([ Markup.callbackButton('<', 'MENU/MENU') ]);

export const languageBackKeyboard = (): InlineKeyboardMarkup => Markup.inlineKeyboard([ Markup.callbackButton('<', 'MENU/USER') ]);

export const startKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    return Markup.resize().keyboard([ translation.t('menu'), translation.t('help') ]);
};

export const timeKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('timePeriodButton'), 'MENU/TIME-PERIOD')
    ];
    const secondLine = [
        Markup.callbackButton('<', 'MENU/USER')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine ]);
};

export const guideKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('aboutButton'), 'MENU/ABOUT')
    ];
    const secondLine = [
        Markup.callbackButton('<', 'MENU/MENU')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine ]);
};

export const notifyKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('enableButton'), 'MENU/NOTIFY-ENABLE'),
        Markup.callbackButton(translation.t('disableButton'), 'MENU/NOTIFY-DISABLE')
    ];
    const secondLine = [
        Markup.callbackButton('<', 'MENU/USER')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine ]);
};

export const timePeriodKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('timePeriodMorningButton'), 'MENU/TIME-PERIOD-AM'),
        Markup.callbackButton(translation.t('timePeriodAfternoonButton'), 'MENU/TIME-PERIOD-PM')
    ];
    const secondLine = [
        Markup.callbackButton('<', 'MENU/TIME')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine ]);
};

export const userKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('languageButton'), 'MENU/LANGUAGE'),
        Markup.callbackButton(translation.t('notifyButton'), 'MENU/NOTIFY')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('timeButton'), 'MENU/TIME'),
        Markup.callbackButton(translation.t('locationButton'), 'MENU/LOCATION')
    ];
    const thirdLine = [
        Markup.callbackButton('<', 'MENU/MENU')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
};

export const menuKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('userButton'), 'MENU/USER'),
        Markup.callbackButton(translation.t('countdownButton'), 'MENU/COUNTDOWN'),
        Markup.callbackButton(translation.t('guideButton'), 'MENU/GUIDE')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('watchlistButton'), 'MENU/ANIME-LIST'),
        Markup.callbackButton(translation.t('readlistButton'), 'MENU/MANGA-LIST')
    ];
    const thirdLine = [
        Markup.callbackButton(translation.t('counterButton'), 'MENU/COUNTER')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
};

export const languageKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const languages = [
        Markup.callbackButton(translation.t('arButton'), 'MENU/LANGUAGE-ARABIC'),
        Markup.callbackButton(translation.t('zhButton'), 'MENU/LANGUAGE-CHINESE'),
        Markup.callbackButton(translation.t('nlButton'), 'MENU/LANGUAGE-DUTCH'),
        Markup.callbackButton(translation.t('enButton'), 'MENU/LANGUAGE-ENGLISH'),
        Markup.callbackButton(translation.t('frButton'), 'MENU/LANGUAGE-RUSSIAN'),
        Markup.callbackButton(translation.t('deButton'), 'MENU/LANGUAGE-FRENCH'),
        Markup.callbackButton(translation.t('idButton'), 'MENU/LANGUAGE-INDONESIAN'),
        Markup.callbackButton(translation.t('itButton'), 'MENU/LANGUAGE-DEUTSCH'),
        Markup.callbackButton(translation.t('jpButton'), 'MENU/LANGUAGE-JAPANESE'),
        Markup.callbackButton(translation.t('ptButton'), 'MENU/LANGUAGE-PORTUGUESE'),
        Markup.callbackButton(translation.t('ruButton'), 'MENU/LANGUAGE-FRENCH'),
        Markup.callbackButton(translation.t('esButton'), 'MENU/LANGUAGE-SPANISH')
    ];
    const back = [
        Markup.callbackButton('<', 'MENU/USER')
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
        Markup.callbackButton('<', 'MENU/TIME-PERIOD')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine, fourthLine, fifthLine]);
};
