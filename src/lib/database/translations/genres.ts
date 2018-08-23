import { FetchTranslationContext, NewTranslationContext, Translation } from '.';
import { animeGenres, mangaGenres } from './model';
import { addTranslation, fetchTranslation } from './utils';

export const fetchGenresTranslation = ({ id, to, type }: FetchTranslationContext): Promise<string> => {
    const curriedFetchLanguage = ((data: Translation) => fetchTranslation(to, data));
    
    if ('ANIME' === type) {
        return animeGenres.findById(id).then(curriedFetchLanguage).catch(() => '');
    }

    return mangaGenres.findById(id).then(curriedFetchLanguage).catch(() => '');
};

export const newGenresTranslation = async ({ id, to, type, message }: NewTranslationContext): Promise<boolean> => {
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };
    const curriedAddTranslation = ((response: Translation) => addTranslation(to, message, response));

    if ('ANIME' === type) {
        return animeGenres.findByIdAndUpdate(id, {}, options).then(curriedAddTranslation).catch(() => false);
    }

    return mangaGenres.findByIdAndUpdate(id, {}, options).then(curriedAddTranslation).catch(() => false);
};
