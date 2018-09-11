import { fetchData } from 'endeavor';
import { IMedia, IRequestMedia } from '../queries';
import query from '../queries/media.gql';

export const mediaAnime = async (id: number): Promise<IMedia> => {
    const anime = <IRequestMedia> await fetchData({ query, variables: { type: 'ANIME', id }});

    return anime.data.Media;
};

export const mediaManga = async (id: number): Promise<IMedia> => {
    const manga = <IRequestMedia> await fetchData({ query, variables: { type: 'MANGA', id } });

    return manga.data.Media;
};
