import { queryAnilist } from 'endeavor';
import { ICounter, IRequestCounter } from '../queries';
import query from '../queries/counter.gql';

export const fetchAnimeCounter = async (id: number): Promise<ICounter> => {
    const counters = <IRequestCounter> await queryAnilist({ query, variables: { id } });

    return counters.data.Media;
};
