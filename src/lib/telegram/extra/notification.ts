// tslint:disable: no-submodule-imports
import { Extra, Markup } from 'telegraf';
import { ExtraEditMessage } from 'telegraf/typings/telegram-types';
import { IDailyNotificationExtra } from '.';
import { dailyNotificationKeyboard } from '../keyboard/notifications';

export const dailyNotificationExtra = (data: IDailyNotificationExtra): ExtraEditMessage => {
    return Extra.markdown().markup(dailyNotificationKeyboard(data));
};
