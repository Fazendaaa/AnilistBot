import { fetchNextEpisode } from '../../anilist/requests/nextEpisode';
import { addNotifications } from '../../database/notifications/notifications';
import { addSubscription, removeSubscription, toogleSubscription } from '../../database/subscriptions/subscription';
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
    return removeSubscription({ kind: true, content_id: id, user })
           .then(() => translation.t('removedWatchlist'))
           .catch(() => translation.t('errorWatchlist'));
};

const removeReadlist = async ({ user, id, translation }: ISubscriptionContext): Promise<string> => {
    return removeSubscription({ kind: false, content_id: id, user })
           .then(() => translation.t('removedReadlist'))
           .catch(() => translation.t('errorReadlist'));
};

const animeNotify = async ({ user, id, translation }: ISubscriptionContext): Promise<string> => {
    return toogleSubscription({ kind: true, content_id: id, user }).then((value: boolean) => {
        return (true === value) ? translation.t('animeNotifyEnabled') : translation.t('animeNotifyDisabled');
    }).catch(() => translation.t('animeNotifyError'));
};

const mangaNotify = async ({ user, id, translation }: ISubscriptionContext): Promise<string> => {
    return toogleSubscription({ kind: false, content_id: id, user }).then((value: boolean) => {
        return (true === value) ? translation.t('mangaNotifyEnabled') : translation.t('mangaNotifyDisabled');
    }).catch(() => translation.t('mangaNotifyError'));
};

const handleWatchlist = async ({ action, ...remaining }: IHandleList): Promise<string> => {
    if ('SUBSCRIBE' === action) {
        return addWatchlist(remaining);
    } if ('UNSUBSCRIBE' === action) {
        return removeWatchlist(remaining);
    }

    return animeNotify(remaining);
};

const handleReadlist = async ({ action, ...remaining }: IHandleList): Promise<string> => {
    if ('SUBSCRIBE' === action) {
        return addReadlist(remaining);
    } if ('UNSUBSCRIBE' === action) {
        return removeReadlist(remaining);
    }

    return mangaNotify(remaining);
};

export const listCallback = async ({ request, dbStatus, ...remaining }: IListContext): Promise<string> => {
    if (false === dbStatus) {
        return remaining.translation.t('dbDown');
    } if ('WATCH' === request) {
        return handleWatchlist(remaining);
    }

    return handleReadlist(remaining);
};
