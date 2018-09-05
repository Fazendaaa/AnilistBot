// tslint:disable: no-submodule-imports
import { lookupViaCity } from 'city-timezones';
import { IBotContext } from 'telegraf-bot-typings';
import Scene from 'telegraf/scenes/base';
import Stage from 'telegraf/stage';
import { confirmLocationExtra } from '../extra/location';
const { leave } = Stage;

export const locationScene = new Scene('Location');

locationScene.enter(({ i18n, message, replyWithMarkdown }: IBotContext) => {
    const { text } = message;
    const { city, province, state_ansi, country } = lookupViaCity(text)[0];

    return replyWithMarkdown(i18n.t('locationMask', { state: state_ansi, city, province, country }), confirmLocationExtra(i18n));
});

locationScene.on('callback_query', () => console.log('OR HERE???'));

locationScene.leave(ctx => ctx.reply('bye'));
locationScene.hears(/hi/gi, leave());
locationScene.on('message', ctx => ctx.reply('Send hi'));
