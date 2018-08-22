import { RequestsContext } from '.';
import { fetchDescription } from './descriptions';
import { fetchGenres } from './genres';

export const handleRequests = async ({ id, type, field, translation }: RequestsContext): Promise<string> => {
    let message;

    if ('DESCRIPTION' === field) {
        message = await fetchDescription({ id, type, translation });
    } if ('GENRES' === field) {
        message = await fetchGenres({ id, type, translation });
    } if ('LIST' === field) {
        message = translation.t('notAvailable');
    }

    return message.slice(0, 120);
};
