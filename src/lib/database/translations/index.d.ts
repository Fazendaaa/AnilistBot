import { Document } from 'mongoose';
import { AllRequests } from '../../telegram';

interface MongooseMap {
    readonly set: (key: string, value: string) => string;
    readonly get: (key: string) => object | string | undefined;
}

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
    readonly _id: number;
    readonly languages: MongooseMap;
}
