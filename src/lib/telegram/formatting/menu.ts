import { MenuContext } from '.';

export const handleMenu = ({ request, translation }: MenuContext): string => {
    if ('BACK-MENU' === request) {
        return translation.t('menuOptions');
    } if ('TIME' === request) {
        return translation.t('timeOptions');
    } if ('ABOUT' === request) {
        return translation.t('aboutOptions');
    } if ('NOTIFY' === request) {
        return translation.t('notifyOptions');
    } if ('MORE-INFO-MANGA' === request) {
        return translation.t('readlistOptions');
    } if ('MORE-INFO-ANIME' === request) {
        return translation.t('watchlistOptions');
    } if ('COUNTDOWN' === request) {
        return translation.t('countdownOptions');
    } if ('SOON-MANGA' === request) {
        return translation.t('soonMangaOptions');
    } if ('SOON-ANIME' === request) {
        return translation.t('soonAnimeOptions');
    } if ('AIRING-ANIME' === request) {
        return translation.t('airingAnimeOptions');
    } if ('COMPLETED-MANGA' === request) {
        return translation.t('completedMangaOptions');
    } if ('COMPLETED-ANIME' === request) {
        return translation.t('completedAnimeOptions');
    } if ('CANCELLED-MANGA' === request) {
        return translation.t('cancelledMangaOptions');
    } if ('CANCELLED-ANIME' === request) {
        return translation.t('cancelledAnimeOptions');
    } if ('PUBLISHING-MANGA' === request) {
        return translation.t('publishingMangaOptions');
    } if ('READLIST' === request || 'ALL-MANGA' === request) {
        return translation.t('readlistOptions');
    } if ('WATCHLIST' === request || 'ALL-ANIME' === request) {
        return translation.t('watchlistOptions');
    } if ('GUIDE' === request || 'BACK-GUIDE' === request) {
        return translation.t('guideOptions');
    }

    return translation.t('userOptions', { notifications: 'foo', time: 'bar' });
};
