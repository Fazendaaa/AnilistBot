import { FetchTranslationContext, NewTranslationContext, Language, Translation } from '.';
import { animeDescription, mangaDescription, characterDescription, staffDescription } from './model';

const fetchLanguage = (to: string, response: Language): string => {
    if (null !== response[to] && undefined !== response[to]) {
        return response[to].message;
    }

    return '';
};

const addTranslation = (to: string, message: string, response: Translation): Promise<boolean> => {
    response.languages[to] = message;

    return response.save().then(() => true).catch(() => false);
};

export const fetchDescriptionTranslation = async ({ id, to, type }: FetchTranslationContext): Promise<string> => {
    const curriedFetchLanguage = ((response: Language) => fetchLanguage(to, response));

    if ('ANIME' === type) {
        return animeDescription.findOne({ _id: id }, 'languages').then(curriedFetchLanguage).catch(() => '');
    } if ('MANGA' === type) {
        return mangaDescription.findOne({ _id: id }, 'languages').then(curriedFetchLanguage).catch(() => '');
    } if ('CHARACTER' === type) {
        return characterDescription.findOne({ _id: id }, 'languages').then(curriedFetchLanguage).catch(() => '');
    }

    return staffDescription.findOne({ _id: id }, 'languages').then(curriedFetchLanguage).catch(() => '');
};

export const newDescriptionTranslation = async ({ id, to, type, message }: NewTranslationContext): Promise<boolean> => {
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };
    const curriedAddTranslation = ((response: Translation) => addTranslation(to, message, response));

    if ('ANIME' === type) {
        return animeDescription.findOneAndUpdate({ _id: id }, options).then(curriedAddTranslation).catch(() => false);
    } if ('MANGA' === type) {
        return mangaDescription.findOneAndUpdate({ _id: id }, options).then(curriedAddTranslation).catch(() => false);
    } if ('CHARACTER' === type) {
        return characterDescription.findOneAndUpdate({ _id: id }, options).then(curriedAddTranslation).catch(() => false);
    }

    return staffDescription.findOneAndUpdate({ _id: id }, options).then(curriedAddTranslation).catch(() => false);
};
