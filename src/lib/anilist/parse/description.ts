import { MediaDescriptionContext, CharacterDescriptionContext } from '.';
import { mediaFormat, mediaSource } from '../formatting/media';

export const mediaDescription = ({ format, source, translation }: MediaDescriptionContext): string => {
    let response = '';

    if (null === format && null === source) {
        return translation.t('notAvailable');
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
