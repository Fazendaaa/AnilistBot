import emojiRegex from 'emoji-regex';
import { ITelegramContext } from '..';

const createRegExp = emojiRegex();

export const sanitize = ({ message }: ITelegramContext): string => message.replace(createRegExp, '');

export const fetchPage = (input: string): number => {
    const value = parseInt(input, 10);

    return (isNaN(value)) ? 0 : value;
};
