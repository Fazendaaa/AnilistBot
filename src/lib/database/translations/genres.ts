import { FetchTranslationContext, NewTranslationContext, Translation, Language } from '.';
import { animeGenres, mangaGenres } from './model';
import { addTranslation, fetchLanguage } from './utils';

export const fetchGenresTranslation = ({ id, to, type }: FetchTranslationContext): Promise<string> => {
    const curriedFetchLanguage = ((data: Language) => fetchLanguage(to, data));

    if ('ANIME' === type) {
        return animeGenres.findOne({ _id: id }, 'languages').then(curriedFetchLanguage).catch(() => '');
    }

    return mangaGenres.findOne({ _id: id }, 'languages').then(curriedFetchLanguage).catch(() => '');
};

export const newGenresTranslation = async ({ id, to, type, message }: NewTranslationContext): Promise<boolean> => {
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };
    const curriedAddTranslation = ((response: Translation) => addTranslation(to, message, response));

    if ('ANIME' === type) {
        return animeGenres.findOneAndUpdate({ _id: id }, options).then(curriedAddTranslation).catch(() => false);
    }

    return mangaGenres.findOneAndUpdate({ _id: id }, options).then(curriedAddTranslation).catch(() => false);
};
