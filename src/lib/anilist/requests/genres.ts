import { fetchData } from 'endeavor';
import { DataContext } from '.';
import { MediaType } from '..';
import { RequestsGenres } from './queries';
import anime from './queries/genres/anime.gql';
import manga from './queries/genres/manga.gql';
import { translateGenres } from './translations/translations';

const parseGenres = (input: string): string => input.split(/\s*,\s*/).reduce((acc, cur) => `${acc} • ${cur}\n`, '');

export const fetchGenres = async ({ id, request, translation }: DataContext): Promise<string> => {
    const fetch = <RequestsGenres> await fetchData({
        query: ('ANIME' === request) ? anime : manga,
        variables: { id }
    });
    const message = fetch.data.Media.genres;
    const to = translation.locale().split('-')[0];

    if ('en' === to) {
        return parseGenres(message.join(','));
    }

    return translateGenres({ request: <MediaType> request, to, id, message }).then(parseGenres);
};
