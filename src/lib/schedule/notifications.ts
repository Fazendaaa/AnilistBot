// tslint:disable: no-submodule-imports -- Just using it this way because of lack of support yet -- my intention is to work on it.
import { config } from 'dotenv';
import { internationalization } from 'main';
import { Job, scheduleJob } from 'node-schedule';
import Telegram from 'telegraf/telegram';
import { UsersLanguage } from '.';
import { fetchNewRelease } from '../anilist/requests/newRelease';
import { fetchMediaNotifications } from '../database/notifications/notifications';
import { INotifySubscribersResponse } from '../database/subscriptions';
import { fetchNotifySubscribers } from '../database/subscriptions/subscription';
import { IDBUserInfo } from '../database/user';
import { userInfo } from '../database/user/user';
import { handleMediaNotifyExtra } from '../telegram/extra/media';
import { handleNewRelease } from '../telegram/parse/media';

config();

const telegram = new Telegram(process.env.BOT_KEY);
const eachHour = '* */1 * * * *';
const eachHalfHour = '* */30 * * * *';

const reduceLanguage = async (acc: Promise<UsersLanguage>, cur: number): Promise<UsersLanguage> => acc.then(async(newAcc) => {
    const { _id, language } = <IDBUserInfo> await userInfo(cur);

    if (undefined === newAcc[language]) {
        newAcc[language] = [];
    }

    newAcc[language].push(_id);

    return newAcc;
});

const sendMessage = async ({ kind, users, content_id }: INotifySubscribersResponse) => {
    const translation = internationalization;
    const content = (true === kind) ? 'ANIME' : 'MANGA';
    const usersLanguages = await users.reduce(reduceLanguage, Promise.resolve({}));
    const media = await fetchNewRelease({ id: content_id, content });

    Object.keys(usersLanguages).map(async (language) => {
        const usersToNotify = usersLanguages[language];
        const message = handleNewRelease({ media, language, translation });
        const extra = handleMediaNotifyExtra({ id: content_id, request: content, language, translation });

        usersToNotify.map(async (userId) => telegram.sendMessage(userId, message, extra));
    });
};

export const mediaSchedule = (): Job => scheduleJob('Sending content upon release notification.', eachHalfHour, async () => {
    const released = await fetchMediaNotifications();
    // Only 'true' because only Animes are currently supported to notify upon releases.
    const mediaSubscribers = await Promise.all(released.map(async ({ _id }) => fetchNotifySubscribers({ kind: true, content_id: _id })));

    mediaSubscribers.map(sendMessage);
});
