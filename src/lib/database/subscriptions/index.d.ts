import { DBAnime, DBManga } from '..';

export interface ISubscription {
    readonly user: number;
    readonly content: number;
    readonly type: DBAnime | DBManga;
}
