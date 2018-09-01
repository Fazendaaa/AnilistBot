import { IMenuAnimeContext, IMenuContext, IMenuLanguageContext, IMenuMangaContext } from '.';
import { setLanguage } from '../../database/user/language';

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
    let language = 'en';

    if ('LANGUAGE-PORTUGUESE' === request) {
        language = 'pt';
    } if ('LANGUAGE-INDONESIAN' === request) {
        language = 'id';
    } if ('LANGUAGE-DUTCH' === request) {
        language = 'nl';
    } if ('LANGUAGE-SPANISH' === request) {
        language = 'es';
    } if ('LANGUAGE-ITALIAN' === request) {
        language = 'it';
    } if ('LANGUAGE-DEUTSCH' === request) {
        language = 'de';
    } if ('LANGUAGE-FRENCH' === request) {
        language = 'fr';
    } if ('LANGUAGE-RUSSIAN' === request) {
        language = 'ru';
    } if ('LANGUAGE-CHINESE' === request) {
        language = 'zh';
    } if ('LANGUAGE-JAPANESE' === request) {
        language = 'jp';
    }

    return setLanguage({ id: user, language }).then(() => translation.t('setLanguage')).catch(() => translation.t('errorSetLanguage'));
};

export const handleMenu = async ({ user, request, translation }: IMenuContext): Promise<string> => {
    const kind = request.split('-');

    if ('ANIME' === kind[0]) {
        return handleAnime({ request, translation });
    } if ('LANGUAGE' === kind[0] && kind.length > 1) {
        return handleLanguage({ user, request, translation });
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
    } if ('LANGUAGE' === request) {
        return translation.t('languageOptions');
    } if ('READLIST' === request) {
        return translation.t('readlistOptions');
    } if ('COUNTDOWN' === request) {
        return translation.t('countdownOptions');
    } if ('WATCHLIST' === request) {
        return translation.t('watchlistOptions');
    }

    return translation.t('userOptions', { notifications: 'foo', time: 'bar', language: 'nothing' });
};
