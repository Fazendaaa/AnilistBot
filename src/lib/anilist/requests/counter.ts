import { fetchData } from 'endeavor';
import { ICounter, IRequestCounter } from '../queries';
import query from '../queries/counter.gql';

export const fetchAnimeCounter = async (id: number): Promise<ICounter> => {
    const counters = <IRequestCounter> await fetchData({ query, variables: { id } });

    return counters.data.Media;
};
