import { fetchNextEpisode } from '../../anilist/requests/nextEpisode';
import { addNotifications } from '../../database/notifications/notifications';
import { addSubscription, removeSubscription } from '../../database/subscriptions/subscription';
import { IHandleList, IListContext, ISubscriptionContext } from './index';

const addWatchlist = async ({ user, id, translation }: ISubscriptionContext): Promise<string> => {
    fetchNextEpisode(id).then(async (time: Date) => addNotifications({ kind: true, id, time }));

    return addSubscription({ kind: true, content_id: id, user }).then((added: boolean) => {
        return (true === added) ? translation.t('addedWatchlist') : translation.t('alreadyWatchlist');
    }).catch(() => translation.t('errorWatchlist'));
};

const addReadlist = async ({ user, id, translation }: ISubscriptionContext): Promise<string> => {
    return addSubscription({ kind: false, content_id: id, user }).then((added: boolean) => {
        return (true === added) ? translation.t('addedReadlist') : translation.t('alreadyReadlist');
    }).catch(() => translation.t('errorReadlist'));
};

const removeWatchlist = async ({ user, id, translation }: ISubscriptionContext): Promise<string> => {
    return removeSubscription({ kind: true, content_id: id, user }).then((added: boolean) => {
        return (true === added) ? translation.t('removedWatchlist') : translation.t('alreadyRemovedWatchlist');
    }).catch(() => translation.t('errorWatchlist'));
};

const removeReadlist = async ({ user, id, translation }: ISubscriptionContext): Promise<string> => {
    return removeSubscription({ kind: false, content_id: id, user }).then((added: boolean) => {
        return (true === added) ? translation.t('removedReadlist') : translation.t('alreadyRemovedReadlist');
    }).catch(() => translation.t('errorReadlist'));
};

const handleWatchlist = async ({ action, ...remaining }: IHandleList): Promise<string> => {
    return ('SUBSCRIBE' === action) ? addWatchlist(remaining) : removeWatchlist(remaining);
};

const handleReadlist = async ({ action, ...remaining }: IHandleList): Promise<string> => {
    return ('SUBSCRIBE' === action) ? addReadlist(remaining) : removeReadlist(remaining);
};

export const listCallback = async ({ request, dbStatus, ...remaining }: IListContext): Promise<string> => {
    if (false === dbStatus) {
        return remaining.translation.t('dbDown');
    } if ('WATCH' === request) {
        return handleWatchlist(remaining);
    }

    return handleReadlist(remaining);
};
