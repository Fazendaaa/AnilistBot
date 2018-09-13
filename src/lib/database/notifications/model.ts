import { model } from 'mongoose';
import { laterNotifySchema, notifySchema } from './schema';

export const Notifications = model('Notifications', notifySchema);

export const LaterNotifications = model('Later Notifications', laterNotifySchema);
