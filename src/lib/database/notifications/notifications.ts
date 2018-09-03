import { IDBNotifications, IDBNotificationsInfo, INotificationsContext } from '.';
import { Notifications } from './model';

const handleInfo = (notification: IDBNotifications): IDBNotificationsInfo => {
    const { _id, time, kind } = notification;

    return {
        _id,
        time,
        kind
    };
};

export const addNotifications = async ({ id, kind, time }: INotificationsContext): Promise<IDBNotificationsInfo | {}> => {
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };
    // This handles retrocompatibility.
    const update = { $rename: { type: 'kind' } };

    return Notifications.findOneAndUpdate({ _id: id, kind, time }, update, options).then(handleInfo).catch(() => {
        return {};
    });
};
