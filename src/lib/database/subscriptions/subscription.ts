import { IAllSubscriptionContext, IAllSubscriptionResponse, ISubscription, ISubscriptionContext } from '.';
import { Subscription } from './model';

const newSubscription = async ({ user, kind, content_id }: ISubscriptionContext): Promise<boolean> => {
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };

    return Subscription.findOneAndUpdate({ user, kind, content_id }, { }, options).then(async () => true).catch(() => false);
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

export const addSubscription = async ({ user, kind, content_id }: ISubscriptionContext): Promise<boolean> => {
    // This handles retrocompatibility.
    const update = { $rename: { type: 'kind', content: 'content_id' } };

    return Subscription.findOneAndUpdate({ user, kind, content_id }, update).then(async (subscription: ISubscription) => {
        return (null === subscription) ? newSubscription({ user, kind, content_id }) : false;
    }).catch(() => false);
};

export const fetchAllSubscription = async ({ user, kind }: IAllSubscriptionContext): Promise<IAllSubscriptionResponse[]> => {
    return Subscription.find({ user, kind }).then(filterSubscriptions).catch(() => []);
};
