import { mediaMessage, characterMessage } from './parse/messageText';
import { mediaKeyboard, characterKeyboard } from './parse/keyboard';
import { mediaDescription, characterDescription } from './parse/description';
import { mediaThumbUrl, characterThumbUrl } from './parse/thumbUrl';
import { nameTitle, mediaTitle } from './parse/title';
import { MinimumInline } from '../../telegram/inline';
import { CharactersContext, MediaContext } from '.';

export const charactersInfo = ({ characters, translation }: CharactersContext): MinimumInline => {
    const { id, name, image } = characters;

    return {
        thumb_url: characterThumbUrl(image),
        title: nameTitle({ name, translation }),
        description: characterDescription({ translation }),
        message_text: characterMessage({ characters, translation }),
        reply_markup: characterKeyboard({ id, translation, type: 'CHARACTER' })
    };
};

export const mediaInfo = ({ media, translation }: MediaContext): MinimumInline  => {
    const { id, title, format, coverImage, bannerImage, type, source } = media;

    return {
        title: mediaTitle({ title, translation }),
        message_text: mediaMessage({ media, translation }),
        thumb_url: mediaThumbUrl({ coverImage, bannerImage }),
        reply_markup: mediaKeyboard({ id, type, translation }),
        description: mediaDescription({ format, source, translation })
    };
};
