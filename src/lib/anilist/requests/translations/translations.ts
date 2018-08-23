import { config } from 'dotenv';
import translate from 'translate';
import { TranslateDescriptionContext, TranslateGenresContext } from '..';
import { fetchGenresTranslation, newGenresTranslation } from '../../../database/translations/genres';
import { fetchDescriptionTranslation, newDescriptionTranslation } from '../../../database/translations/descriptions';

config();

translate.key = process.env.GOOGLE_KEY;

export const translateDescription = async ({ id, to, type, message }: TranslateDescriptionContext): Promise<string> => {
    const description = await fetchDescriptionTranslation({ id, to, type });

    if ('' === description) {
        const text = await translate(message, { from: 'en', to });

        newDescriptionTranslation({ message: text, id, to, type });

        return text;
    }

    return description;
};

export const translateGenres = async ({ id, to, type, message }: TranslateGenresContext): Promise<string> => {
    const genres = await fetchGenresTranslation({ id, to, type });

    if ('' === genres) {
        const text = await translate(message, { from: 'en', to });

        await newGenresTranslation({ message: text, id, to, type });

        return text;
    }

    return genres;
};
