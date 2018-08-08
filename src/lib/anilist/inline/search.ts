import { fetchData } from 'endeavor';
import content from '../queries/inline/content.gql';
import { QueryPageContent } from '../utils/queries/inline/inline';
import { I18n } from 'telegraf-i18n';
import { MinimumInline } from '../../telegram/inline';
import { filterTitle } from '../utils/parse';

interface SearchContext {
    query: string;
    translation: I18n;
}

export const searchContent = async ({ query }: SearchContext): Promise<Array<MinimumInline>> => {
    const searched = <QueryPageContent> await fetchData({
        query: content,
        variables: {
            page: 0,
            perPage: 20,
            search: ('' === query) ?  null : query
        }
    });

    return searched.data.Page.media.map(({ season, coverImage, title }) => {
        return {
            title: filterTitle(title),
            thumb_url: coverImage.medium,
            description: season,
            message_text: 'Bar'
        };
    }); 
};
