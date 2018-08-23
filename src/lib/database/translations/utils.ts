import { Translation } from '.';

export const fetchTranslation = (to: string, response: Translation): string => {
    if (null !== response && undefined !== response && undefined !== response.languages[to]) {
        return response[to].message;
    }

    return '';
};

export const addTranslation = (to: string, message: string, response: Translation): Promise<boolean> => {
    response.languages[to] = message;

    return response.save().then(() => true).catch(() => false);            
};
