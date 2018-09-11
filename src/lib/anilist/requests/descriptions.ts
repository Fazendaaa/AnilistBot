import { fetchData } from 'endeavor';
import striptags from 'striptags';
import { IDataContext } from '.';
import { IRequestsDescription } from '../queries';
import query from '../queries/description.gql';
import { translateDescription } from '../translations/translations';

export const fetchDescription = async ({ id, content, translation }: IDataContext): Promise<string> => {
    const fetch = <IRequestsDescription> await fetchData({ query, variables: { type: content, id } });
    const message = fetch.data.Media.description;
    const to = translation.locale().split('-')[0];

    return ('en' === to) ? striptags(message) : translateDescription({ id, to, content, message });
};
