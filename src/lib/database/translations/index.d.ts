import { Document } from 'mongoose';
import { AllRequests } from '../../telegram';

export interface FetchTranslationContext {
    readonly id: number;
    readonly to: string;
    readonly request: AllRequests;
}

export interface NewTranslationContext {
    readonly id: number;
    readonly to: string;
    readonly message: string;
    readonly request: AllRequests;
}

export interface Translation extends Document {
    languages: any;
    readonly _id: number;
}
