import { Translation, Language } from '.';

export const fetchLanguage = (to: string, response: Language): string => {
    if (null !== response[to] && undefined !== response[to]) {
        return response[to].message;
    }

    return '';
};

export const addTranslation = (to: string, message: string, response: Translation): Promise<boolean> => {
    response.languages[to] = message;

    return response.save().then(() => true).catch(() => false);
};
