import { DBAnime, DBManga } from '..';

export interface DBNotifications {
    readonly time: Date;
    readonly _id: number;
    readonly type: DBAnime | DBManga;
}
