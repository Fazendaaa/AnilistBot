import { DBAnime, DBManga } from '..';
import { Document } from 'mongoose';

export interface IDBNotificationsInfo {
    readonly time: Date;
    readonly _id: number;
    readonly kind: DBAnime | DBManga;
}

export interface INotificationsContext {
    readonly id: number;
    readonly time: Date;
    readonly kind: DBAnime | DBManga;
}

export interface IDBNotifications extends Document {
    time: Date;
    readonly _id: number;
    kind: DBAnime | DBManga;
}
