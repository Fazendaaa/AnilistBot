import { queryAnilist } from 'endeavor';
import { IListTitle, IRequestListTitle } from '../queries';
import query from '../queries/title.gql';

export const animeSearchTitle = async (id: number): Promise<IListTitle> => {
    const fetched = <IRequestListTitle> await queryAnilist({ query, variables: { id, type: 'ANIME' } });

    return fetched.data.Media;
};

export const mangaSearchTitle = async (id: number): Promise<IListTitle> => {
    const fetched = <IRequestListTitle> await queryAnilist({ query, variables: { id, type: 'MANGA' } });

    return fetched.data.Media;
};
