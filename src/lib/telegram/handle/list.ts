import { IListContext, ISubscriptionContext } from '.';
import { ITitleStatus } from '../../anilist/queries';
import { fetchNextEpisode } from '../../anilist/requests/nextEpisode';
import { animeSearchTitle, mangaSearchTitle } from '../../anilist/searches/title';
import { addNotifications } from '../../database/notifications/notifications';
import { addSubscription, fetchAllSubscription } from '../../database/subscriptions/subscription';
import { IToPrintContext, IUserAnimeContext, IUserMangaContext } from '../../database/user';

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

const toPrintFormat = ({ translation, title }: IToPrintContext): string => {
    const { english, romaji, native } = title;
    let response = '';

    if (null !== native) {
        response += translation.t('japan', { japan: native });
    } if (null !== english) {
        response += translation.t('english', { english });
    } if (null !== romaji) {
        response += translation.t('romaji', { romaji });
    }

    return response;
};

export const handleList = async ({ id, user, request, translation }: IListContext): Promise<string> => {
    if ('WATCH' === request) {
        fetchNextEpisode(id).then(async (time: Date) => addNotifications({ kind: true, id, time }));

        return handleWatchlist({ id, user, translation });
    }

    return handleReadlist({ id, user, translation });
};

export const fetchUserAnime = async ({ user, status, translation }: IUserAnimeContext): Promise<string> => {
    const fetched = await fetchAllSubscription({ user, kind: true });
    const curriedToPrintFormat = (({ title }: ITitleStatus) => toPrintFormat({ translation, title }));
    const allAnime = await Promise.all(fetched.map(async ({ content_id }) => animeSearchTitle(content_id)));
    let response = allAnime;

    if (null !== status) {
        response = allAnime.filter((element: ITitleStatus) => element.status === status);
    }

    return response.map(curriedToPrintFormat).join('\n');
};

export const fetchUserManga = async ({ user, status, translation }: IUserMangaContext): Promise<string> => {
    const fetched = await fetchAllSubscription({ user, kind: false });
    const curriedToPrintFormat = (({ title }: ITitleStatus) => toPrintFormat({ translation, title }));
    const allManga = await Promise.all(fetched.map(async ({ content_id }) => mangaSearchTitle(content_id)));
    let response = allManga;

    if (null !== status) {
        response = allManga.filter((element: ITitleStatus) => element.status === status);
    }

    return response.map(curriedToPrintFormat).join('\n');
};
