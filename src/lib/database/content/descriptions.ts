import { AllContent, IFetchTranslationContext, INewTranslationContext } from '.';
import { Anime, Character, Manga, Staff } from './model';

const fetchTranslation = (to: string, response: AllContent): string => {
    if (null !== response && undefined !== response.description.get(to)) {
        return <string>response.description.get(to);
    }

    return '';
};

const addTranslation = async (to: string, message: string, response: AllContent): Promise<boolean> => {
    response.description.set(to, message);

    return response.save().then(() => true).catch(() => false);
};

export const fetchDescriptionTranslation = async ({ id, to, content }: IFetchTranslationContext): Promise<string> => {
    const curriedFetchLanguage = ((response: AllContent) => fetchTranslation(to, response));

    if ('ANIME' === content) {
        return Anime.findById(id).then(curriedFetchLanguage).catch(() => '');
    } if ('MANGA' === content) {
        return Manga.findById(id).then(curriedFetchLanguage).catch(() => '');
    } if ('STAFF' === content) {
        return Staff.findById(id).then(curriedFetchLanguage).catch(() => '');
    }

    return Character.findById(id).then(curriedFetchLanguage).catch(() => '');
};

export const newDescriptionTranslation = async ({ id, to, content, message }: INewTranslationContext): Promise<boolean> => {
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };
    const curriedAddTranslation = (async (response: AllContent) => addTranslation(to, message, response));

    if ('ANIME' === content) {
        return Anime.findByIdAndUpdate(id, {}, options).then(curriedAddTranslation).catch(() => false);
    } if ('MANGA' === content) {
        return Manga.findByIdAndUpdate(id, {}, options).then(curriedAddTranslation).catch(() => false);
    } if ('STAFF' === content) {
        return Staff.findByIdAndUpdate(id, {}, options).then(curriedAddTranslation).catch(() => false);
    }

    return Character.findByIdAndUpdate(id, {}, options).then(curriedAddTranslation).catch(() => false);
};
