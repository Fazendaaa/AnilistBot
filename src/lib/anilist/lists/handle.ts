import { IListContext, ISubscriptionContext } from '.';
import { addNotifications } from '../../database/notifications/notifications';
import { addSubscription } from '../../database/subscriptions/subscription';
import { fetchNextEpisode } from '../requests/nextEpisode';

const handleWatchlist = async ({ user, id, translation }: ISubscriptionContext): Promise<string> => {
    return addSubscription({ kind: true, content_id: id, user }).then(added => {
        return (true === added) ? translation.t('addedWatchlist') : translation.t('alreadyWatchlist');
    }).catch(() => translation.t('errorWatchlist'));
};

const handleReadlist = async ({ user, id, translation }: ISubscriptionContext): Promise<string> => {
    return addSubscription({ kind: false, content_id: id, user }).then(added => {
        return (true === added) ? translation.t('addedReadlist') : translation.t('alreadyReadlist');
    }).catch(() => translation.t('errorReadlist'));
};

export const handleList = async ({ id, user, request, translation }: IListContext): Promise<string> => {
    if ('WATCHLIST' === request) {
        fetchNextEpisode(id).then(time => addNotifications({ kind: true, id, time }));

        return handleWatchlist({ id, user, translation });
    }

    return handleReadlist({ id, user, translation });
};
