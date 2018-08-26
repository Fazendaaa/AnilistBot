import { Schema } from 'mongoose';

const commonSchema = {
    _id: Number,
    languages: {
        type: Map,
        of: String,
        default: {}
    }
};

export const animeGenresSchema = new Schema(commonSchema);

export const mangaGenresSchema = new Schema(commonSchema);

export const animeDescriptionSchema = new Schema(commonSchema);

export const mangaDescriptionSchema = new Schema(commonSchema);

export const staffDescriptionSchema = new Schema(commonSchema);

export const characterDescriptionSchema = new Schema(commonSchema);
