import { Markup } from 'telegraf';
import { InlineKeyboardMarkup } from 'telegram-typings';
import { IDailyNotificationKeyboard } from '.';

export const dailyNotificationKeyboard = ({ language, translation }: IDailyNotificationKeyboard): InlineKeyboardMarkup => {
    return Markup.inlineKeyboard([
        Markup.callbackButton(translation.t(language, 'sourceButton'), 'SOURCE')
    ]);
};
