import { Job, Range, RecurrenceRule, scheduleJob } from 'node-schedule';
import { fetchCounter } from '../database/counter/counter';
import { fetchAllAnimesNotifications, updateMissingMediaNotifications } from '../database/notifications/notifications';

const scheduleMessage = 'Counting how much time each anime has and fetching missing media notifications.';
const oncePerDay = new RecurrenceRule();

oncePerDay.dayOfWeek = [ new Range(0, 6) ];
oncePerDay.hour = 23;
oncePerDay.minute = 59;
oncePerDay.second = 59;

export const counterSchedule = (): Job => scheduleJob(scheduleMessage, oncePerDay, async () => {
    const allAnimes = await fetchAllAnimesNotifications();

    updateMissingMediaNotifications({ kind: true });

    allAnimes.map(async ({ _id }) => fetchCounter(_id));
});
