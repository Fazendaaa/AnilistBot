import { fetchData } from 'endeavor';
import { IMediaTitle } from '..';
import { IRequestTitleStatus, ITitleStatus } from '../queries';
import query from '../queries/title.gql';

export const animeSearchTitle = async (id: number): Promise<ITitleStatus> => {
    const fetched = <IRequestTitleStatus> await fetchData({ query, variables: { id, type: 'ANIME' } });

    return fetched.data.Media;
};

export const mangaSearchTitle = async (id: number): Promise<ITitleStatus> => {
    const fetched = <IRequestTitleStatus> await fetchData({ query, variables: { id, type: 'MANGA' } });

    return fetched.data.Media;
};
