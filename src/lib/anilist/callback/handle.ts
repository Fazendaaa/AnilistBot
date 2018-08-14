import { MediaFormat, MediaType } from '..';
import { I18n } from 'telegraf-i18n';
import { fetchData } from 'endeavor';
import anime from '../queries/callback/anime.gql';
import manga from '../queries/callback/manga.gql';
import { CallbackResponse } from '../queries/callback';

export type CallbackFiled = 'list' |
                            'users' |
                            'genres' |
                            'description' 

interface SearchContext {
    id: number;
    type: MediaType;
    translation: I18n;
    field: CallbackFiled;
}

interface LimitContext {
    size: number;
    message: string;
}

const limitSize = ({ message, size }: LimitContext): string => message.slice(0, size);

export const handleCallback = async ({ id, type, field, translation }: SearchContext): Promise<string> => {
    const fetch = <CallbackResponse> await fetchData({
        query: ('ANIME' === type) ? anime : manga,
        variables: { id }
    });

    return limitSize({ message: fetch.data.Media.description, size: 120 });
};
