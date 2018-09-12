import { IAllSubscribersContext, IAllSubscribersResponse, IAllSubscriptionContext, IAllSubscriptionResponse, INotifySubscribers,
INotifySubscribersResponse, ISubscription, ISubscriptionContext } from '.';
import { Subscription } from './model';

const newSubscription = async ({ user, kind, content_id }: ISubscriptionContext): Promise<boolean> => {
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };

    return Subscription.findOneAndUpdate({ user, kind, content_id }, { }, options).then(async () => true).catch(() => false);
};

const toggle = async (subscription: ISubscription): Promise<boolean> => {
    subscription.notify = !subscription.notify;

    return subscription.save().then(({ notify }) => notify).catch(() => false);
};

const filterSubscriptions = async (subscriptions: ISubscription[]): Promise<IAllSubscriptionResponse[]> => {
    if (null === subscriptions) {
        return [];
    }

    return subscriptions.map(({ kind, notify, content_id }: ISubscription) => {
        return {
            kind,
            notify,
            content_id
        };
    });
};

const allSubscribers = async (subscriptions: ISubscription[]): Promise<IAllSubscribersResponse[]> => {
    if (null === subscriptions) {
        return [];
    }

    return subscriptions.map(({ user, kind, notify, content_id }: ISubscription) => {
        return {
            user,
            kind,
            notify,
            content_id
        };
    });
};

const notifySubscribers = async (subscriptions: ISubscription[]): Promise<INotifySubscribersResponse | {}> => {
    if (null === subscriptions) {
        return {};
    }

    return {
        kind: subscriptions[0].kind,
        content_id: subscriptions[0].content_id,
        users: subscriptions.map(({ user }: ISubscription) => user)
    };
};

export const fetchAllSubscription = async ({ user, kind }: IAllSubscriptionContext): Promise<IAllSubscriptionResponse[]> => {
    return Subscription.find({ user, kind }).then(filterSubscriptions).catch(() => []);
};

export const fetchAllSubscribers = async ({ kind, notify, content_id }: IAllSubscribersContext): Promise<IAllSubscribersResponse[]> => {
    return Subscription.find({ kind, notify, content_id }).then(allSubscribers).catch(() => []);
};

export const fetchNotifySubscribers = async ({ kind, content_id }: INotifySubscribers): Promise<INotifySubscribersResponse | {}> => {
    return Subscription.find({ notify: true, kind, content_id }).then(notifySubscribers).catch(() => {
        return {};
    });
};

export const toogleSubscription = async ({ user, kind, content_id }: ISubscriptionContext): Promise<boolean> => {
    return Subscription.findOneAndUpdate({ user, kind, content_id }, {}).then(toggle).catch(() => false);
};

export const addSubscription = async ({ user, kind, content_id }: ISubscriptionContext): Promise<boolean> => {
    // This handles retrocompatibility.
    const update = { $rename: { type: 'kind', content: 'content_id' } };

    return Subscription.findOneAndUpdate({ user, kind, content_id }, update).then(async (subscription: ISubscription) => {
        return (null === subscription) ? newSubscription({ user, kind, content_id }) : false;
    }).catch(() => false);
};

export const removeSubscription = async ({ user, kind, content_id }: ISubscriptionContext): Promise<boolean> => {
    return Subscription.findOneAndRemove({ user, kind, content_id }).then(async () => true).catch(() => false);
};
