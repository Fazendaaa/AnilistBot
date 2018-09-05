//  tslint: disable: no-require-imports, no-var-requires, no-submodule-imports
import { lookupViaCity } from 'city-timezones';
const Stage = require('telegraf/stage');
const Scene = require('telegraf/scenes/base');
const { leave } = Stage;

const figureLocation = new Scene('Location');

figureLocation.enter(ctx => ctx.reply('hi'));
figureLocation.leave(ctx => ctx.reply('bye'));
figureLocation.hears(/hi/gi, leave());
figureLocation.on('message', ctx => ctx.reply('Send hi'));

export const locationStage = new Stage();
locationStage.command('cancel', leave());

locationStage.register(figureLocation);

export const locationProcess = ({ translation, city }): string => {
    console.log(lookupViaCity(city));

    return 'Foo';
};
