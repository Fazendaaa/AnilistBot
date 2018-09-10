import { Markup } from 'telegraf';
import { IPeriodContext, Period } from 'telegraf-bot-typings';
import { I18n } from 'telegraf-i18n';
import { InlineKeyboardMarkup } from 'telegram-typings';

const calculatePeriod = ({ hour, period }: IPeriodContext): number => ('AM' === period) ? hour : hour + 12;

export const aboutKeyboard = (): InlineKeyboardMarkup => Markup.inlineKeyboard([ Markup.callbackButton('<', 'GUIDE') ]);

export const timeBackKeyboard = (): InlineKeyboardMarkup => Markup.inlineKeyboard([ Markup.callbackButton('<', 'USER/ALL') ]);

export const countdownKeyboard = (): InlineKeyboardMarkup => Markup.inlineKeyboard([ Markup.callbackButton('<', 'MENU') ]);

export const notifyBackKeyboard = (): InlineKeyboardMarkup => Markup.inlineKeyboard([ Markup.callbackButton('<', 'USER/ALL') ]);

export const counterBackKeyboard = (): InlineKeyboardMarkup => Markup.inlineKeyboard([ Markup.callbackButton('<', 'MENU') ]);

export const languageBackKeyboard = (): InlineKeyboardMarkup => Markup.inlineKeyboard([ Markup.callbackButton('<', 'USER/ALL') ]);

export const startKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    return Markup.resize().keyboard([ translation.t('menu'), translation.t('help') ]);
};

export const timeKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('timePeriodButton'), 'USER/PERIOD')
    ];
    const secondLine = [
        Markup.callbackButton('<', 'USER/ALL')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine ]);
};

export const guideKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('aboutButton'), 'ABOUT')
    ];
    const secondLine = [
        Markup.callbackButton('<', 'MENU')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine ]);
};

export const notifyKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('enableButton'), 'USER/NOTIFY/ENABLE'),
        Markup.callbackButton(translation.t('disableButton'), 'USER/NOTIFY/DISABLE')
    ];
    const secondLine = [
        Markup.callbackButton('<', 'USER/ALL')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine ]);
};

export const timePeriodKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('timePeriodMorningButton'), 'USER/AM'),
        Markup.callbackButton(translation.t('timePeriodAfternoonButton'), 'USER/PM')
    ];
    const secondLine = [
        Markup.callbackButton('<', 'USER/TIME')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine ]);
};

export const userKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('languageButton'), 'USER/LANGUAGE'),
        Markup.callbackButton(translation.t('notifyButton'), 'USER/NOTIFY')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('timeButton'), 'USER/TIME'),
        Markup.callbackButton(translation.t('locationButton'), 'LOCATION')
    ];
    const thirdLine = [
        Markup.callbackButton('<', 'MENU')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
};

export const menuKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('userButton'), 'USER/ALL'),
        Markup.callbackButton(translation.t('countdownButton'), 'COUNTDOWN'),
        Markup.callbackButton(translation.t('guideButton'), 'GUIDE')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('watchlistButton'), 'MEDIA/WATCH/ALL'),
        Markup.callbackButton(translation.t('readlistButton'), 'MEDIA/READ/ALL')
    ];
    const thirdLine = [
        Markup.callbackButton(translation.t('counterButton'), 'COUNTER')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
};

export const languageKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const languages = [
        Markup.callbackButton(translation.t('arButton'), 'USER/LANGUAGE/ARABIC'),
        Markup.callbackButton(translation.t('zhButton'), 'USER/LANGUAGE/CHINESE'),
        Markup.callbackButton(translation.t('deButton'), 'USER/LANGUAGE/DEUTSCH'),
        Markup.callbackButton(translation.t('nlButton'), 'USER/LANGUAGE/DUTCH'),
        Markup.callbackButton(translation.t('enButton'), 'USER/LANGUAGE/ENGLISH'),
        Markup.callbackButton(translation.t('deButton'), 'USER/LANGUAGE/GERMAN'),
        Markup.callbackButton(translation.t('ruButton'), 'USER/LANGUAGE/RUSSIAN'),
        Markup.callbackButton(translation.t('faButton'), 'USER/LANGUAGE/FARSI'),
        Markup.callbackButton(translation.t('frButton'), 'USER/LANGUAGE/FRENCH'),
        Markup.callbackButton(translation.t('idButton'), 'USER/LANGUAGE/INDONESIAN'),
        Markup.callbackButton(translation.t('jpButton'), 'USER/LANGUAGE/JAPANESE'),
        Markup.callbackButton(translation.t('ptButton'), 'USER/LANGUAGE/PORTUGUESE'),
        Markup.callbackButton(translation.t('esButton'), 'USER/LANGUAGE/SPANISH')
    ];
    const back = [
        Markup.callbackButton('<', 'USER/ALL')
    ];

    return Markup.inlineKeyboard(languages.concat(back).map(line => [ line ]));
};

export const timeHourKeyboard = (period: Period): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton('1h', `USER/HOUR/${calculatePeriod({ hour: 1, period })}`),
        Markup.callbackButton('2h', `USER/HOUR/${calculatePeriod({ hour: 2, period })}`),
        Markup.callbackButton('3h', `USER/HOUR/${calculatePeriod({ hour: 3, period })}`)
    ];
    const secondLine = [
        Markup.callbackButton('4h', `USER/HOUR/${calculatePeriod({ hour: 4, period })}`),
        Markup.callbackButton('5h', `USER/HOUR/${calculatePeriod({ hour: 5, period })}`),
        Markup.callbackButton('6h', `USER/HOUR/${calculatePeriod({ hour: 6, period })}`)
    ];
    const thirdLine = [
        Markup.callbackButton('7h', `USER/HOUR/${calculatePeriod({ hour: 7, period })}`),
        Markup.callbackButton('8h', `USER/HOUR/${calculatePeriod({ hour: 8, period })}`),
        Markup.callbackButton('9h', `USER/HOUR/${calculatePeriod({ hour: 9, period })}`)
    ];
    const fourthLine = [
        Markup.callbackButton('10h', `USER/HOUR/${calculatePeriod({ hour: 10, period })}`),
        Markup.callbackButton('11h', `USER/HOUR/${calculatePeriod({ hour: 11, period })}`),
        Markup.callbackButton('12h', `USER/HOUR/${calculatePeriod({ hour: 12, period })}`)
    ];
    const fifthLine = [
        Markup.callbackButton('<', 'USER/PERIOD')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine, fourthLine, fifthLine]);
};
