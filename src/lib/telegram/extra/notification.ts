// tslint:disable: no-submodule-imports
import { Extra, Markup } from 'telegraf';
import { I18n } from 'telegraf-i18n';
import { ExtraEditMessage } from 'telegraf/typings/telegram-types';
import { dailyNotificationKeyboard } from '../keyboard/notifications';

export const dailyNotificationExtra = (translation: I18n): ExtraEditMessage => {
    return Extra.markdown().markup(dailyNotificationKeyboard(translation));
};
