import { fetchData } from 'endeavor';
import query from './queries/anime.gql';

export const fetchAnime = () => {
    const variables = {
        id: 15125
    };

    return fetchData({ query, variables });
};
