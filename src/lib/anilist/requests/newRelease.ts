import { queryAnilist } from 'endeavor';
import { INewReleaseContext } from '.';
import { IMedia, IRequestNewRelease } from '../queries';
import query from '../queries/newRelease.gql';

export const fetchNewRelease = async ({ id, content }: INewReleaseContext): Promise<IMedia> => {
    const fetched = <IRequestNewRelease> await queryAnilist({ query, variables: { id, type: content } });

    return fetched.data.Media;
};
