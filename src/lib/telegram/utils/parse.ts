import emojiRegex from 'emoji-regex';
import { TelegramContext } from '..';

const createRegExp = emojiRegex();

export const sanitize = ({ message }: TelegramContext): string => message.replace(createRegExp, '');
