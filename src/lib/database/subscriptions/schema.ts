import { Schema } from 'mongoose';

export const subscriptionSchema = new Schema({
    user: Number,
    kind: Boolean,
    content_id: Number,
    notify: {
        type: Boolean,
        default: true
    }
});
