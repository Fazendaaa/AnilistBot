import { Markup } from 'telegraf';
import { I18n } from 'telegraf-i18n';
import { InlineKeyboardMarkup } from 'telegram-typings';

export const sendLocationKeyboard = (translation: I18n): InlineKeyboardMarkup => Markup.resize().keyboard([
    Markup.locationRequestButton(translation.t('dataLocationButton')),
    translation.t('menu')
]);

export const locationKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('sendLocationButton'), 'MENU/LOCATION-SEND/0'),
        Markup.callbackButton(translation.t('askLocationButton'), 'MENU/LOCATION-ASK/0')
    ];
    const secondLine = [
        Markup.callbackButton('<', 'MENU/USER/0')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine ]);
};

export const askLocationKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('sendLocationButton'), 'MENU/LOCATION-SEND/0'),
        Markup.callbackButton(translation.t('askLocationButton'), 'MENU/LOCATION-ASK/0')
    ];
    const secondLine = [
        Markup.callbackButton('<', 'MENU/USER/0')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine ]);
};
