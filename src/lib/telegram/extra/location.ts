// tslint:disable: no-submodule-imports
import { Extra, Markup } from 'telegraf';
import { I18n } from 'telegraf-i18n';
import { ExtraEditMessage } from 'telegraf/typings/telegram-types';
import { ILocationExtra } from '.';
import { confirmBackKeyboard, confirmLocationKeyboard, locationKeyboard, removeLocationKeyboard, sendLocationKeyboard
} from '../keyboard/location';

// Fix this later to use only Extra.
export const askLocationExtra = (): ExtraEditMessage => Markup.forceReply().extra();

export const confirmBackExtra = (): ExtraEditMessage => Extra.markdown().markup(confirmBackKeyboard);

export const locationExtra = (translation: I18n): ExtraEditMessage => Extra.markdown().markup(locationKeyboard(translation));

export const sendLocationExtra = (translation: I18n): ExtraEditMessage => Extra.markdown().markup(sendLocationKeyboard(translation));

export const removeLocationExtra = (translation: I18n): ExtraEditMessage => Extra.markdown().markup(removeLocationKeyboard(translation));

export const confirmLocationExtra = (translation: I18n): ExtraEditMessage => {
    return Extra.markdown().markup(confirmLocationKeyboard(translation));
};

export const handleLocationExtra = ({ request, translation }: ILocationExtra): ExtraEditMessage => {
    if ('ASK' === request) {
        return askLocationExtra();
    }

    return sendLocationExtra(translation);
};
