import { Markup } from 'telegraf';
import { IPeriodContext, Period } from 'telegraf-bot-typings';
import { I18n } from 'telegraf-i18n';
import { InlineKeyboardMarkup } from 'telegram-typings';

const calculatePeriod = ({ hour, period }: IPeriodContext): number => ('AM' === period) ? hour : hour + 12;

export const aboutKeyboard = (): InlineKeyboardMarkup => Markup.inlineKeyboard([ Markup.callbackButton('<', 'GUIDE') ]);

export const timeBackKeyboard = (): InlineKeyboardMarkup => Markup.inlineKeyboard([ Markup.callbackButton('<', 'USER') ]);

export const countdownKeyboard = (): InlineKeyboardMarkup => Markup.inlineKeyboard([ Markup.callbackButton('<', 'MENU') ]);

export const notifyBackKeyboard = (): InlineKeyboardMarkup => Markup.inlineKeyboard([ Markup.callbackButton('<', 'USER') ]);

export const counterBackKeyboard = (): InlineKeyboardMarkup => Markup.inlineKeyboard([ Markup.callbackButton('<', 'MENU') ]);

export const languageBackKeyboard = (): InlineKeyboardMarkup => Markup.inlineKeyboard([ Markup.callbackButton('<', 'USER') ]);

export const startKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    return Markup.resize().keyboard([ translation.t('menu'), translation.t('help') ]);
};

export const timeKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('timePeriodButton'), 'TIME-PERIOD')
    ];
    const secondLine = [
        Markup.callbackButton('<', 'USER')
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
        Markup.callbackButton(translation.t('enableButton'), 'NOTIFY-ENABLE'),
        Markup.callbackButton(translation.t('disableButton'), 'NOTIFY-DISABLE')
    ];
    const secondLine = [
        Markup.callbackButton('<', 'USER')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine ]);
};

export const timePeriodKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('timePeriodMorningButton'), 'TIME-PERIOD-AM'),
        Markup.callbackButton(translation.t('timePeriodAfternoonButton'), 'TIME-PERIOD-PM')
    ];
    const secondLine = [
        Markup.callbackButton('<', 'TIME')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine ]);
};

export const userKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('languageButton'), 'LANGUAGE'),
        Markup.callbackButton(translation.t('notifyButton'), 'NOTIFY')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('timeButton'), 'TIME'),
        Markup.callbackButton(translation.t('locationButton'), 'LOCATION')
    ];
    const thirdLine = [
        Markup.callbackButton('<', 'MENU')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
};

export const menuKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('userButton'), 'USER'),
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
        Markup.callbackButton(translation.t('arButton'), 'ARABIC'),
        Markup.callbackButton(translation.t('zhButton'), 'CHINESE'),
        Markup.callbackButton(translation.t('deButton'), 'DEUTSCH'),
        Markup.callbackButton(translation.t('nlButton'), 'DUTCH'),
        Markup.callbackButton(translation.t('enButton'), 'ENGLISH'),
        Markup.callbackButton(translation.t('deButton'), 'GERMAN'),
        Markup.callbackButton(translation.t('ruButton'), 'RUSSIAN'),
        Markup.callbackButton(translation.t('faButton'), 'FARSI'),
        Markup.callbackButton(translation.t('frButton'), 'FRENCH'),
        Markup.callbackButton(translation.t('idButton'), 'INDONESIAN'),
        Markup.callbackButton(translation.t('jpButton'), 'JAPANESE'),
        Markup.callbackButton(translation.t('ptButton'), 'PORTUGUESE'),
        Markup.callbackButton(translation.t('esButton'), 'SPANISH')
    ];
    const back = [
        Markup.callbackButton('<', 'USER')
    ];

    return Markup.inlineKeyboard(languages.concat(back).map(line => [ line ]));
};

export const timeHourKeyboard = (period: Period): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton('1h', `TIME-HOUR-VALUE/${calculatePeriod({ hour: 1, period })}`),
        Markup.callbackButton('2h', `TIME-HOUR-VALUE/${calculatePeriod({ hour: 2, period })}`),
        Markup.callbackButton('3h', `TIME-HOUR-VALUE/${calculatePeriod({ hour: 3, period })}`)
    ];
    const secondLine = [
        Markup.callbackButton('4h', `TIME-HOUR-VALUE/${calculatePeriod({ hour: 4, period })}`),
        Markup.callbackButton('5h', `TIME-HOUR-VALUE/${calculatePeriod({ hour: 5, period })}`),
        Markup.callbackButton('6h', `TIME-HOUR-VALUE/${calculatePeriod({ hour: 6, period })}`)
    ];
    const thirdLine = [
        Markup.callbackButton('7h', `TIME-HOUR-VALUE/${calculatePeriod({ hour: 7, period })}`),
        Markup.callbackButton('8h', `TIME-HOUR-VALUE/${calculatePeriod({ hour: 8, period })}`),
        Markup.callbackButton('9h', `TIME-HOUR-VALUE/${calculatePeriod({ hour: 9, period })}`)
    ];
    const fourthLine = [
        Markup.callbackButton('10h', `TIME-HOUR-VALUE/${calculatePeriod({ hour: 10, period })}`),
        Markup.callbackButton('11h', `TIME-HOUR-VALUE/${calculatePeriod({ hour: 11, period })}`),
        Markup.callbackButton('12h', `TIME-HOUR-VALUE/${calculatePeriod({ hour: 12, period })}`)
    ];
    const fifthLine = [
        Markup.callbackButton('<', 'TIME-PERIOD')
    ];

    return Markup.inlineKeyboard([firstLine, secondLine, thirdLine, fourthLine, fifthLine]);
};
