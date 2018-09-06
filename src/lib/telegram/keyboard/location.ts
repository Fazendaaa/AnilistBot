import { Markup } from 'telegraf';
import { I18n } from 'telegraf-i18n';
import { InlineKeyboardMarkup } from 'telegram-typings';

export const sendLocationKeyboard = (translation: I18n) => Markup.resize().keyboard([
    Markup.locationRequestButton(translation.t('dataLocationButton')),
    translation.t('menu')
]);

export const locationKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('sendLocationButton'), 'MENU/LOCATION-SEND'),
        Markup.callbackButton(translation.t('askLocationButton'), 'MENU/LOCATION-ASK')
    ];
    const secondLine = [
        Markup.callbackButton('<', 'MENU/USER')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine ]);
};

export const confirmLocationKeyboard = (translation: I18n): InlineKeyboardMarkup => Markup.inlineKeyboard([
    Markup.callbackButton(translation.t('yesButton'), 'MENU/LOCATION-SEND'),
    Markup.callbackButton(translation.t('noButton'), 'MENU/LOCATION-SEND')
]);
