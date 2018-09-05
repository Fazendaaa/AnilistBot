// tslint:disable: no-submodule-imports
import { lookupViaCity } from 'city-timezones';
import { IBotContext } from 'telegraf-bot-typings';
import Scene from 'telegraf/scenes/base';
import Stage from 'telegraf/stage';
import { confirmLocationExtra } from '../extra/location';
const { leave } = Stage;

export const locationStage = new Stage();
const figureLocation = new Scene('Location');

figureLocation.enter(({ i18n, message, replyWithMarkdown }: IBotContext) => {
    const { text } = message;
    const { city, province, state_ansi, country } = lookupViaCity(text)[0];

    return replyWithMarkdown(i18n.t('locationMask', { state: state_ansi, city, province, country }), confirmLocationExtra(i18n));
});

figureLocation.on('callback_query', () => console.log('OR HERE???'));

figureLocation.leave(ctx => ctx.reply('bye'));
figureLocation.hears(/hi/gi, leave());
figureLocation.on('message', ctx => ctx.reply('Send hi'));

locationStage.command('cancel', leave());
locationStage.register(figureLocation);
