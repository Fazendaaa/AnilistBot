import { fetchData } from 'endeavor';
import { AnilistContext, SearchContext } from '.';
import { MinimumInline } from '../../telegram/inline';
import { charactersInfo, mediaInfo, staffInfo, studiosInfo } from './info';
import { Characters, CharactersQueryPage, Media, MediaQueryPage, Staff, StaffQueryPage, Studios,
StudiosQueryPage } from './queries';
import characters from './queries/characters.gql';
import media from './queries/media.gql';
import staff from './queries/staff.gql';
import studio from './queries/studio.gql';

const searchAnilist = async ({ search, query, page, perPage }: AnilistContext): Promise<Object | Error> => fetchData({
    query,
    variables: { page, perPage, search: ('' !== search) ? search : null  }
});

const staffSearch = async ({ search, page, perPage, translation }: SearchContext): Promise<MinimumInline[]> => {
    const searched = <StaffQueryPage> await searchAnilist({ search, page, perPage, query: staff });
    const curriedStaffInfo = ((input: Staff) => staffInfo({ staff: input, translation }));

    return searched.data.Page.staff.map(curriedStaffInfo);
};

const studiosSearch = async ({ search, page, perPage, translation }: SearchContext): Promise<MinimumInline[]> => {
    const searched = <StudiosQueryPage> await searchAnilist({ search, page, perPage, query: studio });
    const curriedStudiosInfo = ((studios: Studios) => studiosInfo({ studios, translation }));

    return searched.data.Page.studios.map(curriedStudiosInfo);
};

const charactersSearch = async ({ search, page, perPage, translation }: SearchContext): Promise<MinimumInline[]> => {
    const searched = <CharactersQueryPage> await searchAnilist({ search, page, perPage, query: characters });
    const curriedCharactersInfo = ((input: Characters) => charactersInfo({ characters: input, translation }));

    return searched.data.Page.characters.map(curriedCharactersInfo);
};

const mediaSearch = async ({ search, page, perPage, translation }: SearchContext): Promise<MinimumInline[]> => {
    const searched = <MediaQueryPage> await searchAnilist({ search, page, perPage, query: media });
    const curriedMediaInfo = ((input: Media) => mediaInfo({ media: input, translation }));

    return searched.data.Page.media.map(curriedMediaInfo);
};

export const allSearch = async ({ search, page, perPage, translation }: SearchContext): Promise<MinimumInline[]> => {
    const divided = Math.trunc(perPage / 4);

    return [
        ...await mediaSearch({ search, translation, page, perPage: divided }),
        ...await staffSearch({ search, translation, page, perPage: divided }),
        ...await studiosSearch({ search, translation, page, perPage: divided }),
        ...await charactersSearch({ search, translation, page, perPage: divided })
    ];
};
