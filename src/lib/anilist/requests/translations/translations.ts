import { config } from 'dotenv';
import translate from 'translate';
import { TranslateDescriptionContext, TranslateGenresContext } from '..';
import { fetchDescriptionTranslation, newDescriptionTranslation } from '../../../database/translations/descriptions';
import { fetchGenresTranslation, newGenresTranslation } from '../../../database/translations/genres';

config();

translate.key = process.env.GOOGLE_KEY;

export const translateDescription = async ({ id, to, request, message }: TranslateDescriptionContext): Promise<string> => {
    const description = await fetchDescriptionTranslation({ id, to, request });

    if ('' === description) {
        const text = await translate(message, { from: 'en', to });

        newDescriptionTranslation({ message: text, id, to, request });

        return text;
    }

    return description;
};

export const translateGenres = async ({ id, to, request, message }: TranslateGenresContext): Promise<string> => {
    const genres = await fetchGenresTranslation({ id, to, request });

    if ('' === genres) {
        const text = await translate(message, { from: 'en', to });

        newGenresTranslation({ message: text, id, to, request });

        return text;
    }

    return genres;
};
