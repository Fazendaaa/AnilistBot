import { Schema } from 'mongoose';

const counter = {
    _id: Number,
    counter: {
        type: Number,
        default: null
    }
};

export const counterSchema = new Schema(counter);
