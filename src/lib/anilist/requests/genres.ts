import { fetchData } from 'endeavor';
import { IDataContext } from '.';
import { IRequestsGenres } from '../queries';
import query from '../queries/genres.gql';
import { translateGenres } from '../translations/translations';

const parseGenres = (input: string | string []): string => {
    let genres = input;

    if (false === Array.isArray(input)) {
        genres = (<string> input).split(/\s*,\s*/);
    }

    return (<string[]> genres).reduce((acc, cur) => `${acc}• ${cur}\n`, '');
};

export const fetchGenres = async ({ id, content, translation }: IDataContext): Promise<string> => {
    const fetch = <IRequestsGenres> await fetchData({ query, variables: { type: content, id } });
    const message = fetch.data.Media.genres;
    const to = translation.locale().split('-')[0];

    return ('en' === to) ? parseGenres(message.join(',')) : translateGenres({ content, to, id, message }).then(parseGenres);
};
