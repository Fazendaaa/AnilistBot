import moment from 'moment';
import { LanguageRequest, NotifyRequests, TimeRequest, UserRequest, LocationRequest } from 'telegraf-bot-typings';
import { IHandleCounter, IHandleLanguage, IHandleLocation, IHandleMedia, IHandleNotify, IHandleTime, IHandleUser, IHandleUserData
} from '.';
import { IDBUserInfo } from '../../database/user';
import { fetchUserAnime, fetchUserManga, userInfo, userLanguage, userSetNotification, userSetTime } from '../../database/user/user';
import { errorDate } from '../../database/utils';
import { getLanguageCode } from './language';
import { handleAnime, handleManga } from './media';

const handleTime = async ({ id, value, request, translation }: IHandleTime): Promise<string> => {
    if ('AM' === request || 'PM' === request) {
        return translation.t('timeHourOptions');
    } if ('PERIOD' === request) {
        return translation.t('timePeriodOptions');
    } if (null === value) {
        return translation.t('timeOptions');
    }

    return userSetTime({ time: value, id })
        .then(date => (errorDate !== date) ? translation.t('setHour', { hour: moment(date).hour() }) : translation.t('errorSetHour'))
        .catch(() => translation.t('errorSetHour'));
};

const handleNotify = async ({ id, value, translation }: IHandleNotify): Promise<string> => {
    const notify = ('ENABLE' === value) ? true : false;

    if (null === value) {
        return translation.t('notifyOptions');
    }

    return userSetNotification({ id, notify })
        .then(() => translation.t('setNotify', { notify: (true === notify) ? translation.t('enabled') : translation.t('disabled') }))
        .catch(() => translation.t('errorNotify'));
};

const handleLanguage = async ({ id, value, translation }: IHandleLanguage): Promise<string> => {
    if (null === value) {
        return translation.t('languageOptions');
    }

    return userLanguage({ language: getLanguageCode(value), id })
        .then(() => translation.t('setLanguage'))
        .catch(() => translation.t('errorSetLanguage'));
};

const handleUserData = async ({ id, translation }: IHandleUserData): Promise<string> => userInfo(id).then(info => {
    const { notify, language, time, timezone } = <IDBUserInfo> info;

    return translation.t('userOptions', {
        time: (null !== time) ? moment(time).hour() : translation.t('timeNotSet'),
        timezone: (null !== timezone) ? timezone : translation.t('timezoneNotSet'),
        notify: (true === notify) ? translation.t('enabled') : translation.t('disabled'),
        language: (null !== language) ? translation.t(language) : translation.t('languageDefault')
    });
}).catch(() => translation.t('errorUserInfo'));

const handleLocation = ({ value, translation }: IHandleLocation): string => {
    if ('ASK' === value) {
        return translation.t('askLocationOptions');
    } if ('SEND' === value) {
        return translation.t('sendLocationOptions');
    }

    return translation.t('locationOptions');
};

export const handleCounter = async ({ id, translation }: IHandleCounter): Promise<string> => userInfo(id)
.then(({ counter }: IDBUserInfo) => {
    return translation.t('counterOptions', { counter: (null !== counter) ? counter : translation.t('notAvailable') });
}).catch(() => translation.t('errorUserInfo'));

export const handleMedia = async ({ id, user, filter, list, translation }: IHandleMedia): Promise<string> => {
    if ('WATCH' === list) {
        user.anime = (undefined !== user.anime) ? user.anime : await fetchUserAnime(id);

        return handleAnime({ user: user.anime, filter, translation });
    }
    user.manga = (undefined !== user.manga) ? user.manga : await fetchUserManga(id);

    return handleManga({ user: user.manga, filter, translation });
};

export const handleUser = async ({ id, value, request, translation }: IHandleUser): Promise<string> => {
    if ('ALL' === <UserRequest> request) {
        return handleUserData({ id, translation });
    } if ('NOTIFY' === <UserRequest> request) {
        return handleNotify({ value: <NotifyRequests> value, id, translation });
    } if ('LANGUAGE' === <UserRequest> request) {
        return handleLanguage({ value: <LanguageRequest> value, id, translation });
    } if ('LOCATION' === <UserRequest> request) {
        return handleLocation({ value: <LocationRequest> value, translation });
    }

    return handleTime({ value: <number> value, request: <TimeRequest> request, id, translation });
};
