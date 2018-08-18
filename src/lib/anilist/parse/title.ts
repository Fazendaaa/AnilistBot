import { NameContext, TitleContext } from '.';

export const mediaTitle = ({ title, translation }: TitleContext): string => {
    if (null !== title.english) {
        return title.english;
    } if (null !== title.native) {
        return title.native
    } if (null !== title.romaji) {
        return title.romaji;
    }

    return translation.t('notAvailable');
};

export const nameTitle = ({ name, translation }: NameContext): string => {
    if (null !== name.first) {
        return name.first;
    } if (null !== name.last) {
        return name.last;
    } if (null !== name.native) {
        return name.native;
    }

    return translation.t('notAvailable');
};
