// tslint:disable: no-submodule-imports
import { menuExtra, startExtra } from 'extra';
import removeMD from 'remove-markdown';
import { IBotContext } from 'telegraf-bot-typings';
import Scene from 'telegraf/scenes/base';
import Stage from 'telegraf/stage';
const { leave } = Stage;

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

// export const handleMenu = async ({ id, user, request, translation }: IMenuContext): Promise<string> => {
//     const kind = request.split('-');

//     if ('ANIME' === kind[0]) {
//         return handleAnime({ user, request, translation });
//     } if ('MANGA' === kind[0]) {
//         return handleManga({ user, request, translation });
//     } if ('NOTIFY' === kind[0]) {
//         return handleNotify({ user, request, translation });
//     } if ('TIME' === kind[0]) {
//         return handleTime({ id, user, request, translation });
//     } if ('LOCATION' === kind[0]) {
//         return handleLocation({ request, translation });
//     } if ('LANGUAGE' === kind[0]) {
//         return handleLanguage({ user, request, translation });
//     } if ('MENU' === request) {
//         return translation.t('menuOptions');
//     } if ('ABOUT' === request) {
//         return translation.t('aboutOptions');
//     } if ('GUIDE' === request) {
//         return translation.t('guideOptions');
//     } if ('USER' === request) {
//         return handleUser({ user, translation });
//     } if ('COUNTER' === request) {
//         return handleCounter({ user, translation });
//     } if ('COUNTDOWN' === request) {
//         return translation.t('countdownOptions', { anime: 'foo' });
//     }

//     return translation.t('notAvailable');
// };

export const menuScene = new Scene('Menu');

menuScene.enter(async ({ i18n, answerCbQuery, message, scene, replyWithMarkdown }: IBotContext) => {
    // const { city, province, state_ansi, country } = lookupViaCity(text)[0];

    // if (removeMD(i18n.t('askLocationOptions')) === reply_to_message.text) {
        // return scene.enter('Location');
    // }

    await replyWithMarkdown(i18n.t('menuGreetings'), startExtra(i18n));

    return replyWithMarkdown(i18n.t('menuOptions'), menuExtra(i18n));
    // return replyWithMarkdown(i18n.t('locationMask', { state: state_ansi, city, province, country }), confirmLocationExtra(i18n));
});

menuScene.on('callback_query', async ({ i18n, answerCbQuery }: IBotContext) => {
    answerCbQuery(i18n.t('loading'));
    console.log('OR HERE???');
});

menuScene.leave(leave());
