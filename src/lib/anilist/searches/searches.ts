import { fetchData } from 'endeavor';
import media from '../queries/searches/media.gql';
import characters from '../queries/searches/characters.gql';
import { QueryPageCharacters, QueryPageMedia } from '../queries/searches';
import { MinimumInline } from '../../telegram/inline';
import { mediaMessage } from '../utils/messageText';
import { imagePreview, titlePreview, formatPreview } from '../utils/preview';
import { mediaKeyboard } from '../utils/keyboard';
import { SearchContext } from '.';

export const searchCharacters = async ({ query, translation, page, perPage }: SearchContext): Promise<Array<MinimumInline>> => {
    const searched = <QueryPageCharacters> await fetchData({
        query: characters,
        variables: { page, perPage, search: ('' === query) ? null : query }
    });

    return searched.data.Page.media.map(data => {
        return {
            title: data.name.native,
            thumb_url: data.image.medium,
            description: data.name.native,
            message_text: data.name.native
        };
    });
};

export const searchMedia = async ({ query, translation, page, perPage }: SearchContext): Promise<Array<MinimumInline>> => {
    const searched = <QueryPageMedia> await fetchData({
        query: media,
        variables: { page, perPage, search: ('' === query) ? null : query }
    });

    return searched.data.Page.media.map(data => {
        const { title, format, id, coverImage, bannerImage, type } = data;

        return {
            title: titlePreview({ title, translation }),
            message_text: mediaMessage({ data, translation }),
            description: formatPreview({ format, translation }),
            reply_markup: mediaKeyboard({ id, type, translation }),
            thumb_url: imagePreview({ coverImage, bannerImage, isInline: true })
        };
    });
};

export const searchInline = async ({ query, translation, page, perPage }: SearchContext): Promise<Array<MinimumInline>> => {
    return [
        ...await searchMedia({ query, translation, page, perPage })
    ];
};
