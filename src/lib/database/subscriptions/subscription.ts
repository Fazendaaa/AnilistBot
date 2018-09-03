import { ISubscription, ISubscriptionContext } from '.';
import { Subscription } from './model';

const newSubscription = async ({ user, kind, content_id }: ISubscriptionContext): Promise<boolean> => {
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };

    return Subscription.findOneAndUpdate({ user, kind, content_id }, { }, options).then(async () => true).catch(() => false);
};

export const addSubscription = async ({ user, kind, content_id }: ISubscriptionContext): Promise<boolean> => {
    // This handles retrocompatibility.
    const update = { $rename: { type: 'kind', content: 'content_id' } };

    return Subscription.findOneAndUpdate({ user, kind, content_id }, update).then(async (subscription: ISubscription) => {
        return (null === subscription) ? newSubscription({ user, kind, content_id }) : false;
    }).catch(() => false);
};
