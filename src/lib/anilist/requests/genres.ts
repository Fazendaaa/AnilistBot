import { fetchData } from 'endeavor';
import anime from './queries/genres/anime.gql';
import manga from './queries/genres/manga.gql';
import { RequestsGenres } from './queries';
import { DataContext } from '.';
import { translateGenres } from './translations/translations';
import { MediaType } from '..';

const parseGenres = (input: string): string => input.split(/\s*,\s*/).reduce((acc, cur) => acc + `• ${cur}\n`, '');

export const fetchGenres = async ({ id, type, translation }: DataContext): Promise<string> => {
    const fetch = <RequestsGenres> await fetchData({
        query: ('ANIME' === type) ? anime : manga,
        variables: { id }
    });
    const message = fetch.data.Media.genres;
    const to = translation.locale().split('-')[0];

    if ('en' === to) {
        return parseGenres(message.join(','));
    }

    return await translateGenres({ type: <MediaType> type, to, id, message }).then(parseGenres);
};
