import { Schema } from 'mongoose';

export const notifySchema = new Schema({
    _id: Number,
    kind: Boolean,
    time: {
        type: Date,
        default: null
    }
});

export const laterNotifySchema = new Schema({
    _id: Number,
    time: {
        type: Date,
        default: null
    },
    media: {
        type: Array,
        default: []
    }
});
