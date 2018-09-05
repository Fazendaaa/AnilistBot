import { Extra } from 'telegraf';
import { I18n } from 'telegraf-i18n';
import { askLocationKeyboard, locationKeyboard, sendLocationKeyboard } from '../keyboard/location';

export const sendLocationExtra = (translation: I18n) => Extra.markdown().markup(sendLocationKeyboard(translation));

export const locationExtra = (translation: I18n) => Extra.markdown().markup(locationKeyboard(translation));

export const askLocationExtra = (translation: I18n) => Extra.markdown().markup(askLocationKeyboard(translation));
