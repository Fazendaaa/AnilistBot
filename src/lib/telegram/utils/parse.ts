import emojiRegex from 'emoji-regex';

const createRegExp = emojiRegex();

export const sanitize = (message: string): string => message.replace(createRegExp, '');

export const fetchPage = (input: string): number => {
    const value = parseInt(input, 10);

    return (isNaN(value)) ? 1 : value;
};
