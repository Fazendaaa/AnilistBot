import { Schema } from 'mongoose';
const { ObjectId } = Schema.Types;

const translation = {
    type: Map,
    of: String,
    default: { }
};

const media = {
    _id: Number,
    ANN_ID: {
        type: Number,
        default: null
    },
    genres: {
        type: ObjectId,
        ref: 'Translation'
    },
    description: {
        type: ObjectId,
        ref: 'Translation'
    }
};

const others = {
    _id: Number,
    description: {
        type: ObjectId,
        ref: 'Translation'
    }
};

export const animeSchema = new Schema(media);

export const mangaSchema = new Schema(media);

export const staffSchema = new Schema(others);

export const characterSchema = new Schema(others);

export const translationSchema = new Schema(translation);
