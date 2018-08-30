import { ITranslateDescriptionContext, ITranslateGenresContext } from '..';
import { fetchDescriptionTranslation, newDescriptionTranslation } from '../../../database/content/descriptions';
import { fetchGenresTranslation, newGenresTranslation } from '../../../database/content/genres';
import { translate } from './utils';

export const translateDescription = async ({ id, to, request, message }: ITranslateDescriptionContext): Promise<string> => {
    const description = await fetchDescriptionTranslation({ id, to, request });

    if ('' === description) {
        const text = await translate({ src: 'en', message, to });

        newDescriptionTranslation({ message: text, id, to, request });

        return text;
    }

    return description;
};

export const translateGenres = async ({ id, to, request, message }: ITranslateGenresContext): Promise<string> => {
    const genres = await fetchGenresTranslation({ id, to, request });

    if ('' === genres) {
        const text = await translate({ src: 'en', message, to });

        newGenresTranslation({ message: text, id, to, request });

        return text;
    }

    return genres;
};
