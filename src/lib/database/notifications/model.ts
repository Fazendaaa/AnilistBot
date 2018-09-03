import { model } from 'mongoose';
import { notifySchema } from './schema';

export const Notifications = model('Notifications', notifySchema);
