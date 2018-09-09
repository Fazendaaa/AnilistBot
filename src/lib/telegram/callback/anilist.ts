import { fetchDescription } from '../../anilist/requests/descriptions';
import { fetchGenres } from '../../anilist/requests/genres';
import { IAnilistContext } from './index';

const truncateMessage = (input: string): string => {
    const max = 196;

    return (max < input.length) ? `${input.substring(0, max)}...` : input;
};

export const anilistCallback = async ({ id, content, request, dbStatus, translation }: IAnilistContext): Promise<string> => {
    const userLanguage = translation.locale().split('-')[0];
    let response;

    if (false === dbStatus && 'en' !== userLanguage) {
        return translation.t('dbDown');
    } if ('GENRES' === request) {
        response = await fetchGenres({ id, content, translation });
    } if ('DESCRIPTION' === request) {
        response = await fetchDescription({ id, content, translation });
    }

    return truncateMessage(response);
};
