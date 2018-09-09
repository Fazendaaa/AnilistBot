// tslint:disable: no-submodule-imports
import { aboutExtra, countdownExtra, counterExtra, guideExtra, languageBackExtra, languageExtra, menuExtra, startExtra, userExtra
} from 'extra';
import moment from 'moment';
import removeMD from 'remove-markdown';
import { IBotContext, LanguageRequest, ListFilterRequest, ListRequest, MenuRequest, UserRequest } from 'telegraf-bot-typings';
import Scene from 'telegraf/scenes/base';
import { ExtraEditMessage } from 'telegraf/typings/telegram-types';
import { IHandleCounter, IHandleLanguage, IHandleMedia, IHandleMediaKeyboard, IHandleUser, IHandleUserData, IHandleUserKeyboard,
IUserTTFInfo } from '.';
import { IDBUserInfo } from '../../database/user';
import { fetchUserAnime, fetchUserManga, userInfo, userLanguage } from '../../database/user/user';
import { animeExtra, mangaExtra } from '../extra/media';
import { getLanguageCode } from '../parse/language';
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

// const handleNotify = async ({ user, request, translation }: IMenuNotifyContext): Promise<string> => {
//     const notify = ('ENABLE' === request) ? true : false;

//     // if ('NOTIFY' === request) {
//     //     return translation.t('notifyOptions');
//     // }

//     return userSetNotification({ id: user, notify })
//         .then(() => translation.t('setNotify', { notify: (true === notify) ? translation.t('enabled') : translation.t('disabled') }))
//         .catch(() => translation.t('errorNotify'));
// };

const handleCounter = async ({ id, translation }: IHandleCounter): Promise<string> => userInfo(id).then(({ counter }: IDBUserInfo) => {
    return translation.t('counterOptions', { counter: (null !== counter) ? counter : translation.t('notAvailable') });
}).catch(() => translation.t('errorUserInfo'));

const handleLanguage = async ({ id, request, translation }: IHandleLanguage): Promise<string> => {
    if ('LANGUAGE' === <UserRequest> request) {
        return translation.t('languageOptions');
    }

    return userLanguage({ language: getLanguageCode(<LanguageRequest>request), id })
           .then(() => translation.t('setLanguage'))
           .catch(() => translation.t('errorSetLanguage'));
};

const handleUserData = async ({ id, translation }: IHandleUserData): Promise<string> => userInfo(id).then(info => {
    const { notify, language, time, timezone } = <IDBUserInfo>info;

    return translation.t('userOptions', {
        time: (null !== time) ? moment(time).hour() : translation.t('timeNotSet'),
        timezone: (null !== timezone) ? timezone : translation.t('timezoneNotSet'),
        notify: (true === notify) ? translation.t('enabled') : translation.t('disabled'),
        language: (null !== language) ? translation.t(language) : translation.t('languageDefault')
    });
}).catch(() => translation.t('errorUserInfo'));

const handleMedia = async ({ id, user, filter, list, translation }: IHandleMedia): Promise<string> => {
    if ('WATCH' === list) {
        user.anime = (undefined !== user.anime) ? user.anime : await fetchUserAnime(id);

        return handleAnime({ user: user.anime, filter, translation });
    }
    user.manga = (undefined !== user.manga) ? user.manga : await fetchUserManga(id);

    return handleManga({ user: user.manga, filter, translation });
};

const handleUser = async ({ id, request, translation }: IHandleUser): Promise<string> => {
    if ('ALL' === <UserRequest> request) {
        return handleUserData({ id, translation });
    }

    return handleLanguage({ id, request, translation });
};

const handleLanguageKeyboard = ({ request, translation }: IHandleUserKeyboard): ExtraEditMessage => {
    if ('LANGUAGE' === <UserRequest> request) {
        return languageExtra(translation);
    }

    return languageBackExtra();
};

const handleMediaKeyboard = ({ list, filter, translation }: IHandleMediaKeyboard): ExtraEditMessage => {
    if ('WATCH' === list) {
        return animeExtra({ filter, translation });
    }

    return mangaExtra({ filter, translation });
};

const handleUserKeyboard = ({ request, translation }: IHandleUserKeyboard): ExtraEditMessage => {
    if ('ALL' === <UserRequest> request) {
        return userExtra(translation);
    }

    return handleLanguageKeyboard({ request, translation });
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
    const { id } = from;
    const translation = i18n;
    const data = callbackQuery.data.split('/');
    const kind = <MenuRequest> data[0];

    await answerCbQuery(i18n.t('loading'));

    if ('USER' === kind) {
        const request = (2 === data.length) ? <UserRequest> data[1] : <LanguageRequest> data[2];

        return editMessageText(await handleUser({ id, request, translation }), handleUserKeyboard({ request, translation }));
    } if ('ABOUT' === kind) {
        return editMessageText(i18n.t('aboutOptions'), aboutExtra());
    } if ('GUIDE' === kind) {
        return editMessageText(i18n.t('guideOptions'), guideExtra(translation));
    } if ('COUNTDOWN' === kind) {
        return editMessageText(i18n.t('countdownOptions', { anime: '' }), countdownExtra());
    } if ('COUNTER' === kind) {
        return editMessageText(i18n.t('counterOptions', { counter: '' }), counterExtra());
    } if ('MEDIA' === kind) {
        const list = <ListRequest> data[1];
        const filter = <ListFilterRequest> data[2];

        return editMessageText(await handleMedia({
            id,
            list,
            filter,
            translation,
            user: <IUserTTFInfo> scene.state
        }), handleMediaKeyboard({ list, filter, translation }));
    } if ('MENU' === kind) {
        return editMessageText(i18n.t('menuOptions'), menuExtra(translation));
    }

    return scene.leave();
});
