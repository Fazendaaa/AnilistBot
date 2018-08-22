import { fetchData } from 'endeavor';
import mangaDescription from './queries/description/manga.gql';
import animeDescription from './queries/description/anime.gql';
import { RequestsDescription } from './queries';
import { DataContext } from '.';
import { translateDescription } from './translations/translations';

export const fetchDescription = async ({ id, type, translation }: DataContext): Promise<string> => {
    const fetch = <RequestsDescription> await fetchData({
        query: ('ANIME' === type) ? animeDescription : mangaDescription,
        variables: { id }
    });
    const message = fetch.data.Media.description;
    const to = translation.locale().split('-')[0];

    if ('en' === to) {
        return message;
    }

    return await translateDescription({ id, to, type, message });
};
