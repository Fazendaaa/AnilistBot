import { MenuContext } from '.';

export const handleMenu = ({ type, translation }: MenuContext): string => {
    if ('BACK-MENU' === type) {
        return translation.t('menuOptions');
    } if ('TIME' === type) {
        return translation.t('timeOptions');
    } if ('ABOUT' === type) {
        return translation.t('aboutOptions');
    } if ('NOTIFY' === type) {
        return translation.t('notifyOptions');
    } if ('MORE-INFO-MANGA' === type) {
        return translation.t('readlistOptions');
    } if ('MORE-INFO-ANIME' === type) {
        return translation.t('watchlistOptions');
    } if ('COUNTDOWN' === type) {
        return translation.t('countdownOptions');
    } if ('SOON-MANGA' === type) {
        return translation.t('soonMangaOptions');
    } if ('SOON-ANIME' === type) {
        return translation.t('soonAnimeOptions');
    } if ('AIRING-ANIME' === type) {
        return translation.t('airingAnimeOptions');
    } if ('COMPLETED-MANGA' === type) {
        return translation.t('completedMangaOptions');
    } if ('COMPLETED-ANIME' === type) {
        return translation.t('completedAnimeOptions');
    } if ('CANCELLED-MANGA' === type) {
        return translation.t('cancelledMangaOptions');
    } if ('CANCELLED-ANIME' === type) {
        return translation.t('cancelledAnimeOptions');
    } if ('PUBLISHING-MANGA' === type) {
        return translation.t('publishingMangaOptions');
    } if ('READLIST' === type || 'ALL-MANGA' === type) {
        return translation.t('readlistOptions');
    } if ('WATCHLIST' === type || 'ALL-ANIME' === type) {
        return translation.t('watchlistOptions');
    } if ('GUIDE' === type || 'BACK-GUIDE' === type) {
        return translation.t('guideOptions');
    }

    return translation.t('userOptions', { notifications: 'foo', time: 'bar' });
};
