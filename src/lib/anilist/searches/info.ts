import { ICharactersContext, IMediaContext, IStaffContext, IStudiosContext } from '.';
import { IMinimumInline } from '../../telegram/';
import { missingPng } from '../utils/common';
import { charactersDescription, mediaDescription, staffDescription, studiosDescription } from '../utils/parse/description';
import { charactersKeyboard, mediaKeyboard, staffKeyboard } from '../utils/parse/keyboard';
import { charactersMessage, mediaMessage , staffMessage, studiosMessage } from '../utils/parse/messageText';
import { charactersThumbUrl, mediaThumbUrl, staffThumbUrl } from '../utils/parse/thumbUrl';
import { charactersTitle, mediaTitle, staffTitle, studiosTitle } from '../utils/parse/title';

export const staffInfo = ({ staff, translation }: IStaffContext): IMinimumInline => {
    const { id, image, name } = staff;

    return {
        thumb_url: staffThumbUrl(image),
        title: staffTitle({ name, translation }),
        description: staffDescription({ translation }),
        message_text: staffMessage({ staff, translation }),
        reply_markup: staffKeyboard({ id, translation, type: 'STAFF' })
    };
};

export const studiosInfo = ({ studios, translation }: IStudiosContext): IMinimumInline => {
    const { name } = studios;

    return {
        thumb_url: missingPng,
        title: studiosTitle({ name, translation }),
        description: studiosDescription({ translation }),
        message_text: studiosMessage({ studios, translation })
    };
};

export const charactersInfo = ({ characters, translation }: ICharactersContext): IMinimumInline => {
    const { id, name, image } = characters;

    return {
        thumb_url: charactersThumbUrl(image),
        title: charactersTitle({ name, translation }),
        description: charactersDescription({ translation }),
        message_text: charactersMessage({ characters, translation }),
        reply_markup: charactersKeyboard({ id, translation, type: 'CHARACTER' })
    };
};

export const mediaInfo = ({ media, translation }: IMediaContext): IMinimumInline  => {
    const { id, title, format, coverImage, bannerImage, type, source, nextAiringEpisode } = media;

    return {
        title: mediaTitle({ title, translation }),
        message_text: mediaMessage({ media, translation }),
        thumb_url: mediaThumbUrl({ coverImage, bannerImage }),
        reply_markup: mediaKeyboard({ id, type, translation }),
        description: mediaDescription({ title, format, source, nextAiringEpisode, translation })
    };
};
