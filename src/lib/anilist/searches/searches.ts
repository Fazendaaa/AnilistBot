import { fetchData } from 'endeavor';
import media from '../queries/searches/media.gql';
import staff from '../queries/searches/staff.gql';
import studio from '../queries/searches/studio.gql';
import characters from '../queries/searches/characters.gql';
import { CharactersQueryPage, MediaQueryPage, Characters, Media, StudiosQueryPage, Studios, StaffQueryPage,
Staff } from '../queries/searches';
import { MinimumInline } from '../../telegram/inline';
import { SearchContext } from '.';
import { charactersInfo, mediaInfo, studiosInfo, staffInfo } from './info';

const staffSearch = async ({ query, translation, page, perPage }: SearchContext): Promise<Array<MinimumInline>> => {
    const searched = <StaffQueryPage> await fetchData({
        query: staff,
        variables: { page, perPage, search: ('' === query) ? null : query }
    });
    const curriedStaffInfo = ((staff: Staff) => staffInfo({ staff, translation }));

    return searched.data.Page.staff.map(curriedStaffInfo);
};

const studiosSearch = async ({ query, translation, page, perPage }: SearchContext): Promise<Array<MinimumInline>> => {
    const searched = <StudiosQueryPage> await fetchData({
        query: studio,
        variables: { page, perPage, search: ('' === query) ? null : query }
    });
    const curriedStudiosInfo = ((studios: Studios) => studiosInfo({ studios, translation }));

    return searched.data.Page.studios.map(curriedStudiosInfo);
};

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

export const allSearch = async ({ query, translation, page, perPage }: SearchContext): Promise<Array<MinimumInline>> => {
    const divided = Math.trunc(perPage / 4);

    return [
        ...await mediaSearch({ query, translation, page, perPage: divided }),
        ...await staffSearch({ query, translation, page, perPage: divided }),
        ...await studiosSearch({ query, translation, page, perPage: divided }),
        ...await charactersSearch({ query, translation, page, perPage: divided })
    ];
};
