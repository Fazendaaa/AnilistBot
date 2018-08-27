import { Schema } from 'mongoose';

export const subscriptionSchema = new Schema({
    user: Number,
    type: Boolean,
    content: Number,
    notify: {
        type: Boolean,
        default: true
    }
});
