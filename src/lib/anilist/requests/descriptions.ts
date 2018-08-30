import { fetchData } from 'endeavor';
import striptags from 'striptags';
import { IDataContext } from '.';
import { IRequestsDescription } from './queries';
import anime from './queries/description/anime.gql';
import manga from './queries/description/manga.gql';
import { translateDescription } from './translations/translations';

export const fetchDescription = async ({ id, request, translation }: IDataContext): Promise<string> => {
    const fetch = <IRequestsDescription> await fetchData({
        query: ('ANIME' === request) ? anime : manga,
        variables: { id }
    });
    const message = fetch.data.Media.description;
    const to = translation.locale().split('-')[0];

    if ('en' === to) {
        return striptags(message);
    }

    return translateDescription({ id, to, request, message });
};
