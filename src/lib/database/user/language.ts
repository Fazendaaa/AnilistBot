import { IDBUser, ILanguageContext } from '.';
import { User } from './model';

const changeLanguage = async (language: string, user: IDBUser): Promise<boolean> => {
    user.language = language;

    return user.save().then(() => true).catch(() => false);
};

export const setLanguage = async ({ id, language }: ILanguageContext): Promise<boolean> => {
    const options = { upsert: true, new: true, runValidators: true, setDefaultsOnInsert: true };
    const curriedLanguage = (async (user: IDBUser) => changeLanguage(language, user));

    return User.findByIdAndUpdate(id, {}, options).then(curriedLanguage).catch(() => false);
};
