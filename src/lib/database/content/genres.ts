import { IAnime, IFetchTranslationContext, IManga, INewTranslationContext } from '.';
import { Anime, Manga } from './model';

const addTranslation = async (to: string, message: string, response: IAnime | IManga): Promise<boolean> => {
    response.genres.set(to, message);

    return response.save().then(() => true).catch(() => false);
};

const fetchTranslation = (to: string, response: IAnime | IManga): string => {
    if (null !== response && undefined !== response.genres.get(to)) {
        return <string>response.genres.get(to);
    }

    return '';
};

export const fetchGenresTranslation = async ({ id, to, request }: IFetchTranslationContext): Promise<string> => {
    const curriedFetchTranslation = ((data: IAnime | IManga) => fetchTranslation(to, data));

    if ('ANIME' === request) {
        return Anime.findById(id).then(curriedFetchTranslation).catch(() => '');
    }

    return Manga.findById(id).then(curriedFetchTranslation).catch(() => '');
};

export const newGenresTranslation = async ({ id, to, request, message }: INewTranslationContext): Promise<boolean> => {
    const options = { upsert: true, new: true, runValidators: true, setDefaultsOnInsert: true };
    const curriedAddTranslation = (async (response: IAnime | IManga) => addTranslation(to, message, response));

    if ('ANIME' === request) {
        return Anime.findByIdAndUpdate(id, {}, options).then(curriedAddTranslation).catch(() => false);
    }

    return Manga.findByIdAndUpdate(id, {}, options).then(curriedAddTranslation).catch(() => false);
};
