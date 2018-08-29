import { FetchTranslationContext, NewTranslationContext, Translation } from '.';
import { animeGenres, mangaGenres } from './model';
import { addTranslation, fetchTranslation } from './utils';

export const fetchGenresTranslation = async ({ id, to, request }: FetchTranslationContext): Promise<string> => {
    const curriedFetchLanguage = ((data: Translation) => fetchTranslation(to, data));

    if ('ANIME' === request) {
        return animeGenres.findById(id).then(curriedFetchLanguage).catch(() => '');
    }

    return mangaGenres.findById(id).then(curriedFetchLanguage).catch(() => '');
};

export const newGenresTranslation = async ({ id, to, request, message }: NewTranslationContext): Promise<boolean> => {
    const options = { upsert: true, new: true, runValidators: true, setDefaultsOnInsert: true };
    const curriedAddTranslation = (async (response: Translation) => addTranslation(to, message, response));

    if ('ANIME' === request) {
        return animeGenres.findByIdAndUpdate(id, {}, options).then(curriedAddTranslation).catch(() => false);
    }

    return mangaGenres.findByIdAndUpdate(id, {}, options).then(curriedAddTranslation).catch(() => false);
};
