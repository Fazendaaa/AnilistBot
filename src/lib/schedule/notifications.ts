// tslint:disable: no-submodule-imports -- Just using it this way because of lack of support yet -- my intention is to work on it.
import { config } from 'dotenv';
import { internationalization } from 'main';
import { Job, scheduleJob } from 'node-schedule';
import Telegram from 'telegraf/telegram';
import { IReduceLanguage, IUserMessage, IUsersLanguage } from '.';
import { fetchNewRelease } from '../anilist/requests/newRelease';
import { IContentInfo, IDBLaterNotificationsInfo } from '../database/notifications';
import { addLaterNotifications, fetchLaterNotifications, fetchMediaNotifications } from '../database/notifications/notifications';
import { INotifySubscribersResponse } from '../database/subscriptions';
import { fetchNotifySubscribers } from '../database/subscriptions/subscription';
import { IDBUserInfo } from '../database/user';
import { userInfo } from '../database/user/user';
import { handleMediaNotifyExtra } from '../telegram/extra/media';
import { dailyNotificationExtra } from '../telegram/extra/notification';
import { handleNewRelease, handleUserRelease } from '../telegram/parse/media';

config();

const telegram = new Telegram(process.env.BOT_KEY);
const eachHour = '00 * * * *';
const eachHalfHour = '00,30 * * * *';

const reduceLanguage = async (reduce: IReduceLanguage, acc: Promise<IUsersLanguage>, cur: number): Promise<IUsersLanguage> => {
    return acc.then(async(newAcc) => {
        const { content_id, kind } = reduce;
        const { _id, time, language } = <IDBUserInfo> await userInfo(cur);
        const toNotifyLanguage = (null !== language) ? language : 'en';

        if (undefined === newAcc[toNotifyLanguage]) {
            newAcc[toNotifyLanguage] = [];
        } if (null !== time) {
            addLaterNotifications({ _id, content_id, kind });
        } else {
            newAcc[toNotifyLanguage].push(_id);
        }

        return newAcc;
    });
};

const sendMedia = async ({ kind, users, content_id }: INotifySubscribersResponse): Promise<boolean> => {
    const translation = internationalization;
    const content = (true === kind) ? 'ANIME' : 'MANGA';
    const curriedReduceLanguage = ((acc: Promise<IUsersLanguage>, cur: number) => reduceLanguage({ content_id, kind }, acc, cur));
    const usersLanguages = await users.reduce(curriedReduceLanguage, Promise.resolve({}));
    const media = await fetchNewRelease({ id: content_id, content });

    Object.keys(usersLanguages).map(async (language) => {
        const usersToNotify = usersLanguages[language];
        const message = handleNewRelease({ media, language, translation });
        const extra = handleMediaNotifyExtra({ id: content_id, request: content, language, translation });

        usersToNotify.map(async (userId) => telegram.sendMessage(userId, message, extra));
    });

    return true;
};

const userMessage = async (user: IUserMessage, acc: Promise<string>, cur: IContentInfo): Promise<string> => acc.then(async (total) => {
    const { content_id, kind } = cur;
    const { language, translation } = user;
    const content = (true === kind) ? 'ANIME' : 'MANGA';
    const data = await fetchNewRelease({ id: content_id, content });

    return `${total}\n${handleUserRelease({ media: data, language, translation })}`;
});

const sendUser = async ({ _id, media }: IDBLaterNotificationsInfo): Promise<string> => {
    if (media.length > 0) {
        const translation = internationalization;
        const { language } = <IDBUserInfo> await userInfo(_id);
        const toNotifyLanguage = (null !== language) ? language : 'en';
        const curriedUserMessage = ((acc: Promise<string>, cur: IContentInfo) => {
            return userMessage({ language: toNotifyLanguage, translation }, acc, cur);
        });
        const message = await media.reduce(curriedUserMessage, Promise.resolve(translation.t(toNotifyLanguage, 'userReleaseHeader')));

        return telegram.sendMessage(_id, message, dailyNotificationExtra({ language: toNotifyLanguage, translation }));
    }
};

export const mediaSchedule = (): Job => scheduleJob('Sending content upon release notification.', eachHalfHour, async () => {
    // Only 'true' because only Animes are currently supported to notify upon releases.
    const kind = true;
    const released = await fetchMediaNotifications({ kind });
    const mediaSubscribers = await Promise.all(released.map(async ({ _id }) => fetchNotifySubscribers({ kind, content_id: _id })));

    mediaSubscribers.map(sendMedia);
});

export const userSchedule = (): Job => scheduleJob('Sending content to the user desired time.', eachHour, async () => {
    const kind = true;
    const usersToNotify = await fetchLaterNotifications({ kind });

    usersToNotify.map(sendUser);
});
