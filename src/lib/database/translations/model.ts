import { model } from 'mongoose';
import { animeDescriptionSchema, animeGenresSchema, characterDescriptionSchema, mangaDescriptionSchema,
mangaGenresSchema, staffDescriptionSchema } from './schema';

export const animeGenres = model('animeGenres', animeGenresSchema);

export const mangaGenres = model('mangaGenres', mangaGenresSchema);

export const animeDescription = model('animeDescription', animeDescriptionSchema);

export const mangaDescription = model('mangaDescription', mangaDescriptionSchema);

export const staffDescription = model('staffDescription', staffDescriptionSchema);

export const characterDescription = model('characterDescription', characterDescriptionSchema);
