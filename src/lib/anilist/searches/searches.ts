import { fetchData } from 'endeavor';
import media from '../queries/searches/media.gql';
import staff from '../queries/searches/staff.gql';
import studio from '../queries/searches/studio.gql';
import characters from '../queries/searches/characters.gql';
import { CharactersQueryPage, MediaQueryPage, Characters, Media, StudiosQueryPage, Studios, StaffQueryPage,
Staff } from './queries';
import { MinimumInline } from '../../telegram/inline';
import { SearchContext, AnilistContext } from '.';
import { charactersInfo, mediaInfo, studiosInfo, staffInfo } from './info';

const searchAnilist = async ({ search, query, page, perPage }: AnilistContext): Promise<Object | Error> => await fetchData({
    query,
    variables: { page, perPage, search: ('' !== search) ? search : null  }
});

const staffSearch = async ({ search, page, perPage, translation }: SearchContext): Promise<Array<MinimumInline>> => {
    const searched = <StaffQueryPage> await searchAnilist({ search, page, perPage, query: staff });
    const curriedStaffInfo = ((staff: Staff) => staffInfo({ staff, translation }));

    return searched.data.Page.staff.map(curriedStaffInfo);
};

const studiosSearch = async ({ search, page, perPage, translation }: SearchContext): Promise<Array<MinimumInline>> => {
    const searched = <StudiosQueryPage> await searchAnilist({ search, page, perPage, query: studio });
    const curriedStudiosInfo = ((studios: Studios) => studiosInfo({ studios, translation }));

    return searched.data.Page.studios.map(curriedStudiosInfo);
};

const charactersSearch = async ({ search, page, perPage, translation }: SearchContext): Promise<Array<MinimumInline>> => {
    const searched = <CharactersQueryPage> await searchAnilist({ search, page, perPage, query: characters });
    const curriedCharactersInfo = ((characters: Characters) => charactersInfo({ characters, translation }));

    return searched.data.Page.characters.map(curriedCharactersInfo);
};

const mediaSearch = async ({ search, page, perPage, translation }: SearchContext): Promise<Array<MinimumInline>> => {
    const searched = <MediaQueryPage> await searchAnilist({ search, page, perPage, query: media });
    const curriedMediaInfo = ((media: Media) => mediaInfo({ media, translation }));

    return searched.data.Page.media.map(curriedMediaInfo);
};

export const allSearch = async ({ search, page, perPage, translation }: SearchContext): Promise<Array<MinimumInline>> => {
    const divided = Math.trunc(perPage / 4);

    return [
        ...await mediaSearch({ search, translation, page, perPage: divided }),
        ...await staffSearch({ search, translation, page, perPage: divided }),
        ...await studiosSearch({ search, translation, page, perPage: divided }),
        ...await charactersSearch({ search, translation, page, perPage: divided })
    ];
};
