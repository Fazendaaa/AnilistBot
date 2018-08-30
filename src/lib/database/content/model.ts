import { model } from 'mongoose';
import { animeSchema, characterSchema, mangaSchema, staffSchema, translationSchema } from './schema';

export const Anime = model('Anime', animeSchema);

export const Manga = model('Manga', mangaSchema);

export const Staff = model('Description', staffSchema);

export const Character = model('Description', characterSchema);

export const Translation = model('Translation', translationSchema);
