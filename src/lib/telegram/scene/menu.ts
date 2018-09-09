// tslint:disable: no-submodule-imports
import { aboutExtra, countdownExtra, counterExtra, guideExtra, menuExtra, startExtra, userExtra } from 'extra';
import removeMD from 'remove-markdown';
import { IBotContext, ListFilterRequest, ListRequest, MenuRequest } from 'telegraf-bot-typings';
import Scene from 'telegraf/scenes/base';
import { ExtraEditMessage } from 'telegraf/typings/telegram-types';
import { IHandleMedia, IHandleMediaKeyboard, IUserTTFInfo } from '.';
import { fetchUserAnime, fetchUserManga } from '../../database/user/user';
import { animeExtra, mangaExtra } from '../extra/media';
import { handleAnime, handleManga } from '../parse/media';

// const handleTime = async ({ id, user, request, translation }: IMenuTimeContext): Promise<string> => {
//     // if ('TIME' === request) {
//     //     return translation.t('timeOptions');
//     // }
//     if ('PERIOD' === request) {
//         return translation.t('timePeriodOptions');
//     } if ('AM' === request || 'PM' === request) {
//         return translation.t('timeHourOptions');
//     }

//     return userSetTime({ id: user, time: id })
//         .then(date => (errorDate !== date) ? translation.t('setHour', { hour: moment(date).hour() }) : translation.t('errorSetHour'))
//         .catch(() => translation.t('errorSetHour'));
// };

// const handleLanguage = async ({ user, request, translation }: IMenuLanguageContext): Promise<string> => {
//     // if ('LANGUAGE' === request) {
//     //     return translation.t('languageOptions');
//     // }

//     return userLanguage({ id: user, language: getLanguageCode(request) })
//         .then(() => translation.t('setLanguage'))
//         .catch(() => translation.t('errorSetLanguage'));
// };

// const handleNotify = async ({ user, request, translation }: IMenuNotifyContext): Promise<string> => {
//     const notify = ('ENABLE' === request) ? true : false;

//     // if ('NOTIFY' === request) {
//     //     return translation.t('notifyOptions');
//     // }

//     return userSetNotification({ id: user, notify })
//         .then(() => translation.t('setNotify', { notify: (true === notify) ? translation.t('enabled') : translation.t('disabled') }))
//         .catch(() => translation.t('errorNotify'));
// };

// const handleUser = async ({ user, translation }: IMenuUserContext): Promise<string> => userInfo(user).then(info => {
//     const { notify, language, time, timezone } = <IDBUserInfo>info;

//     return translation.t('userOptions', {
//         time: (null !== time) ? moment(time).hour() : translation.t('timeNotSet'),
//         timezone: (null !== timezone) ? timezone : translation.t('timezoneNotSet'),
//         notify: (true === notify) ? translation.t('enabled') : translation.t('disabled'),
//         language: (null !== language) ? translation.t(language) : translation.t('languageDefault')
//     });
// }).catch(() => translation.t('errorUserInfo'));

// const handleCounter = async ({ user, translation }: IMenuUserContext): Promise<string> => userInfo(user).then(info => {
//     const { counter } = <IDBUserInfo>info;

//     return translation.t('counterOptions', { counter: (null !== counter) ? counter : translation.t('notAvailable') });
// }).catch(() => translation.t('errorUserInfo'));

const handleMedia = async ({ id, user, filter, list, translation }: IHandleMedia): Promise<string> => {
    if ('WATCH' === list) {
        user.anime = (undefined !== user.anime) ? user.anime : await fetchUserAnime(id);

        return handleAnime({ user: user.anime, filter, translation });
    }
    user.manga = (undefined !== user.manga) ? user.manga : await fetchUserManga(id);

    return handleManga({ user: user.manga, filter, translation });
};

const handleMediaKeyboard = ({ list, filter, translation }: IHandleMediaKeyboard): ExtraEditMessage => {
    if ('WATCH' === list) {
        return animeExtra({ filter, translation });
    }

    return mangaExtra({ filter, translation });
};

export const menuScene = new Scene('Menu');

menuScene.leave(async ({ i18n, replyWithMarkdown }: IBotContext) => replyWithMarkdown(i18n.t('leavingMenu')));

menuScene.enter(async ({ i18n, replyWithMarkdown }: IBotContext) => {
    await replyWithMarkdown(i18n.t('menuGreetings'), startExtra(i18n));

    return replyWithMarkdown(i18n.t('menuOptions'), menuExtra(i18n));
});

menuScene.on('text', async ({ i18n, scene, message }: IBotContext) => {
    let text = '';

    if (undefined !== message.reply_to_message) {
        text = message.reply_to_message.text;
    } if (removeMD(i18n.t('askLocationOptions')) === text) {
        return scene.enter('Location');
    }

    return scene.leave();
});

menuScene.on('callback_query', async ({ i18n, from, scene, answerCbQuery, callbackQuery, editMessageText }: IBotContext) => {
    const data = callbackQuery.data.split('/');
    const kind = <MenuRequest> data[0];
    const translation = i18n;

    await answerCbQuery(i18n.t('loading'));

    if ('USER' === kind) {
        return editMessageText(i18n.t('userOptions', {
            time: 'zar',
            notify: 'bar',
            language: 'foo',
            timezone: 'nothing'
        }), userExtra(i18n));
    } if ('ABOUT' === kind) {
        return editMessageText(i18n.t('aboutOptions'), aboutExtra());
    } if ('GUIDE' === kind) {
        return editMessageText(i18n.t('guideOptions'), guideExtra(i18n));
    } if ('COUNTDOWN' === kind) {
        return editMessageText(i18n.t('countdownOptions', { anime: ''}), countdownExtra());
    } if ('COUNTER' === kind) {
        return editMessageText(i18n.t('counterOptions', { counter: '' }), counterExtra());
    } if ('MEDIA' === kind) {
        const list = <ListRequest> data[1];
        const filter = <ListFilterRequest> data[2];

        return editMessageText(await handleMedia({
            list,
            filter,
            translation,
            id: from.id,
            user: <IUserTTFInfo> scene.state
        }), handleMediaKeyboard({ list, filter, translation }));
    } if ('MENU' === kind) {
        return editMessageText(i18n.t('menuOptions'), menuExtra(i18n));
    }

    return scene.leave();
});
