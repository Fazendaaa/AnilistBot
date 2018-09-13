import { Markup } from 'telegraf';
import { I18n } from 'telegraf-i18n';
import { InlineKeyboardMarkup } from 'telegram-typings';

export const dailyNotificationKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    return Markup.inlineKeyboard([
        Markup.callbackButton(translation.t('yesButton'), 'LOCATION/REMOVE/YES'),
        Markup.callbackButton(translation.t('noButton'), 'LOCATION/REMOVE/NO')
    ]);
};
