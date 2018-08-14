import { fetchData } from 'endeavor';
import content from '../utils/queries/inline/content.gql';
import { QueryPageContent } from '../utils/queries/inline/inline';
import { I18n } from 'telegraf-i18n';
import { MinimumInline } from '../../telegram/inline';
import { contentMessage } from '../utils/messageText';
import { contentDescription } from '../utils/description';
import { imagePreview, titlePreview } from '../utils/preview';

interface SearchContext {
    query: string;
    translation: I18n;
}

export const searchContent = async ({ query, translation }: SearchContext): Promise<Array<MinimumInline>> => {
    const searched = <QueryPageContent> await fetchData({
        query: content,
        variables: {
            page: 0,
            perPage: 20,
            search: ('' === query) ? null : query
        }
    });

    return searched.data.Page.media.map(data => {
        return {
            title: titlePreview(data.title),
            message_text: contentMessage({ data, translation }),
            description: contentDescription({ season: data.season, description: data.description }),
            thumb_url: imagePreview({ coverImage: data.coverImage, bannerImage: data.bannerImage, isInline: true })
        };
    });
};
