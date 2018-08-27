import { model } from 'mongoose';
import { userSchema } from './schema';

export const User = model('User', userSchema);
