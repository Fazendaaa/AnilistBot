import { IMenuAnimeContext, IMenuContext, IMenuLanguageContext, IMenuMangaContext, IMenuNotifyContext, IMenuUserContext } from '.';
import { IDBUserInfo } from '../../database/user';
import { userInfo, userLanguage, userSetNotification } from '../../database/user/user';
import { getLanguageCode } from './language';

const handleAnime = ({ request, translation }: IMenuAnimeContext): string => {
    if ('ANIME-SOON' === request) {
        return translation.t('soonAnimeOptions');
    } if ('ANIME-AIRING' === request) {
        return translation.t('airingAnimeOptions');
    } if ('ANIME-COMPLETED' === request) {
        return translation.t('completedAnimeOptions');
    } if ('ANIME-CANCELLED' === request) {
        return translation.t('cancelledAnimeOptions');
    }

    return translation.t('watchlistOptions');
};

const handleManga = ({ request, translation }: IMenuMangaContext): string => {
    if ('MANGA-SOON' === request) {
        return translation.t('soonMangaOptions');
    } if ('MANGA-COMPLETED' === request) {
        return translation.t('completedMangaOptions');
    } if ('MANGA-CANCELLED' === request) {
        return translation.t('cancelledMangaOptions');
    } if ('MANGA-PUBLISHING' === request) {
        return translation.t('publishingMangaOptions');
    }

    return translation.t('readlistOptions');
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

const handleUser = ({ user, translation }: IMenuUserContext): Promise<string> => userInfo(user).then(info => {
    const { notify, language, time, timezone } = <IDBUserInfo> info;

    return translation.t('userOptions', {
        time: (null !== time) ? time : translation.t('timezoneNotSet'),
        timezone: (null !== timezone) ? timezone : translation.t('timezoneNotSet'),
        notify: (true === notify) ? translation.t('enabled') : translation.t('disabled'),
        language: (null !== language) ? translation.t(language) : translation.t('languageDefault')
    });
}).catch(() => translation.t('errorUserInfo'));

export const handleMenu = async ({ user, request, translation }: IMenuContext): Promise<string> => {
    const kind = request.split('-');

    if ('ANIME' === kind[0]) {
        return handleAnime({ request, translation });
    } if ('MANGA' === kind[0]) {
        return handleManga({ request, translation });
    } if ('LANGUAGE' === kind[0]) {
        return handleLanguage({ user, request, translation });
    } if ('NOTIFY' === kind[0]) {
        return handleNotify({ user, request, translation });
    } if ('MENU' === request) {
        return translation.t('menuOptions');
    } if ('TIME' === request) {
        return translation.t('timeOptions');
    } if ('ABOUT' === request) {
        return translation.t('aboutOptions');
    } if ('GUIDE' === request) {
        return translation.t('guideOptions');
    } if ('READLIST' === request) {
        return translation.t('readlistOptions');
    } if ('USER' === request) {
        return handleUser({ user, translation });
    } if ('COUNTDOWN' === request) {
        return translation.t('countdownOptions');
    } if ('WATCHLIST' === request) {
        return translation.t('watchlistOptions');
    }

    return translation.t('notAvailable');
};
