import { fetchData } from 'endeavor';
import media from '../queries/searches/media.gql';
import characters from '../queries/searches/characters.gql';
import { CharactersQueryPage, MediaQueryPage } from '../queries/searches';
import { MinimumInline } from '../../telegram/inline';
import { mediaMessage, characterMessage } from '../parse/messageText';
import { mediaKeyboard, characterKeyboard } from '../parse/keyboard';
import { SearchContext } from '.';
import { mediaDescription, characterDescription } from '../parse/description';
import { mediaThumbUrl, characterThumbUrl } from '../parse/thumbUrl';
import { nameTitle, mediaTitle } from '../parse/title';

export const searchCharacters = async ({ query, translation, page, perPage }: SearchContext): Promise<Array<MinimumInline>> => {
    const searched = <CharactersQueryPage> await fetchData({
        query: characters,
        variables: { page, perPage, search: ('' === query) ? null : query }
    });

    return searched.data.Page.characters.map(characters => {
        const { id, name, image } = characters;

        return {
            thumb_url: characterThumbUrl(image),
            title: nameTitle({ name, translation }),
            description: characterDescription({ translation }),
            message_text: characterMessage({ characters, translation }),
            reply_markup: characterKeyboard({ id, translation, type: 'CHARACTER' })
        };
    });
};

export const searchMedia = async ({ query, translation, page, perPage }: SearchContext): Promise<Array<MinimumInline>> => {
    const searched = <MediaQueryPage> await fetchData({
        query: media,
        variables: { page, perPage, search: ('' === query) ? null : query }
    });

    return searched.data.Page.media.map(media => {
        const { title, format, id, coverImage, bannerImage, type, source } = media;

        return {
            title: mediaTitle({ title, translation }),
            message_text: mediaMessage({ media, translation }),
            thumb_url: mediaThumbUrl({ coverImage, bannerImage }),
            reply_markup: mediaKeyboard({ id, type, translation }),
            description: mediaDescription({ format, source, translation })
        };
    });
};

export const searchAll = async ({ query, translation, page, perPage }: SearchContext): Promise<Array<MinimumInline>> => [
    ...await searchMedia({ query, translation, page, perPage }),
    ...await searchCharacters({ query, translation, page, perPage })
];
