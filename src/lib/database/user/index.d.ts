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

type errorFunction = (res: Error) => void;

type successAllFunction = (res: IDBUser[]) => void;

type successFunction = (res: IDBUser) => void;

export interface IUserContext {
    readonly id: number;
    readonly error: errorFunction;
    readonly success: successFunction;
}

export interface IUserAllContext {
    readonly error: errorFunction;
    readonly success: successAllFunction;
}

export interface IUserLanguageContext {
    readonly id: number;
    readonly language: string;
}

export interface IUserSetLanguageContext {
    readonly user: IDBUser;
    readonly language: string;
}
