import { DBAnime, DBManga } from '..';

export interface IDBNotifications {
    readonly time: Date;
    readonly _id: number;
    readonly type: DBAnime | DBManga;
}
