import { aboutExtra, countdownExtra, counterBackExtra, guideExtra, languageBackExtra, languageExtra, menuExtra, notifyBackExtra,
notifyExtra, timeBackExtra, timeExtra, timeHourExtra, timePeriodExtra, userExtra } from 'extra';
import { ICallbackKeyboardContext, IKeyboardContext, IRequestsContext } from '.';
import { fetchDescription } from '../anilist/requests/descriptions';
import { fetchGenres } from '../anilist/requests/genres';
import { animeExtra, mangaExtra } from './extra/media';
import { handleList } from './handle/list';
import { handleLocationExtra } from './handle/location';
import { handleMenu } from './handle/menu';

const truncateMessage = (input: string): string => {
    const max = 196;

    return (max < input.length) ? `${input.substring(0, max)}...` : input;
};

const handleNotifyExtra = ({ request, translation }: IKeyboardContext) => {
    return ('NOTIFY' === request) ? notifyExtra(translation) : notifyBackExtra();
};

const handleLanguageExtra = ({ request, translation }: IKeyboardContext) => {
    return ('LANGUAGE' === request) ? languageExtra(translation) : languageBackExtra();
};

const handleTimeExtra = ({ request, translation }: IKeyboardContext) => {
    if ('TIME-PERIOD-AM' === request) {
        return timeHourExtra('AM');
    } if ('TIME-PERIOD-PM' === request) {
        return timeHourExtra('PM');
    } if ('TIME-PERIOD' === request) {
        return timePeriodExtra(translation);
    } if ('TIME' === request) {
        return timeExtra(translation);
    }

    return timeBackExtra();
};

const handleDBDown = ({ field, translation }): string => {
    const lang = translation.locale().split('-')[0];

    if ('en' !== lang || 'LIST' === field) {
        return translation.t('dbDown');
    }

    return translation.t('dbDownPrivate');
};

export const handleCallback = async ({ id, user, request, field, translation, dbStatus }: IRequestsContext): Promise<string> => {
    if (false === dbStatus) {
        return handleDBDown({ field, translation });
    } if ('MENU' === field) {
        return handleMenu({ id, user, request, translation });
    } if ('GENRES' === field) {
        return fetchGenres({ id, request, translation }).then(truncateMessage);
    } if ('DESCRIPTION' === field) {
        return fetchDescription({ id, request, translation }).then(truncateMessage);
    } if ('LIST' === field) {
        return handleList({ id, user, request, translation });
    }

    // For deprecated methods -- this saves me time while debugging.
    return translation.t('notAvailable');
};

export const callbackExtra = ({ request, translation, dbStatus }: ICallbackKeyboardContext) => {
    const kind = request.split('-');

    if ('ANIME' === kind[0]) {
        return animeExtra({ request, translation });
    } if ('MANGA' === kind[0]) {
        return mangaExtra({ request, translation });
    } if (false === dbStatus) {
        return null;
    } if ('TIME' === kind[0]) {
        return handleTimeExtra({ request, translation });
    } if ('NOTIFY' === kind[0]) {
        return handleNotifyExtra({ request, translation });
    } if ('LANGUAGE' === kind[0]) {
        return handleLanguageExtra({ request, translation });
    } if ('LOCATION' === kind[0]) {
        return handleLocationExtra({ request, translation });
    } if ('ABOUT' === request) {
        return aboutExtra();
    } if ('COUNTDOWN' === request) {
        return countdownExtra();
    } if ('COUNTER' === request) {
        return counterBackExtra();
    } if ('USER' === request) {
        return userExtra(translation);
    } if ('GUIDE' === request) {
        return guideExtra(translation);
    }

    return menuExtra(translation);
};
