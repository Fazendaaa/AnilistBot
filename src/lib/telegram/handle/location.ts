import { ILocationExtraContext } from '../extra';
import { askLocationExtra, locationExtra, sendLocationExtra } from '../extra/location';

export const handleLocation = ({ request, translation }: ILocationExtraContext): string => {
    if ('ASK' === request) {
        return translation.t('askLocationOptions');
    } if ('SEND' === request) {
        return translation.t('sendLocationOptions');
    }

    return translation.t('locationOptions');
};

export const handleLocationExtra = ({ request, translation }: ILocationExtraContext) => {
    if ('ASK' === request) {
        return askLocationExtra();
    } if ('SEND' === request) {
        return sendLocationExtra(translation);
    }

    return locationExtra(translation);
};
