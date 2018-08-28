import { fetchData } from 'endeavor';
import { DataContext } from '.';
import { RequestsDescription } from './queries';
import animeDescription from './queries/description/anime.gql';
import mangaDescription from './queries/description/manga.gql';
import { translateDescription } from './translations/translations';

export const fetchDescription = async ({ id, request, translation }: DataContext): Promise<string> => {
    const fetch = <RequestsDescription> await fetchData({
        query: ('ANIME' === request) ? animeDescription : mangaDescription,
        variables: { id }
    });
    const message = fetch.data.Media.description;
    const to = translation.locale().split('-')[0];

    if ('en' === to) {
        return message;
    }

    return translateDescription({ id, to, request, message });
};
