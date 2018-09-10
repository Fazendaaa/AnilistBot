import { lookupViaCity } from 'city-timezones';
import { data } from 'node-google-timezone';
import { parseTimezone } from 'telegraf-parse';
import { IGoogleZone, IHandleLocation, IHandleRemoveLocation, IHandleSentLocation, IHandleTimezone, ILocationData } from '.';
import { userRemoveTimezone, userSetTimezone } from '../../database/user/user';
import { ICityInfo } from '../scene';

const googlezone = async ({ latitude, longitude }: IGoogleZone): Promise<string> => {
    return new Promise((resolve: (timezone: string) => void, reject: (err: Error) => void) => {
        data(latitude, longitude, 0, (err, tz) => {
            if (null !== err) {
                reject(err);
            }

            resolve(tz.raw_response.timeZoneId);
        });
    });
};

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

    if (cities.length > user.position) {
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

export const handleLocation = ({ request, translation }: IHandleLocation): string => {
    return ('ASK' === request) ? translation.t('askLocationOptions') : translation.t('sendLocationOptions');
};

export const handleTimezone = async ({ id, timezone, translation }: IHandleTimezone): Promise<string> => {
    return userSetTimezone({ id, timezone })
           .then(value => ('' !== value) ?
               translation.t('setTimezone', { timezone: parseTimezone(timezone) }) :
               translation.t('errorSetTimezone')
           ).catch(() => translation.t('errorSetTimezone'));
};

export const handleSentLocation = async ({ id, latitude, longitude, translation }: IHandleSentLocation): Promise<string> => {
    const timezone = await googlezone({ latitude, longitude });

    return handleTimezone({ id, timezone, translation });
};
