// tslint:disable: no-submodule-imports
import { IBotContext } from 'telegraf-bot-typings';
import Scene from 'telegraf/scenes/base';
import Stage from 'telegraf/stage';
import { AnilistObject, AnilistRequest } from '../../anilist';
import { fetchDescription } from '../../anilist/requests/descriptions';
import { fetchGenres } from '../../anilist/requests/genres';
const { leave } = Stage;

export const anilistScene = new Scene('Anilist');

const truncateMessage = (input: string): string => {
    const max = 196;

    return (max < input.length) ? `${input.substring(0, max)}...` : input;
};

// 'callback_query'
anilistScene.enter(async ({ i18n, answerCbQuery, callbackQuery }: IBotContext) => {
    const data = callbackQuery.data.split('/');
    const id = parseInt(data[2], 10);
    const field = <AnilistRequest> data[1];
    const request = <AnilistObject> data[0];
    let response;

    if ('GENRES' === field) {
        response = await fetchGenres({ translation: i18n, id, request });
    } if ('DESCRIPTION' === field) {
        response = await fetchDescription({ translation: i18n, id, request });
    }

    return answerCbQuery(truncateMessage(response), true);
});

// mediaScene.on('callback_query', async ({ i18n, answerCbQuery, callbackQuery }: IBotContext) => {
//     const data = callbackQuery.data.split('/');
//     const id = parseInt(data[2], 10);
//     const field = <RequestsFiled> data[0];
//     const request = <AllRequests> data[1];
//     let response;

//     if ('GENRES' === field) {
//         response = await fetchGenres({ translation: i18n, id, request });
//     } if ('DESCRIPTION' === field) {
//         response = await fetchDescription({ translation: i18n, id, request });
//     }

//     return answerCbQuery(truncateMessage(response), true);
// });

anilistScene.leave(ctx => ctx.reply('bye'));
