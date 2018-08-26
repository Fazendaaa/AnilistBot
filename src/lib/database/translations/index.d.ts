import { Document } from 'mongoose';
import { AllRequests } from '../../anilist/requests';

export interface FetchTranslationContext {
    readonly id: number;
    readonly to: string;
    readonly type: AllRequests;
}

export interface NewTranslationContext {
    readonly id: number;
    readonly to: string;
    readonly message: string;
    readonly type: AllRequests;
}

export interface Translation extends Document {
    languages: any;
    readonly _id: number;
}
