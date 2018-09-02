import moment, { Moment } from 'moment';
import momentTimezone from 'moment-timezone';
import { IDBUser, IDBUserInfo, IUserAllContext, IUserContext, IUserLanguageContext, IUserNotifyContext, IUserTimeContext,
IUserTimezoneContext } from '.';
import { errorDate } from '../utils';
import { User } from './model';

const options = { upsert: true, new: true, runValidators: true, setDefaultsOnInsert: true };

const handleCallbackBoolean = (err: Error): boolean => {
    console.log(err);

    return false;
};

// Why?  If  any  server  error  occurs consistency must always be priority. This is just to ensure that if user change his time for updates
// won't be set for two days from now or anything like that.
const handleTimeInconsistency = (time: Moment): Date => {
    let newTime = time;

    if (moment().add(1, 'day') < newTime) {
        newTime = newTime.subtract(1, 'day');
    }

    return newTime.toDate();
};

const handleDeprecatedDB = async (user: IDBUser): Promise<IDBUser | {}> => {
    let changed = false;

    if (undefined === user.time) {
        user.time = null;
        changed = true;
    } if (undefined === user.timezone) {
        user.timezone = null;
        changed = true;
    } if (undefined === user.counter) {
        user.counter = null;
        changed = true;
    } if (true === changed) {
        return user.save().then(async (userSaved: IDBUser) => userSaved).catch(() => {
            return {};
        });
    }

    return user;
};

const __userInfo = async (user: IDBUser) => handleDeprecatedDB(user).then((userSaved: IDBUser) => {
    const { _id, notify, counter, language, time, timezone } = userSaved;

    return {
        _id,
        time,
        notify,
        counter,
        language,
        timezone
    };
});

export const userAll = async ({ success, error }: IUserAllContext): Promise<void> => User.find({}).then(success).catch(error);

// This function only uses findByIdAndUpdate instead of findById because of the older DB that has to be compatible.
export const userInfo = async (id: number): Promise<IDBUserInfo | {}> => {
    return User.findByIdAndUpdate(id, {}, options).then(__userInfo).catch(() => {
        return {};
    });
};

export const userFind = async ({ id, success, error }: IUserContext): Promise<void> => {
    return User.findByIdAndUpdate(id, {}, options).then(async (user: IDBUser) => {
        return handleDeprecatedDB(user).then(success);
    }).catch(error);
};

export const userLanguage = async ({ id, language }: IUserLanguageContext): Promise<string> => {
    return User.findByIdAndUpdate(id, {}, options).then(async (user: IDBUser) => {
        user.language = language;

        return user.save().then(async (userSaved: IDBUser) => userSaved.language).catch(() => '');
    }).catch(() => '');
};

export const userGetNotification = async (id: number): Promise<boolean> => {
    return User.findByIdAndUpdate(id, {}, options).then(async (user: IDBUser) => user.notify).catch(handleCallbackBoolean);
};

export const userSetNotification = async ({ id, notify }: IUserNotifyContext): Promise<boolean> => {
    return User.findByIdAndUpdate(id, {}, options).then(async (user: IDBUser) => {
        user.notify = notify;

        return user.save().then(async (userSaved: IDBUser) => userSaved.notify).catch(handleCallbackBoolean);
    }).catch(handleCallbackBoolean);
};

export const userGetTimezone = async (id: number): Promise<string> => {
    return User.findByIdAndUpdate(id, {}, options).then(async (user: IDBUser) => user.timezone).catch(() => '');
};

export const userSetTimezone = async ({ id, timezone }: IUserTimezoneContext): Promise<string> => {
    return User.findByIdAndUpdate(id, {}, options).then(async (user: IDBUser) => {
        user.timezone = timezone;

        return user.save().then(async (userSaved: IDBUser) => userSaved.timezone).catch(() => '');
    }).catch(() => '');
};

export const userSetTime = async ({ id, time }: IUserTimeContext): Promise<Date> => {
    return User.findByIdAndUpdate(id, {}, options).then(async (user: IDBUser) => {
        const hour = momentTimezone.tz(user.timezone).hours(time).minutes(0).seconds(0).milliseconds(0);

        user.time = handleTimeInconsistency(hour);

        return user.save().then(async (userSaved: IDBUser) => userSaved.time).catch(() => errorDate);
    }).catch(() => errorDate);
};
