import { FetchTranslationContext, NewTranslationContext, Translation } from '.';
import { animeDescription, mangaDescription, characterDescription, staffDescription } from './model';
import { addTranslation, fetchTranslation } from './utils';

export const fetchDescriptionTranslation = async ({ id, to, type }: FetchTranslationContext): Promise<string> => {
    const curriedFetchLanguage = ((response: Translation) => fetchTranslation(to, response));

    if ('ANIME' === type) {
        return animeDescription.findById(id).then(curriedFetchLanguage).catch(() => '');
    } if ('MANGA' === type) {
        return mangaDescription.findById(id).then(curriedFetchLanguage).catch(() => '');
    } if ('CHARACTER' === type) {
        return characterDescription.findById(id).then(curriedFetchLanguage).catch(() => '');
    }

    return staffDescription.findById(id).then(curriedFetchLanguage).catch(() => '');
};

export const newDescriptionTranslation = async ({ id, to, type, message }: NewTranslationContext): Promise<boolean> => {
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };
    const curriedAddTranslation = ((response: Translation) => addTranslation(to, message, response));

    if ('ANIME' === type) {
        return animeDescription.findByIdAndUpdate(id, {}, options).then(curriedAddTranslation).catch(() => false);
    } if ('MANGA' === type) {
        return mangaDescription.findByIdAndUpdate(id, {}, options).then(curriedAddTranslation).catch(() => false);
    } if ('CHARACTER' === type) {
        return characterDescription.findByIdAndUpdate(id, {}, options).then(curriedAddTranslation).catch(() => false);
    }

    return staffDescription.findByIdAndUpdate(id, {}, options).then(curriedAddTranslation).catch(() => false);
};
