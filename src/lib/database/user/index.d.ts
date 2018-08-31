import { Document } from 'mongoose';

export interface IDBUser extends Document {
    notify: boolean;
    language: string;
    timezone: string;
    readonly _id: number;
}

export interface ILanguageContext {
    readonly id: number;
    readonly language: string;
}
