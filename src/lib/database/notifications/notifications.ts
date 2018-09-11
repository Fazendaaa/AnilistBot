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
