import { Schema } from 'mongoose';

export const notifySchema = new Schema({
    time: Date,
    _id: Number,
    type: Boolean
});
