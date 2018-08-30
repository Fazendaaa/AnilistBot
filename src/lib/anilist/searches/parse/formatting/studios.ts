import { IStudiosNameContext } from '.';

export const studiosName = ({ name, translation }: IStudiosNameContext): string => {
    if (null !== name) {
        return name;
    }

    return translation.t('notAvailable');
};
