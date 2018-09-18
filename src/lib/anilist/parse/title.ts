import { ICharactersNameContext, IStaffNameContext, IStudiosNameContext, ITitleContext } from '.';

export const mediaTitle = ({ title, translation }: ITitleContext): string => {
    if (null !== title.english && '' !== title.english) {
        return title.english;
    } if (null !== title.romaji && '' !== title.romaji) {
        return title.romaji;
    } if (null !== title.native && '' !== title.native) {
        return title.native;
    }

    return translation.t('notAvailable');
};

export const charactersTitle = ({ name, translation }: ICharactersNameContext): string => {
    if (null !== name.first && '' !== name.first) {
        return name.first;
    } if (null !== name.last && '' !== name.last) {
        return name.last;
    } if (null !== name.native && '' !== name.native) {
        return name.native;
    }

    return translation.t('notAvailable');
};

export const staffTitle = ({ name, translation }: IStaffNameContext): string => {
    if (null !== name.first && '' !== name.first) {
        return name.first;
    } if (null !== name.last && '' !== name.last) {
        return name.last;
    } if (null !== name.native && '' !== name.native) {
        return name.native;
    }

    return translation.t('notAvailable');
};

export const studiosTitle = ({ name, translation }: IStudiosNameContext): string => {
    if (null !== name && '' !== name) {
        return name;
    }

    return translation.t('notAvailable');
};
