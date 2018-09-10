import { lookupViaCity } from 'city-timezones';
import { IHandleLocation, IHandleRemoveLocation, ILocationData } from '.';
import { userRemoveTimezone, userSetTimezone } from '../../database/user/user';
import { ICityInfo } from '../scene';

export const handleRemoveLocation = async ({ id, confirm, translation }: IHandleRemoveLocation): Promise<string> => {
    if (null === confirm) {
        return translation.t('removeLocationOptions');
    } if ('NO' === confirm) {
        return translation.t('removeLocationNoOptions');
    }

    return userRemoveTimezone(id)
           .then(result => (true === result) ? translation.t('setRemoveLocation') : translation.t('errorSetRemoveLocation'))
           .catch(() => translation.t('errorSetRemoveLocation'));
};

export const handleLocationCity = (user: ICityInfo): ILocationData => {
    const cities = lookupViaCity(user.city);

    if (cities.length >= user.position) {
        const { city, province, country, timezone } = cities[user.position];

        user.timezone = timezone;

        return {
            city,
            country,
            province
        };
    }

    return {
        city: user.city
    };
};

export const handleLocation = ({ id, confirm, request, translation }: IHandleLocation): string => {
    if ('ASK' === request) {
        return translation.t('askLocationOptions');
    }

    return translation.t('sendLocationOptions');
};

export const handleTimezone = async ({ id, timezone, translation }): Promise<string> => {
    return userSetTimezone({ id, timezone })
           .then(value => ('' !== value) ? translation.t('setTimezone', { timezone }) : translation.t('errorSetTimezone'))
           .catch(translation.t('errorSetTimezone'));
};
