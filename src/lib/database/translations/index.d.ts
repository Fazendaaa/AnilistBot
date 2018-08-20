import { AllTypes } from '../../anilist';
import { Document } from 'mongoose';

export interface FetchTranslationContext {
    readonly id: number;
    readonly to: string;
    readonly type: AllTypes;
}

export interface NewTranslationContext {
    readonly id: number;
    readonly to: string;
    readonly type: AllTypes;
    readonly message: string;
}

export interface Language extends Document {
    readonly to: string;
    readonly message: string;
}

export interface Translation extends Document {
    readonly _id: number;
    readonly languages: Language;
}
