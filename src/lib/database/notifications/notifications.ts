import moment from 'moment';
import { IAddLaterNotifications, IDBLaterNotifications, IDBLaterNotificationsInfo, IDBNotifications, IDBNotificationsInfo,
ILaterNotifications, IMediaNotifications, INewLaterNotification, INotificationsContext } from '.';
import { fetchNextEpisode } from '../../anilist/requests/nextEpisode';
import { LaterNotifications, Notifications } from './model';

const options = { new: true, upsert: true, strict: false, setDefaultsOnInsert: true };

const emptyReturn = () => {
    return {};
};

const addADay = (input: Date): Date => {
    const nextDay = new Date();

    nextDay.setDate(input.getDate() + 1);

    return nextDay;
};

const handleInfo = ({ _id, time, kind }: IDBNotifications): IDBNotificationsInfo => {
    return {
        _id,
        time,
        kind
    };
};

const newLaterNotification = async ({ response, kind, content_id }: INewLaterNotification): Promise<boolean> => {
    response.media.push({ kind, content_id });

    return response.save().then(() => true).catch(() => false);
};

const laterNotificationsInfo = (response: IDBLaterNotifications[]): IDBLaterNotificationsInfo[] => {
    return response.map((data) => {
        const { _id, time, media } = data;

        data.time = addADay(data.time);
        data.save();

        return {
            _id,
            time,
            media
        };
    });
};

export const addNotifications = async ({ id, kind, time }: INotificationsContext): Promise<IDBNotificationsInfo | {}> => {
    // This handles retrocompatibility.
    const update = { $rename: { type: 'kind' } };

    return Notifications.findOneAndUpdate({ _id: id, kind, time }, update, options).then(handleInfo).catch(emptyReturn);
};

export const fetchAllAnimesNotifications = async (): Promise<IDBNotificationsInfo[]> => {
    return Notifications.find({}).then((response: IDBNotifications[]) => response.map(handleInfo)).catch(() => []);
};

const handleMediaNotify = async (notification: IDBNotifications): Promise<IDBNotificationsInfo | {}> => {
    const newRelease = await fetchNextEpisode(notification._id);

    notification.time = newRelease;

    return notification.save().then(({ _id, time, kind }) => {
        return {
            _id,
            time,
            kind
        };
    }).catch(emptyReturn);
};

export const fetchMediaNotifications = async ({ kind }: IMediaNotifications): Promise<IDBNotificationsInfo[] | {}> => {
    return Notifications.find({ kind }).where('time').lte(Date.now()).then((response: IDBNotifications[]) => {
        return Promise.all(response.map(handleMediaNotify));
    }).catch(() => []);
};

export const addLaterNotifications = async ({ _id, content_id, kind }: IAddLaterNotifications): Promise<boolean> => {
    return LaterNotifications.findByIdAndUpdate(_id, {}, options).then(async (response: IDBLaterNotifications) => {
        return newLaterNotification({ response, content_id, kind });
    }).catch(() => false);
};

export const fetchLaterNotifications = async ({ kind }: ILaterNotifications): Promise<IDBLaterNotificationsInfo[]> => {
    const now = moment(Date.now()).seconds(0).milliseconds(0).toDate();

    return LaterNotifications.find({ kind }).where('time').equals(now).then(laterNotificationsInfo).catch(() => []);
};
