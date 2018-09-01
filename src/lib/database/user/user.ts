import { IDBUser, IUserAllContext, IUserContext, IUserLanguageContext, IUserSetLanguageContext } from '.';
import { User } from './model';

const setLanguage = async ({ user, language }: IUserSetLanguageContext): Promise<boolean> => {
    user.language = language;

    return user.save().then(() => true).catch(() => false);
};

export const userAll = async ({ success, error }: IUserAllContext): Promise<void> => User.find({}).then(success).catch(error);

export const userFind = async ({ id, success, error }: IUserContext): Promise<void> => {
    const options = { upsert: true, new: true, runValidators: true, setDefaultsOnInsert: true };

    return User.findByIdAndUpdate(id, {}, options).then(success).catch(error);
};

export const userLanguage = async ({ id, language }: IUserLanguageContext): Promise<boolean> => {
    const options = { upsert: true, new: true, runValidators: true, setDefaultsOnInsert: true };
    const curriedSetLanguage = (async (user: IDBUser) => setLanguage({ user, language }));

    return User.findByIdAndUpdate(id, {}, options).then(curriedSetLanguage).catch(() => false);
};
