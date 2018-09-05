import { aboutKeyboard, countdownKeyboard, counterBackKeyboard, guideKeyboard, languageBackKeyboard, languageKeyboard, menuKeyboard,
notifyBackKeyboard, notifyKeyboard, startKeyboard, timeBackKeyboard, timeHourKeyboard, timeKeyboard, timePeriodKeyboard, userKeyboard
} from 'keyboard';
import { Extra } from 'telegraf';
import { Period } from 'telegraf-bot-typings';
import { I18n } from 'telegraf-i18n';

export const aboutExtra = () => Extra.markdown().markup(aboutKeyboard());

export const timeBackExtra = () => Extra.markdown().markup(timeBackKeyboard());

export const countdownExtra = () => Extra.markdown().markup(countdownKeyboard());

export const notifyBackExtra = () => Extra.markdown().markup(notifyBackKeyboard());

export const counterBackExtra = () => Extra.markdown().markup(counterBackKeyboard());

export const languageBackExtra = () => Extra.markdown().markup(languageBackKeyboard());

export const menuExtra = (translation: I18n) => Extra.markdown().markup(menuKeyboard(translation));

export const timeHourExtra = (period: Period) => Extra.markdown().markup(timeHourKeyboard(period));

export const userExtra = (translation: I18n) => Extra.markdown().markup(userKeyboard(translation));

export const timeExtra = (translation: I18n) => Extra.markdown().markup(timeKeyboard(translation));

export const startExtra = (translation: I18n) => Extra.markdown().markup(startKeyboard(translation));

export const guideExtra = (translation: I18n) => Extra.markdown().markup(guideKeyboard(translation));

export const notifyExtra = (translation: I18n) => Extra.markdown().markup(notifyKeyboard(translation));

export const languageExtra = (translation: I18n) => Extra.markdown().markup(languageKeyboard(translation));

export const timePeriodExtra = (translation: I18n) => Extra.markdown().markup(timePeriodKeyboard(translation));
