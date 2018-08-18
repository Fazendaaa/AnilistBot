import { fetchData } from 'endeavor';
import media from '../queries/searches/media.gql';
import characters from '../queries/searches/characters.gql';
import { CharactersQueryPage, MediaQueryPage, Characters, Media } from '../queries/searches';
import { MinimumInline } from '../../telegram/inline';
import { SearchContext } from '.';
import { charactersInfo, mediaInfo } from './info';

const charactersSearch = async ({ query, translation, page, perPage }: SearchContext): Promise<Array<MinimumInline>> => {
    const searched = <CharactersQueryPage> await fetchData({
        query: characters,
        variables: { page, perPage, search: ('' === query) ? null : query }
    });
    const curriedCharactersInfo = ((characters: Characters) => charactersInfo({ characters, translation }));

    return searched.data.Page.characters.map(curriedCharactersInfo);
};

const mediaSearch = async ({ query, translation, page, perPage }: SearchContext): Promise<Array<MinimumInline>> => {
    const searched = <MediaQueryPage> await fetchData({
        query: media,
        variables: { page, perPage, search: ('' === query) ? null : query }
    });
    const curriedMediaInfo = ((media: Media) => mediaInfo({ media, translation }));

    return searched.data.Page.media.map(curriedMediaInfo);
};

export const allSearch = async ({ query, translation, page, perPage }: SearchContext): Promise<Array<MinimumInline>> => [
    ...await mediaSearch({ query, translation, page, perPage }),
    ...await charactersSearch({ query, translation, page, perPage })
];
