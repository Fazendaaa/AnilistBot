import { fetchData } from 'endeavor';
import anime from './queries/genres/anime.gql';
import manga from './queries/genres/manga.gql';
import { RequestsGenres } from './queries';
import { DataContext } from '.';
import { translateGenres } from './translations/translations';
import { MediaType } from '..';

export const fetchGenres = async ({ id, type, translation }: DataContext): Promise<string> => {
    const fetch = <RequestsGenres> await fetchData({
        query: ('ANIME' === type) ? anime : manga,
        variables: { id }
    });
    const message = fetch.data.Media.genres;
    const to = translation.locale().split('-')[0];

    if ('en' === to) {
        return message.join('\n*');
    }

    return await translateGenres({ type: <MediaType> type, to, id, message });
};
