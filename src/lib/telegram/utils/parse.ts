import emojiRegex from 'emoji-regex';
import { TelegramContext } from '..';

const createRegExp = emojiRegex();

export const sanitize = ({ message }: TelegramContext): string => message.replace(createRegExp, '');

export const fetchPage = (input: string): number => {
    const value = parseInt(input, 10);

    return (isNaN(value)) ? 0 : value;
};
