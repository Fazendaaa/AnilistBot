import striptags from 'striptags';
import { fetchDescriptionTranslation, newDescriptionTranslation } from '../../database/content/descriptions';
import { fetchGenresTranslation, newGenresTranslation } from '../../database/content/genres';
import { ITranslateDescriptionContext, ITranslateGenresContext } from '../requests';
import { translate } from './utils';

export const translateDescription = async ({ id, to, content, message }: ITranslateDescriptionContext): Promise<string> => {
    const description = await fetchDescriptionTranslation({ id, to, content });

    if ('' === description) {
        const text = await translate({ src: 'en', message: striptags(message), to });

        newDescriptionTranslation({ message: text, id, to, content });

        return text;
    }

    return description;
};

export const translateGenres = async ({ id, to, content, message }: ITranslateGenresContext): Promise<string> => {
    const genres = await fetchGenresTranslation({ id, to, content });

    if ('' === genres) {
        const text = await translate({ src: 'en', message, to });

        newGenresTranslation({ message: text, id, to, content });

        return text;
    }

    return genres;
};
