import { Schema } from 'mongoose';

export const notifySchema = new Schema({
    _id: Number,
    kind: Boolean,
    time: {
        type: Date,
        default: null
    }
});
