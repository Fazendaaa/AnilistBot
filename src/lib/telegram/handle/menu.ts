import moment from 'moment';
import { IMenuAnimeContext, IMenuContext, IMenuLanguageContext, IMenuMangaContext, IMenuNotifyContext, IMenuTimeContext, IMenuUserContext
} from '.';
import { IDBUserInfo } from '../../database/user';
import { userInfo, userLanguage, userSetNotification, userSetTime } from '../../database/user/user';
import { errorDate } from '../../database/utils';
import { getLanguageCode } from './language';
import { fetchUserAnime, fetchUserManga } from './list';

const handleAnime = async ({ user, request, translation }: IMenuAnimeContext): Promise<string> => {
    const common = { user, translation };

    if ('ANIME-RELEASING' === request) {
        return translation.t('airingAnimeOptions', { anime: await fetchUserAnime({ ...common, status: 'RELEASING' }) });
    } if ('ANIME-COMPLETED' === request) {
        return translation.t('completedAnimeOptions', { anime: await fetchUserAnime({ ...common, status: 'FINISHED' }) });
    } if ('ANIME-CANCELLED' === request) {
        return translation.t('cancelledAnimeOptions', { anime: await fetchUserAnime({ ...common, status: 'CANCELLED' }) });
    } if ('ANIME-SOON' === request) {
        return translation.t('soonAnimeOptions', { anime: await fetchUserAnime({ ...common, status: 'NOT_YET_RELEASED' }) });
    }

    return translation.t('watchlistOptions', { anime: await  fetchUserAnime({ ...common, status: null }) });
};

const handleManga = async ({ user, request, translation }: IMenuMangaContext): Promise<string> => {
    const common = { user, translation };

    if ('MANGA-COMPLETED' === request) {
        return translation.t('completedMangaOptions', { manga: await fetchUserManga({ ...common, status: 'FINISHED' }) });
    } if ('MANGA-CANCELLED' === request) {
        return translation.t('cancelledMangaOptions', { manga: await fetchUserManga({ ...common, status: 'CANCELLED' }) });
    } if ('MANGA-RELEASING' === request) {
        return translation.t('publishingMangaOptions', { manga: await fetchUserManga({ ...common, status: 'RELEASING' }) });
    } if ('MANGA-SOON' === request) {
        return translation.t('soonMangaOptions', { manga: await fetchUserManga({ ...common, status: 'NOT_YET_RELEASED' }) });
    }

    return translation.t('readlistOptions', { manga: await fetchUserManga({ ...common, status: null }) });
};

const handleTime = async ({ id, user, request, translation }: IMenuTimeContext): Promise<string> => {
    if ('TIME' === request) {
        return translation.t('timeOptions');
    } if ('TIME-PERIOD' === request) {
        return translation.t('timePeriodOptions');
    } if ('TIME-PERIOD-AM' === request || 'TIME-PERIOD-PM' === request) {
        return translation.t('timeHourOptions');
    }

    return userSetTime({ id: user, time: id })
           .then(date => (errorDate !== date) ? translation.t('setHour', { hour: moment(date).hour() }) : translation.t('errorSetHour'))
           .catch(() => translation.t('errorSetHour'));
};

const handleLanguage = async ({ user, request, translation }: IMenuLanguageContext): Promise<string> => {
    if ('LANGUAGE' === request) {
        return translation.t('languageOptions');
    }

    return userLanguage({ id: user, language: getLanguageCode(request) })
          .then(() => translation.t('setLanguage'))
          .catch(() => translation.t('errorSetLanguage'));
};

const handleNotify = async ({ user, request, translation }: IMenuNotifyContext): Promise<string> => {
    const notify = ('NOTIFY-ENABLE' === request) ? true : false ;

    if ('NOTIFY' === request) {
        return translation.t('notifyOptions');
    }

    return userSetNotification({ id: user, notify })
           .then(() => translation.t('setNotify', { notify: (true === notify) ? translation.t('enabled') : translation.t('disabled') }))
           .catch(() => translation.t('errorNotify'));
};

const handleUser = async ({ user, translation }: IMenuUserContext): Promise<string> => userInfo(user).then(info => {
    const { notify, language, time, timezone } = <IDBUserInfo> info;

    return translation.t('userOptions', {
        time: (null !== time) ? moment(time).hour() : translation.t('timeNotSet'),
        timezone: (null !== timezone) ? timezone : translation.t('timezoneNotSet'),
        notify: (true === notify) ? translation.t('enabled') : translation.t('disabled'),
        language: (null !== language) ? translation.t(language) : translation.t('languageDefault')
    });
}).catch(() => translation.t('errorUserInfo'));

const handleCounter = async ({ user, translation }: IMenuUserContext): Promise<string> => userInfo(user).then(info => {
    const { counter } = <IDBUserInfo> info;

    return translation.t('counterOptions', { counter: (null !== counter) ? counter : translation.t('notAvailable') });
}).catch(() => translation.t('errorUserInfo'));

export const handleMenu = async ({ id, user, request, translation }: IMenuContext): Promise<string> => {
    const kind = request.split('-');

    if ('ANIME' === kind[0]) {
        return handleAnime({ user, request, translation });
    } if ('MANGA' === kind[0]) {
        return handleManga({ user, request, translation });
    } if ('NOTIFY' === kind[0]) {
        return handleNotify({ user, request, translation });
    } if ('TIME' === kind[0]) {
        return handleTime({ id, user, request, translation });
    } if ('LANGUAGE' === kind[0]) {
        return handleLanguage({ user, request, translation });
    } if ('MENU' === request) {
        return translation.t('menuOptions');
    } if ('ABOUT' === request) {
        return translation.t('aboutOptions');
    } if ('GUIDE' === request) {
        return translation.t('guideOptions');
    } if ('LOCATION' === request) {
        return translation.t('locationOptions');
    } if ('USER' === request) {
        return handleUser({ user, translation });
    } if ('COUNTER' === request) {
        return handleCounter({ user, translation });
    } if ('COUNTDOWN' === request) {
        return translation.t('countdownOptions', { anime: 'foo' });
    }

    return translation.t('notAvailable');
};
