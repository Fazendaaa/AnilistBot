import { TelegramContext } from '..';
import emojiRegex from 'emoji-regex';

const createRegExp = emojiRegex();

export const sanitize = ({ message }: TelegramContext): string => message.replace(createRegExp, '');
