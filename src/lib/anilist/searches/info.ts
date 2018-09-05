import { ICharactersContext, IMediaContext, INotFoundContext, IStaffContext, IStudiosContext } from '.';
import { IMinimumInline } from '../../telegram/';
import { charactersKeyboard, mediaKeyboard, staffKeyboard } from '../../telegram/keyboard/media';
import { charactersDescription, mediaDescription, staffDescription, studiosDescription } from '../parse/description';
import { charactersMessage, mediaMessage , staffMessage, studiosMessage } from '../parse/messageText';
import { charactersThumbUrl, mediaThumbUrl, staffThumbUrl } from '../parse/thumbUrl';
import { charactersTitle, mediaTitle, staffTitle, studiosTitle } from '../parse/title';
import { missingPng, notFoundPng } from '../utils/common';

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

export const notFoundInfo = ({ search, translation }: INotFoundContext): IMinimumInline => {
    return {
        thumb_url: notFoundPng,
        title: translation.t('notFoundTitle'),
        description: translation.t('notFoundDescription', { search }),
        message_text: translation.t('notFoundMessageText', { search })
    };
};
