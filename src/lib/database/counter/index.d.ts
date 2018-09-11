import { Document } from 'mongoose';

export interface IDBCounter extends Document {
    counter: number;
    readonly _id: number;
}
