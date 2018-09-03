import { fetchData } from 'endeavor';
import { IRequestNextEpisode } from '../queries';
import query from '../queries/nextEpisode.gql';

export const fetchNextEpisode = async (id: number): Promise<Date> => {
    const fetched = <IRequestNextEpisode> await fetchData({ query, variables: { id } });
    const { nextAiringEpisode } = fetched.data.Media;

    return (null !== nextAiringEpisode) ? new Date(nextAiringEpisode.airingAt * 1000) : null;
};
