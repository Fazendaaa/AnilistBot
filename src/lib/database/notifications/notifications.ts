import { IDBNotifications, IDBNotificationsInfo, INotificationsContext } from '.';
import { fetchNextEpisode } from '../../anilist/requests/nextEpisode';
import { Notifications } from './model';

const handleInfo = ({ _id, time, kind }: IDBNotifications): IDBNotificationsInfo => {
    return {
        _id,
        time,
        kind
    };
};

export const addNotifications = async ({ id, kind, time }: INotificationsContext): Promise<IDBNotificationsInfo | {}> => {
    const options = { new: true, upsert: true, strict: false, setDefaultsOnInsert: true };
    // This handles retrocompatibility.
    const update = { $rename: { type: 'kind' } };

    return Notifications.findOneAndUpdate({ _id: id, kind, time }, update, options).then(handleInfo).catch(() => {
        return {};
    });
};

export const fetchAllAnimesNotifications = async (): Promise<IDBNotificationsInfo[]> => {
    return Notifications.find({}).then((response: IDBNotifications[]) => response.map(handleInfo)).catch(() => []);
};

const handleMediaNotify = (notification: IDBNotifications): IDBNotificationsInfo => {
    const { _id, time, kind } = notification;

    // update to next release.
    fetchNextEpisode(_id).then(async (newRelease: Date) => addNotifications({ id: _id, time: newRelease, kind }));

    return {
        _id,
        time,
        kind
    };
};

export const fetchMediaNotifications = async (): Promise<IDBNotificationsInfo[]> => {
    // Only 'true' because only Animes are currently supported to notify upon releases.
    return Notifications.find({ kind: true }).where('time').lte(Date.now()).then((response: IDBNotifications[]) => {
        return response.map(handleMediaNotify);
    }).catch(() => []);
};
