import { Schema } from 'mongoose';

export const userSchema = new Schema({
    _id: Number,
    notify: {
        type: Boolean,
        default: true
    },
    timezone: {
        type: String,
        default: null
    },
    language: {
        type: String,
        default: null
    }
});
