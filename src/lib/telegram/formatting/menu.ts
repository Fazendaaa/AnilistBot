import { IMenuContext } from '.';

const handleAnime = ({ request, translation }: IMenuContext): string => {
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

const handleManga = ({ request, translation }: IMenuContext): string => {
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

const handleBack = ({ request, translation }: IMenuContext): string => {
    if ('MENU-BACK' === request) {
        return translation.t('menuOptions');
    }

    return translation.t('guideOptions');
};

export const handleMenu = ({ request, translation }: IMenuContext): string => {
    const kind = request.split('-');

    if ('BACK' === kind[0]) {
        return handleBack({ request, translation });
    } if ('ANIME' === kind[0]) {
        return handleAnime({ request, translation });
    } if ('MANGA' === kind[0]) {
        return handleManga({ request, translation });
    } if ('TIME' === request) {
        return translation.t('timeOptions');
    } if ('ABOUT' === request) {
        return translation.t('aboutOptions');
    } if ('GUIDE' === request) {
        return translation.t('guideOptions');
    } if ('NOTIFY' === request) {
        return translation.t('notifyOptions');
    } if ('COUNTDOWN' === request) {
        return translation.t('countdownOptions');
    } if ('READLIST' === request) {
        return translation.t('readlistOptions');
    } if ('WATCHLIST' === request) {
        return translation.t('watchlistOptions');
    }

    return translation.t('userOptions', { notifications: 'foo', time: 'bar' });
};
