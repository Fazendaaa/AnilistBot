import { fetchData } from 'endeavor';
import striptags from 'striptags';
import { IDataContext } from '.';
import { IRequestsDescription } from '../queries';
import anime from '../queries/animeDescription.gql';
import manga from '../queries/mangaDescription.gql';
import { translateDescription } from '../utils/translations/translations';

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
