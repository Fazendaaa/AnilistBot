import { mediaMessage, charactersMessage, studiosMessage, staffMessage } from './parse/messageText';
import { mediaKeyboard, charactersKeyboard, staffKeyboard } from './parse/keyboard';
import { mediaDescription, charactersDescription, studiosDescription, staffDescription } from './parse/description';
import { mediaThumbUrl, charactersThumbUrl, staffThumbUrl } from './parse/thumbUrl';
import { mediaTitle, charactersTitle, staffTitle, studiosTitle } from './parse/title';
import { MinimumInline } from '../../telegram/inline';
import { CharactersContext, MediaContext, StudiosContext, StaffContext } from '.';
import { missingPng } from '../utils/common';

export const staffInfo = ({ staff, translation }: StaffContext): MinimumInline => {
    const { id, image, name } = staff;

    return {
        thumb_url: staffThumbUrl(image),
        title: staffTitle({ name, translation }),
        description: staffDescription({ translation }),
        message_text: staffMessage({ staff, translation }),
        reply_markup: staffKeyboard({ id, translation, type: 'STAFF' })
    };
};

export const studiosInfo = ({ studios, translation }: StudiosContext): MinimumInline => {
    const { name } = studios;

    return {
        thumb_url: missingPng,
        title: studiosTitle({ name, translation }),
        description: studiosDescription({ translation }),
        message_text: studiosMessage({ studios, translation })
    };
};

export const charactersInfo = ({ characters, translation }: CharactersContext): MinimumInline => {
    const { id, name, image } = characters;

    return {
        thumb_url: charactersThumbUrl(image),
        title: charactersTitle({ name, translation }),
        description: charactersDescription({ translation }),
        message_text: charactersMessage({ characters, translation }),
        reply_markup: charactersKeyboard({ id, translation, type: 'CHARACTER' })
    };
};

export const mediaInfo = ({ media, translation }: MediaContext): MinimumInline  => {
    const { id, title, format, coverImage, bannerImage, type, source, nextAiringEpisode } = media;

    return {
        title: mediaTitle({ title, translation }),
        message_text: mediaMessage({ media, translation }),
        thumb_url: mediaThumbUrl({ coverImage, bannerImage }),
        reply_markup: mediaKeyboard({ id, type, translation }),
        description: mediaDescription({ title, format, source, nextAiringEpisode, translation })
    };
};
