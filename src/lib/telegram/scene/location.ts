// tslint:disable: no-submodule-imports
import { IBotContext, LocationConfirmRequest, LocationRequest, MenuRequest } from 'telegraf-bot-typings';
import Scene from 'telegraf/scenes/base';
import { ICityInfo, IConfirmData, IHandleConfirm } from '.';
import { confirmBackExtra, confirmLocationExtra, handleLocationExtra, locationExtra } from '../extra/location';
import { handleLocation, handleLocationCity, handleSentLocation, handleTimezone } from '../parse/location';

const handleConfirm = async ({ id, text, confirm, cityContext, translation }: IHandleConfirm): Promise<IConfirmData> => {
    if ('YES' === confirm) {
        return {
            extra: confirmBackExtra(),
            messageText: await handleTimezone({ timezone: cityContext.timezone, id, translation })
        };
    }

    cityContext.city = (undefined === cityContext.city) ? text : cityContext.city;
    cityContext.position = (undefined === cityContext.position) ? 0 : cityContext.position + 1;

    const { city, country, province } = handleLocationCity(cityContext);

    if (undefined !== country) {
        return {
            extra: confirmLocationExtra(translation),
            messageText: translation.t('locationMask', { city, country, province })
        };
    }

    return {
        extra: confirmBackExtra(),
        messageText: translation.t('locationNotFoundMask', { city })
    };
};

export const locationScene = new Scene('Location');

locationScene.leave(async ({ i18n, replyWithMarkdown }: IBotContext) => replyWithMarkdown(i18n.t('leavingLocation')));

locationScene.enter(async ({ i18n, editMessageText }: IBotContext) => editMessageText(i18n.t('locationOptions'), locationExtra(i18n)));

locationScene.on('text', async ({ i18n, scene, message, replyWithMarkdown, from }: IBotContext) => {
    const { id } = from;
    const translation = i18n;
    const cityContext = <ICityInfo> scene.state;
    const confirm = <LocationConfirmRequest> 'NO';
    const text = (undefined !== message.reply_to_message) ? message.text : null;

    if (undefined !== message.text && i18n.t('menu') === message.text) {
        return scene.enter('Menu');
    }

    const { extra, messageText } = await handleConfirm({
        id,
        text,
        confirm,
        cityContext,
        translation
    });

    return replyWithMarkdown(messageText, extra);
});

locationScene.on('location', async ({ i18n, from,  message, replyWithMarkdown }: IBotContext) => {
    const { id } = from;
    const { location } = message;
    const { latitude, longitude } = location;

    return replyWithMarkdown(await handleSentLocation({ translation: i18n, id, latitude, longitude }), confirmBackExtra());
});

locationScene.on('callback_query', async ({ i18n, from, scene, callbackQuery, editMessageText, replyWithMarkdown }: IBotContext) => {
    const { id } = from;
    const translation = i18n;
    const data = callbackQuery.data.split('/');
    const kind = <MenuRequest> data[0];
    const request = (2 <= data.length) ? <LocationRequest> data[1] : null;
    const confirm = (3 === data.length) ? <LocationConfirmRequest> data[2] : null;
    const cityContext = <ICityInfo> scene.state;
    const args = { id, confirm, request, translation };

    if ('USER' === kind) {
        return scene.enter('Menu');
    } if ('LOCATION' !== kind) {
        return scene.leave();
    } if ('CONFIRM' === request) {
        const { extra, messageText } = await handleConfirm({
            id,
            confirm,
            cityContext,
            translation
        });

        return editMessageText(messageText, extra);
    }

    return replyWithMarkdown(handleLocation(args), handleLocationExtra(args));
});
