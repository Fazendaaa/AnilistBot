import { fetchData } from 'endeavor';
import animeGenres from './queries/genres/anime.gql';
import mangaGenres from './queries/genres/manga.gql';
import { RequestsGenres } from './queries';
import { DataContext } from '.';
import { translateGenres } from './translations/translations';

export const fetchGenres = async ({ id, type, translation }: DataContext): Promise<string> => {
    const fetch = <RequestsGenres> await fetchData({
        query: ('ANIME' === type) ? animeGenres : mangaGenres,
        variables: { id }
    });
    const message = fetch.data.Media.genres;

    if (translation.locale().includes('en')) {
        return message.join('\n*');
    }

    return await translateGenres({ id, message, translation });
};
