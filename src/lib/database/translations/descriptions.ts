import { FetchTranslationContext, NewTranslationContext, Translation } from '.';
import { animeDescription, characterDescription, mangaDescription, staffDescription } from './model';
import { addTranslation, fetchTranslation } from './utils';

export const fetchDescriptionTranslation = async ({ id, to, request }: FetchTranslationContext): Promise<string> => {
    const curriedFetchLanguage = ((response: Translation) => fetchTranslation(to, response));

    if ('ANIME' === request) {
        return animeDescription.findById(id).then(curriedFetchLanguage).catch(() => '');
    } if ('MANGA' === request) {
        return mangaDescription.findById(id).then(curriedFetchLanguage).catch(() => '');
    } if ('CHARACTER' === request) {
        return characterDescription.findById(id).then(curriedFetchLanguage).catch(() => '');
    }

    return staffDescription.findById(id).then(curriedFetchLanguage).catch(() => '');
};

export const newDescriptionTranslation = async  ({ id, to, request, message }: NewTranslationContext): Promise<boolean> => {
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };
    const curriedAddTranslation = (async (response: Translation) => addTranslation(to, message, response));

    if ('ANIME' === request) {
        return animeDescription.findByIdAndUpdate(id, {}, options).then(curriedAddTranslation).catch(() => false);
    } if ('MANGA' === request) {
        return mangaDescription.findByIdAndUpdate(id, {}, options).then(curriedAddTranslation).catch(() => false);
    } if ('CHARACTER' === request) {
        return characterDescription.findByIdAndUpdate(id, {}, options).then(curriedAddTranslation).catch(() => false);
    }

    return staffDescription.findByIdAndUpdate(id, {}, options).then(curriedAddTranslation).catch(() => false);
};
