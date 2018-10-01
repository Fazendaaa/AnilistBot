import { InlineQueryResultArticle } from 'telegram-typings';
import { IMinimumInline } from '.';

/**
 * @param input Common data to be inlined and then sent to Telegram in article inline mode.
 * @returns inlined article data.
 */
export const toInlineArticle = (input: IMinimumInline[]): InlineQueryResultArticle[] => {
    return input.map(({ title, thumb_url, description, message_text, reply_markup }, index) => {
        return {
            title,
            thumb_url,
            description,
            reply_markup,
            type: 'Article',
            id: index.toString(),
            input_message_content: {
                message_text,
                parse_mode: 'Markdown'
            }
        };
    });
};
