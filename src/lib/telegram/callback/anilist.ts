import { fetchDescription } from '../../anilist/requests/descriptions';
import { fetchGenres } from '../../anilist/requests/genres';

const truncateMessage = (input: string): string => {
    const max = 196;

    return (max < input.length) ? `${input.substring(0, max)}...` : input;
};

export const anilistCallback = async ({ id, content, request, translation }): Promise<string> => {
    let response;

    if ('GENRES' === request) {
        response = await fetchGenres({ id, content, translation });
    } if ('DESCRIPTION' === request) {
        response = await fetchDescription({ id, content, translation });
    }

    return truncateMessage(response);
};
