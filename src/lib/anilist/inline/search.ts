import { fetchData } from 'endeavor';
import inline from '../queries/inline/inline.gql';
import { QueryPageInline } from '../queries/inline/inline';
import { I18n } from 'telegraf-i18n';
import { MinimumInline } from '../../telegram/inline';
import { inlineMessage } from '../utils/messageText';
import { imagePreview, titlePreview, formatPreview } from '../utils/preview';
import { inlineKeyboard } from '../utils/keyboard';

interface SearchContext {
    page: number;
    query: string;
    perPage: number;
    translation: I18n;
}

export const searchInline = async ({ query, translation, page, perPage }: SearchContext): Promise<Array<MinimumInline>> => {
    const searched = <QueryPageInline> await fetchData({
        query: inline,
        variables: { page, perPage, search: ('' === query) ? null : query }
    });

    return searched.data.Page.media.map(data => {
        return {
            title: titlePreview(data.title),
            message_text: inlineMessage({ data, translation }),
            description: formatPreview({ format: data.format, translation }),
            reply_markup: inlineKeyboard({ id: data.id, translation, format: data.format }),
            thumb_url: imagePreview({ coverImage: data.coverImage, bannerImage: data.bannerImage, isInline: true })
        };
    });
};
