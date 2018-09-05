import { DBAnime, DBManga } from '..';
import { Document } from 'mongoose';
import { I18n } from 'telegraf-i18n';

export interface ISubscription extends Document {
    notify: boolean;
    readonly user: number;
    readonly content_id: number;
    readonly kind: DBAnime | DBManga;
}

export interface ISubscriptionInfo {
    readonly user: number;
    readonly notify: boolean;
    readonly content_id: number;
    readonly kind: DBAnime | DBManga;
}

export interface ISubscriptionContext {
    readonly user: number;
    readonly content_id: number;
    readonly kind: DBAnime | DBManga;
}

export interface IAllSubscriptionContext {
    readonly user: number;
    readonly kind: DBAnime | DBManga;
}

export interface IAllSubscriptionResponse {
    readonly notify: boolean;
    readonly content_id: number;
    readonly kind: DBAnime | DBManga;
}
