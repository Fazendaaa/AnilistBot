import { fetchData } from 'endeavor';
import content from '../utils/queries/inline/content.gql';
import { QueryPageContent } from '../utils/queries/inline/inline';
import { I18n } from 'telegraf-i18n';
import { MinimumInline } from '../../telegram/inline';
import { filterTitle } from '../utils/parse';
import { contentMessage } from '../utils/messageText';

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
            search: ('' === query) ?  null : query
        }
    });

    return searched.data.Page.media.map(data => {
        return {
            title: filterTitle(data.title),
            thumb_url: data.coverImage.medium,
            description: data.season,
            message_text: contentMessage({ data, translation })
        };
    }); 
};
