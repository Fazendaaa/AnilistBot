import { model } from 'mongoose';
import { notifySchema } from './schema';

export const Subscription = model('Notifications', notifySchema);
