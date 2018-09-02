import { Schema } from 'mongoose';

export const userSchema = new Schema({
    _id: Number,
    notify: {
        type: Boolean,
        default: true
    },
    time: {
        type: Date,
        default: null
    },
    timezone: {
        type: String,
        default: null
    },
    language: {
        type: String,
        default: null
    },
    counter: {
        type: Number,
        default: null
    }
});
