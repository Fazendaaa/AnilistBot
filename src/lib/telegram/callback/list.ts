import { fetchNextEpisode } from '../../anilist/requests/nextEpisode';
import { addNotifications } from '../../database/notifications/notifications';
import { addSubscription } from '../../database/subscriptions/subscription';
import { IListContext, ISubscriptionContext } from './index';

const handleWatchlist = async ({ user, id, translation }: ISubscriptionContext): Promise<string> => {
    return addSubscription({ kind: true, content_id: id, user }).then((added: boolean) => {
        return (true === added) ? translation.t('addedWatchlist') : translation.t('alreadyWatchlist');
    }).catch(() => translation.t('errorWatchlist'));
};

const handleReadlist = async ({ user, id, translation }: ISubscriptionContext): Promise<string> => {
    return addSubscription({ kind: false, content_id: id, user }).then((added: boolean) => {
        return (true === added) ? translation.t('addedReadlist') : translation.t('alreadyReadlist');
    }).catch(() => translation.t('errorReadlist'));
};

export const listCallback = async ({ id, user, request, translation }: IListContext): Promise<string> => {
    if ('WATCH' === request) {
        fetchNextEpisode(id).then(async (time: Date) => addNotifications({ kind: true, id, time }));

        return handleWatchlist({ id, user, translation });
    }

    return handleReadlist({ id, user, translation });
};
