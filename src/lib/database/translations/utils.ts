import { Translation } from '.';

export const fetchTranslation = (to: string, response: Translation): string => {
    if (null !== response && undefined !== response && undefined !== response.languages.get(to)) {
        return response.languages.get(to);
    }

    return '';
};

export const addTranslation = (to: string, message: string, response: Translation): Promise<boolean> => {
    response.languages.set(to, message);

    return response.save().then(() => true).catch(() => false);
};
