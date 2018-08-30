import { InlineQueryResultArticle } from 'telegram-typings';
import { IMinimumInline } from '.';

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
