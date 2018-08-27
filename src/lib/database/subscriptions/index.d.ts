import { DBAnime, DBManga } from '..';

export interface Subscription {
    readonly user: number;
    readonly content: number;
    readonly type: DBAnime | DBManga;
}
