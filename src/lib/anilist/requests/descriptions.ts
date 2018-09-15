import { fetchData } from 'endeavor';
import striptags from 'striptags';
import { IDataContext, ISelectQuery } from '.';
import { ICharacterDescription, IMediaDescription, IRequestsDescription, IStaffDescription } from '../queries';
import character from '../queries/characterDescription.gql';
import media from '../queries/mediaDescription.gql';
import staff from '../queries/staffDescription.gql';
import { translateDescription } from '../translations/translations';

const selectQuery = async ({ id, content }: ISelectQuery): Promise<string> => {
    let result: IRequestsDescription;

    if ('ANIME' === content || 'MANGA' === content) {
        result = <IRequestsDescription> await fetchData({ query: media, variables: { type: content, id } });

        return (<IMediaDescription> result.data).Media.description;
    } if ('CHARACTER' === content) {
        result = <IRequestsDescription>await fetchData({ query: character, variables: { id } });

        return (<ICharacterDescription> result.data).Character.description;
    }
    result = <IRequestsDescription>await fetchData({ query: staff, variables: { id } });

    return (<IStaffDescription> result.data).Staff.description;
};

export const fetchDescription = async ({ id, content, translation }: IDataContext): Promise<string> => {
    const message = await selectQuery({ id, content });
    const to = translation.locale().split('-')[0];

    return ('en' === to) ? striptags(message) : translateDescription({ id, to, content, message });
};
