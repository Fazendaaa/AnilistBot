import { fetchData } from 'endeavor';
import { DocumentNode } from 'graphql';
import striptags from 'striptags';
import { IDataContext } from '.';
import { AnilistObject } from '..';
import { IRequestsDescription } from '../queries';
import anime from '../queries/animeDescription.gql';
import manga from '../queries/mangaDescription.gql';
import { translateDescription } from '../translations/translations';

const selectQuery = (input: AnilistObject): DocumentNode => {
    if ('ANIME' === input) {
        return anime;
    } if ('CHARACTER' === input) {
        return manga;
    } if ('STAFF' === input) {
        return manga;
    }

    return manga;
};

export const fetchDescription = async ({ id, content, translation }: IDataContext): Promise<string> => {
    const fetch = <IRequestsDescription> await fetchData({ query: selectQuery(content), variables: { id } });
    const message = fetch.data.Media.description;
    const to = translation.locale().split('-')[0];

    if ('en' === to) {
        return striptags(message);
    }

    return translateDescription({ id, to, content, message });
};
