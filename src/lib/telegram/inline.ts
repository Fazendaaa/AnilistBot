import { InlineKeyboardMarkup, InlineQueryResultArticle } from 'telegram-typings';

export interface MinimumInline {
    title: string;
    thumb_url: string;
    description: string;
    message_text: string;
    reply_markup?: InlineKeyboardMarkup;
}

export const toInlineArticle = (input: MinimumInline[]): InlineQueryResultArticle[] => {
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
