import { Job, Range, RecurrenceRule, scheduleJob } from 'node-schedule';
import { fetchCounter } from '../../database/counter/counter';
import { fetchAllAnimesNotifications } from '../../database/notifications/notifications';

const oncePerDay = new RecurrenceRule();

oncePerDay.dayOfWeek = [ new Range(0, 6) ];
oncePerDay.hour = 23;
oncePerDay.minute = 59;
oncePerDay.second = 59;

export const counterSchedule = (): Job => scheduleJob('Cleaning DB.', oncePerDay, async () => {
    try {
        const allAnimes = await fetchAllAnimesNotifications();

        allAnimes.map(({ _id }) => fetchCounter(_id));
    } catch (err) {
        console.error(err);
    }
});
