import { MediaDescriptionContext, CharacterDescriptionContext } from '.';
import { mediaFormat, mediaSource, toNextAiring } from './formatting/media';

export const mediaDescription = ({ title, format, source, nextAiringEpisode, translation }: MediaDescriptionContext): string => {
    let response = '';

    if (null === title.english && null !== title.romaji) {
        response += title.romaji + '\n';
    } if (null !== nextAiringEpisode && null !== nextAiringEpisode.timeUntilAiring) {
        response += translation.t('countdown') + toNextAiring({ nextAiringEpisode, translation }) + '\n';
    } if (null !== format) {
        response += translation.t('fmt') + mediaFormat({ format, translation }) + '\n';
    } if (null !== source) {
        response += translation.t('src') + mediaSource({ source, translation });
    }

    return response;
};

export const characterDescription = ({ translation }: CharacterDescriptionContext): string => {
    return translation.t('fmt') + translation.t('character');
};
