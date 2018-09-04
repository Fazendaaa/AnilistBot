import { ICallbackKeyboardContext } from 'telegraf-bot-typings';
import { InlineKeyboardMarkup } from 'telegram-typings';
import { askLocationKeyboard, locationKeyboard, sendLocationKeyboard } from '../keyboard/location';

export const handleLocation = ({ request, translation }): string => {
    if ('LOCATION-ASK' === request) {
        return translation.t('askLocationOptions');
    } if ('LOCATION-SEND' === request) {
        return translation.t('sendLocationOptions');
    }

    return translation.t('locationOptions');
};

export const handleLocationKeyboard = ({ request, translation }: ICallbackKeyboardContext): InlineKeyboardMarkup => {
    if ('LOCATION-ASK' === request) {
        return askLocationKeyboard(translation);
    } if ('LOCATION-SEND' === request) {
        console.log(sendLocationKeyboard(translation));

        return sendLocationKeyboard(translation);
    }

    return locationKeyboard(translation);
};
