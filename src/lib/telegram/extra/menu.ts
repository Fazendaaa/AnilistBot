// tslint:disable: no-submodule-imports
import { aboutKeyboard, countdownKeyboard, counterBackKeyboard, guideKeyboard, languageBackKeyboard, languageKeyboard, menuKeyboard,
notifyBackKeyboard, notifyKeyboard, startKeyboard, timeBackKeyboard, timeHourKeyboard, timeKeyboard, timePeriodKeyboard, userKeyboard
} from 'keyboard';
import { Extra } from 'telegraf';
import { LanguageRequest, NotifyRequests, Period, TimeRequest, UserRequest } from 'telegraf-bot-typings';
import { I18n } from 'telegraf-i18n';
import { ExtraEditMessage } from 'telegraf/typings/telegram-types';
import { IHandleLanguageExtra, IHandleMediaExtra, IHandleNotifyExtra, IHandleTimeExtra, IHandleUserExtra } from '.';
import { animeExtra, mangaExtra } from './media';

const timeBackExtra = (): ExtraEditMessage => Extra.markdown().markup(timeBackKeyboard());

const notifyBackExtra = (): ExtraEditMessage => Extra.markdown().markup(notifyBackKeyboard());

const languageBackExtra = (): ExtraEditMessage => Extra.markdown().markup(languageBackKeyboard());

const timeHourExtra = (period: Period): ExtraEditMessage => Extra.markdown().markup(timeHourKeyboard(period));

const timeExtra = (translation: I18n): ExtraEditMessage => Extra.markdown().markup(timeKeyboard(translation));

const notifyExtra = (translation: I18n): ExtraEditMessage => Extra.markdown().markup(notifyKeyboard(translation));

const languageExtra = (translation: I18n): ExtraEditMessage => Extra.markdown().markup(languageKeyboard(translation));

const timePeriodExtra = (translation: I18n): ExtraEditMessage => Extra.markdown().markup(timePeriodKeyboard(translation));

const handleLanguageExtra = ({ value, translation }: IHandleLanguageExtra): ExtraEditMessage => {
    return (null === value) ? languageExtra(translation) : languageBackExtra();
};

const handleNotifyExtra = ({ value, translation }: IHandleNotifyExtra): ExtraEditMessage => {
    return (null === value) ? notifyExtra(translation) : notifyBackExtra();
};

const handleTimeExtra = ({ value, request, translation }: IHandleTimeExtra): ExtraEditMessage => {
    if ('TIME' === <UserRequest> request) {
        return timeExtra(translation);
    } if ('PERIOD' === <TimeRequest> request) {
        return timePeriodExtra(translation);
    } if ('AM' === <TimeRequest> request || 'PM' === <TimeRequest> request) {
        return timeHourExtra(<Period> request);
    }

    return timeBackExtra();
};

export const aboutExtra = (): ExtraEditMessage => Extra.markdown().markup(aboutKeyboard());

export const countdownExtra = (): ExtraEditMessage => Extra.markdown().markup(countdownKeyboard());

export const counterExtra = (): ExtraEditMessage => Extra.markdown().markup(counterBackKeyboard());

export const menuExtra = (translation: I18n): ExtraEditMessage => Extra.markdown().markup(menuKeyboard(translation));

export const userExtra = (translation: I18n): ExtraEditMessage => Extra.markdown().markup(userKeyboard(translation));

export const startExtra = (translation: I18n): ExtraEditMessage => Extra.markdown().markup(startKeyboard(translation));

export const guideExtra = (translation: I18n): ExtraEditMessage => Extra.markdown().markup(guideKeyboard(translation));

export const handleMediaExtra = async ({ user, list, filter, translation }: IHandleMediaExtra): Promise<ExtraEditMessage> => {
    return ('WATCH' === list) ? mangaExtra({ user, filter, translation }) : animeExtra({ user, filter, translation });
};

export const handleUserExtra = ({ value, request, translation }: IHandleUserExtra): ExtraEditMessage => {
    if ('ALL' === <UserRequest> request) {
        return userExtra(translation);
    } if ('NOTIFY' === <UserRequest> request) {
        return handleNotifyExtra({ value: <NotifyRequests> value, translation });
    } if ('LANGUAGE' === <UserRequest> request) {
        return handleLanguageExtra({ value: <LanguageRequest> value, translation });
    }

    return handleTimeExtra({ value: <TimeRequest> value, request, translation });
};
