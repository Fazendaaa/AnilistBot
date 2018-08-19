import { StudiosNameContext } from '.';

export const studiosName = ({ name, translation }: StudiosNameContext): string => {
    if (null !== name) {
        return name;
    }

    return translation.t('notAvailable');
};
