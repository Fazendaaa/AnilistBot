import { ImageContext } from '.';
import { CharacterImage, StaffImage } from '../..';
import { errorPng } from '../../utils/common';

export const mediaThumbUrl = ({ coverImage, bannerImage }: ImageContext): string => {
    if (null !== coverImage.medium) {
        return coverImage.medium;
    } if (null !== coverImage.large) {
        return coverImage.large;
    } if (null !== bannerImage) {
        return bannerImage;
    }

    return errorPng;
};

export const charactersThumbUrl = ({ medium, large }: CharacterImage): string => {
    if (null !== medium) {
        return medium;
    } if (null !== large) {
        return large;
    }

    return errorPng;
};

export const staffThumbUrl = ({ medium, large }: StaffImage): string => {
    if (null !== medium) {
        return medium;
    } if (null !== large) {
        return large;
    }

    return errorPng;
};
