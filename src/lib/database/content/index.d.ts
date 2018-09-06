import { Document } from 'mongoose';
import { AnilistObject } from '../../anilist';

interface IMongooseMap {
    readonly set: (key: string, value: string) => string;
    readonly get: (key: string) => object | string | undefined;
}

interface IMedia extends Document {
    readonly _id: number;
    readonly genres: IMongooseMap;
    readonly description: IMongooseMap;
}

interface IOthers extends Document {
    readonly _id: number;
    readonly genres: IMongooseMap;
    readonly description: IMongooseMap;
}

export interface IFetchTranslationContext {
    readonly id: number;
    readonly to: string;
    readonly content: AnilistObject;
}

export interface INewTranslationContext {
    readonly id: number;
    readonly to: string;
    readonly message: string;
    readonly content: AnilistObject;
}

export interface IAnime extends IMedia { }

export interface IManga extends IMedia { }

export interface IStaff extends IOthers { }

export interface ICharacter extends IOthers { }

export type AllContent = IAnime |
                         IManga |
                         IStaff |
                         ICharacter
