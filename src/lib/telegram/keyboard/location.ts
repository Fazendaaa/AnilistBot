import { Markup } from 'telegraf';
import { I18n } from 'telegraf-i18n';
import { InlineKeyboardMarkup } from 'telegram-typings';

export const sendLocationKeyboard = (translation: I18n) => Markup.resize().keyboard([
    Markup.locationRequestButton(translation.t('dataLocationButton')),
    translation.t('menu')
]);

export const removeLocationKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    return Markup.inlineKeyboard([
        Markup.callbackButton(translation.t('yesButton'), 'LOCATION/REMOVE/YES'),
        Markup.callbackButton(translation.t('noButton'), 'LOCATION/REMOVE/NO')
    ]);
};

export const confirmLocationKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    return Markup.inlineKeyboard([
        Markup.callbackButton(translation.t('yesButton'), 'LOCATION/CONFIRM/YES'),
        Markup.callbackButton(translation.t('noButton'), 'LOCATION/CONFIRM/NO')
    ]);
};

export const locationKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    const firstLine = [
        Markup.callbackButton(translation.t('sendLocationButton'), 'LOCATION/SEND'),
        Markup.callbackButton(translation.t('askLocationButton'), 'LOCATION/ASK')
    ];
    const secondLine = [
        Markup.callbackButton(translation.t('removeLocationButton'), 'LOCATION/REMOVE')
    ];
    const thirdLine = [
        Markup.callbackButton('<', 'USER/ALL')
    ];

    return Markup.inlineKeyboard([ firstLine, secondLine, thirdLine ]);
};
