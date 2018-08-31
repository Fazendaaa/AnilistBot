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

const handleLanguage = ({ request, translation }: IMenuContext): string => {
    if ('LANGUAGE-PORTUGUESE' === request) {
        return 'FOO';
    } if ('LANGUAGE-INDONESIAN' === request) {
        return 'FOO';
    } if ('LANGUAGE-DUTCH' === request) {
        return 'FOO';
    } if ('LANGUAGE-SPANISH' === request) {
        return 'FOO';
    } if ('LANGUAGE-ITALIAN' === request) {
        return 'FOO';
    } if ('LANGUAGE-DEUTSCH' === request) {
        return 'FOO';
    } if ('LANGUAGE-FRENCH' === request) {
        return 'FOO';
    } if ('LANGUAGE-RUSSIAN' === request) {
        return 'FOO';
    } if ('LANGUAGE-CHINESE' === request) {
        return 'FOO';
    } if ('LANGUAGE-JAPANESE' === request) {
        return 'FOO';
    }

    return 'FOO';
};

export const handleMenu = ({ request, translation }: IMenuContext): string => {
    const kind = request.split('-');

    if ('ANIME' === kind[0]) {
        return handleAnime({ request, translation });
    } if ('LANGUAGE' === kind[0]) {
        return handleLanguage({ request, translation });
    } if ('MANGA' === kind[0]) {
        return handleManga({ request, translation });
    } if ('MENU' === request) {
        return translation.t('menuOptions');
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

    return translation.t('userOptions', { notifications: 'foo', time: 'bar', language: 'nothing' });
};
