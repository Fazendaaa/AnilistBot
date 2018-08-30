import { Schema } from 'mongoose';

const media = {
    _id: Number,
    ANN_ID: {
        type: Number,
        default: null
    },
    genres: {
        type: Map,
        of: String,
        default: {}
    },
    description: {
        type: Map,
        of: String,
        default: {}
    }
};

const others = {
    _id: Number,
    description: {
        type: Map,
        of: String,
        default: {}
    }
};

export const animeSchema = new Schema(media);

export const mangaSchema = new Schema(media);

export const staffSchema = new Schema(others);

export const characterSchema = new Schema(others);
