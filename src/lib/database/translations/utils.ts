import { Translation } from '.';

export const fetchTranslation = (to: string, response: Translation): string => {
    if (null !== response && undefined !== response && undefined !== response.languages[to]) {
        return response.languages[to].message;
    }

    return '';
};

export const addTranslation = (to: string, message: string, response: Translation): Promise<boolean> => {    
    if (undefined === response.languages) {
        response.languages = {};
    }

    response.languages[to] = {
        message,
        date: new Date(),
    };

    return response.save().then(() => true).catch(() => false);
};
