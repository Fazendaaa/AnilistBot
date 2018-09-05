import { Extra, Markup } from 'telegraf';
import { I18n } from 'telegraf-i18n';
import { confirmLocationKeyboard, locationKeyboard, sendLocationKeyboard } from '../keyboard/location';

// Fix this later to use only Extra.
export const askLocationExtra = () => Markup.forceReply().extra();

export const locationExtra = (translation: I18n) => Extra.markdown().markup(locationKeyboard(translation));

export const sendLocationExtra = (translation: I18n) => Extra.markdown().markup(sendLocationKeyboard(translation));

export const confirmLocationExtra = (translation: I18n) => Extra.markdown().markup(confirmLocationKeyboard(translation));
