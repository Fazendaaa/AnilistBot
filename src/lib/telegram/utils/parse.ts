import emojiRegex from 'emoji-regex';

const createRegExp = emojiRegex();

export const sanitize = (message: string): string => message.replace(createRegExp, '');

export const fetchPage = (input: string): number => {
    const value = parseInt(input, 10);

    return (isNaN(value)) ? 1 : value;
};

// timezone has to replace the "_" with spaces, otherwise i18n will throw a compile template error.
export const parseTimezone = (input: string): string => {
    const city = input.split('/')[1];

    return city.replace('_', ' ');
};
