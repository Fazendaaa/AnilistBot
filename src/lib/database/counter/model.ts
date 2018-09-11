import { model } from 'mongoose';
import { counterSchema } from './schema';

export const Counter = model('Counter', counterSchema);
