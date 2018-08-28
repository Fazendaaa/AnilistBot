import { CharactersNameContext, StaffNameContext, StudiosNameContext, TitleContext } from '.';

export const mediaTitle = ({ title, translation }: TitleContext): string => {
    if (null !== title.english) {
        return title.english;
    } if (null !== title.native) {
        return title.native;
    } if (null !== title.romaji) {
        return title.romaji;
    }

    return translation.t('notAvailable');
};

export const charactersTitle = ({ name, translation }: CharactersNameContext): string => {
    if (null !== name.first) {
        return name.first;
    } if (null !== name.last) {
        return name.last;
    } if (null !== name.native) {
        return name.native;
    }

    return translation.t('notAvailable');
};

export const staffTitle = ({ name, translation }: StaffNameContext): string => {
    if (null !== name.first) {
        return name.first;
    } if (null !== name.last) {
        return name.last;
    } if (null !== name.native) {
        return name.native;
    }

    return translation.t('notAvailable');
};

export const studiosTitle = ({ name, translation }: StudiosNameContext): string => {
    if (null !== name) {
        return name;
    }

    return translation.t('notAvailable');
};
