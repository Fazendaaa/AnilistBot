// tslint:disable: no-submodule-imports
import { IBotContext, LocationConfirmRequest, LocationRequest } from 'telegraf-bot-typings';
import Scene from 'telegraf/scenes/base';
import { ICityInfo } from '.';
import { confirmLocationExtra, handleLocationExtra, locationExtra } from '../extra/location';
import { handleLocation, handleLocationCity, handleTimezone } from '../parse/location';

const handleConfirm = async ({ id, text, confirm, cityContext, translation }): Promise<ILocationData> => {
    if ('YES' === confirm) {
        return handleTimezone({
            id,
            translation,
            timezone: cityContext.timezone
        });
    }

    cityContext.city = (undefined === cityContext.city) ? text : cityContext.city;
    cityContext.position = (undefined === cityContext.position) ? 0 : cityContext.position + 1;

    return handleLocationCity(cityContext);
};

export const locationScene = new Scene('Location');

locationScene.leave(async ({ i18n, replyWithMarkdown }: IBotContext) => replyWithMarkdown(i18n.t('leavingLocation')));

locationScene.enter(async ({ i18n, editMessageText }: IBotContext) => editMessageText(i18n.t('locationOptions'), locationExtra(i18n)));

locationScene.on('text', async ({ i18n, scene, message, replyWithMarkdown, from }: IBotContext) => {
    const { id } = from;
    const translation = i18n;
    const cityContext = <ICityInfo> scene.state;
    const text = (undefined !== message.reply_to_message) ? message.text : null;

    if (undefined !== message.text && i18n.t('menu') === message.text) {
        return scene.enter('Menu');
    }

    const { city, country, province } = await handleConfirm({
        id,
        text,
        cityContext,
        translation,
        confirm: 'NO'
    });

    if (undefined !== country) {
        return replyWithMarkdown(translation.t('locationMask', { city, country, province }), confirmLocationExtra(translation));
    }

    return replyWithMarkdown(translation.t('locationNotFoundMask', { city }));
});

locationScene.on('callback_query', async ({ i18n, from, scene, callbackQuery, editMessageText, replyWithMarkdown }: IBotContext) => {
    const { id } = from;
    const translation = i18n;
    const data = callbackQuery.data.split('/');
    const request = (2 <= data.length) ? <LocationRequest> data[1] : null;
    const confirm = (3 === data.length) ? <LocationConfirmRequest> data[2] : null;
    const cityContext = <ICityInfo> scene.state;
    const args = { id, confirm, request, translation };

    if ('CONFIRM' === request) {
        return editMessageText(await handleConfirm({
            id,
            confirm,
            text: null,
            cityContext,
            translation
        }), confirmLocationExtra(translation));
    }

    return replyWithMarkdown(handleLocation(args), handleLocationExtra(args));
});
